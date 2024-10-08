import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { CartContext } from '@/context/CartContext.jsx'; 
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { Link } from 'react-router-dom'; 
// import { route } from '@/routes'; 
import Constants from '@/utils/Constants.jsx'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
    return <p>{content}</p>;
}


export default function Pay() { 
    const { authTokens } = useContext(AuthContext); 
    const { cartItems, getTotalPrice } = useContext(CartContext); 
    const initialOptions = {
        "client-id": `${Constants?.paypalClientID}`,
        "enable-funding": "venmo",
        "disable-funding": "",
        "buyer-country": "US",
        currency: "USD",
        "data-page-type": "product-details",
        components: "buttons",
        "data-sdk-integration-source": "developer-studio",
    };
    const [message, setMessage] = useState(""); 


    return ( 
        <Layout> 
            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main py-2 pb-4"> 

                    <h2 className="border-bottom pb-1 mb-4 pt-3 fs-4">Payment</h2> 

                    <section className="d-flex amount pb-4">
                        <span>Amount Payable:&nbsp;<span className="fw-semibold fs-3">${ getTotalPrice()?.toFixed(2) }</span></span> 
                    </section> 

                    <section className="d-flex flex-column justify-content-center align-items-start flex-wrap gap-4" style={{ maxWidth: '600px' }}> 

                        <PayPalScriptProvider options={initialOptions}>
                            <PayPalButtons
                                style={{
                                    shape: "pill",
                                    layout: "vertical",
                                    color: "black",
                                    label: "pay",
                                }}
                                createOrder={async () => {
                                    try {
                                    const response = await fetch(`${Constants.serverURL}/api/v1/orders`, {
                                        method: "POST",
                                        headers: { 
                                            "Content-Type": "application/json", 
                                            "Authorization": `Bearer ${ authTokens?.access }`, 
                                        },
                                        // use the "body" param to optionally pass additional order information
                                        // like product ids and quantities
                                        body: JSON.stringify({
                                            // cart: [
                                            //     {
                                            //         id: "YOUR_PRODUCT_ID",
                                            //         quantity: "YOUR_PRODUCT_QUANTITY",
                                            //     },
                                            // ], 
                                            cart: cartItems, 
                                        }),
                                    });

                                    const orderData = await response.json(); 
                                    console.log(orderData); 

                                    if (orderData?.data?.order?._id) {
                                        return orderData?.data?.order?._id;
                                    } else {
                                        const errorDetail = orderData?.details?.[0];
                                        const errorMessage = errorDetail
                                            ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                                            : JSON.stringify(orderData?.data);

                                        throw new Error(errorMessage);
                                    }
                                    } catch (error) {
                                        console.error(error); 
                                        setMessage(`Could not initiate PayPal Checkout...${error}`);
                                    }
                                }} 
                                onApprove={async (data, actions) => { 
                                    // console.log(data); 
                                    try { 
                                        const response = await fetch(
                                            `${Constants.serverURL}/orders/${data?.orderID}/capture`,
                                            {
                                                method: "POST",
                                                headers: { 
                                                    "Content-Type": "application/json", 
                                                    'Authorization': `Bearer ${ authTokens?.access }`, 
                                                }, 
                                            }, 
                                        );

                                        const orderData = await response.json(); 
                                        // Three cases to handle: 
                                        //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                                        //   (2) Other non-recoverable errors -> Show a failure message
                                        //   (3) Successful transaction -> Show confirmation or thank you message

                                        const errorDetail = orderData?.details?.[0]; 

                                        if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                                            // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                                            // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                                            return actions.restart();
                                        } else if (errorDetail) {
                                            // (2) Other non-recoverable errors -> Show a failure message
                                            throw new Error(
                                            `${errorDetail.description} (${orderData.debug_id})`,
                                            );
                                        } else {
                                            // (3) Successful transaction -> Show confirmation or thank you message
                                            // Or go to another URL:  actions.redirect('thank_you.html');
                                            const transaction =
                                            orderData.purchase_units[0].payments.captures[0];
                                            setMessage(
                                                `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
                                            );
                                            console.log(
                                                "Capture result",
                                                orderData,
                                                JSON.stringify(orderData, null, 2),
                                            );
                                        }
                                    } catch (error) {
                                        console.error(error);
                                        setMessage(
                                            `Sorry, your transaction could not be processed...${error}`,
                                        );
                                    }
                                }}
                            />
                        </PayPalScriptProvider>
                        <Message content={message} />

                    </section>

                    <section className="ordered-items pt-5" style={{ maxWidth: '600px' }}> 
                        <h4 className="fw-semibold border-bottom pb-1 fs-6">Cart Items (Preview)</h4>
                        <ol className='list-unstyled d-flex flex-column gap-1'> 
                            {(cartItems?.length > 0) && (cartItems?.map((item, index) => {
                                return (
                                    <li key={ index } className="ordered-item row align-items-center gx-5 gy-1 py-1">
                                        <div className="col-md-2">
                                            <div id="carousel2ModalItem1Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                    <div className="images"> 
                                                        <div className="carousel-item active">
                                                            <img src={ item?.img } className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel2ModalItem1Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel2ModalItem1Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-flex align-items-center justify-content-between gap-1 flex-wrap">
                                                <h5>{ (item?.title)?.slice(0, 20) }&nbsp;{ ((item?.title)?.length >= 20) && '...' }</h5>
                                                <div className=""><small className="quantity">{ item?.quantity }</small>&nbsp;x&nbsp;<span className="cost fw-semibold">${ (item?.currentPrice)?.toFixed(2) }</span></div>
                                            </div>
                                        </div> 
                                    </li>
                                )
                            }))} 
                        </ol> 

                        <div className="text-end border-top border-bottom py-1">
                            <span className="fw-semibold fs-5">${ getTotalPrice()?.toFixed(2) }</span>
                        </div>
                    </section> 
                    
                </div> 

            </section> 

        </Layout>
    )
} 


const SubmitPayment = ({ isPaying, setIsPaying, billingAddress }) => {
    const { cardFieldsForm, fields } = usePayPalCardFields();

    const handleClick = async () => {
        if (!cardFieldsForm) {
            const childErrorMessage =
            "Unable to find any child components in the <PayPalCardFieldsProvider />";

            throw new Error(childErrorMessage);
        } 
        
        const formState = await cardFieldsForm.getState();

        if (!formState.isFormValid) {
            return alert("The payment form is invalid");
        }
        setIsPaying(true);

        cardFieldsForm.submit({ billingAddress }).catch((err) => {
            setIsPaying(false);
        });
    };

    return (
        <button
            className={isPaying ? "btn" : "btn btn-success border-radius-35 px-4 mx-1 my-3 fw-semibold"}
            style={{ float: "left" }}
            onClick={handleClick}
        >
            {isPaying ? <div className="spinner tiny" /> : "Pay Now"}
        </button>
    );
};

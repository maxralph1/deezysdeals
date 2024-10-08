import { useContext, useState } from 'react'; 
import { CartContext } from '@/context/CartContext.jsx'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import CartItemMini from '@/components/public/nested-components/CartItemMini.jsx'; 


export default function Cart() { 
    const { cartItems, removeFromCart, getTotalQuantity, getTotalPrice, applyDiscount, getTotalPriceWithDiscount, discount, clearCart } = useContext(CartContext); 
    const [discountCode, setDiscountCode] = useState(''); 
    const [cartToggle, setCartToggle] = useState(false); 

    const handleApplyDiscount = () => {
        applyDiscount(discountCode); 
        setDiscountCode(''); 
    }; 
    
    return (
        <section className="cart"> 

            { cartToggle && 
                <div id="cart-box" className="cart-box card p-2"> 
                    <div className="position-sticky top-0">
                        <div className="w-100 d-flex justify-content-between align-items-center py-3 px-2 gap-2">
                            <div className="d-flex align-items-center gap-1">
                                <h4 className="fs-6 fw-semibold mb-0">Cart Items</h4>
                                <span className="mb-0 badge rounded-pill text-bg-success">{ getTotalQuantity() }</span>
                            </div>
                            <Link 
                                to={ route('pay') }
                                className="cursor-pointer d-flex align-items-center gap-2 text-bg-dark rounded py-2 px-2 mb-0 text-decoration-none">
                                <span className="fw-bold">${ getTotalPrice()?.toFixed(2) }</span>
                                {/* <span className="fw-bold">{getTotalPrice() ? `${getTotalPrice()?.toFixed(2)}` : ''}</span> */}
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                        className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="cart-items"> 

                        { (cartItems?.length === 0) ? (
                            <div className="d-flex align-items-center justify-content-center py-4">Cart is empty.</div>
                        ) : (
                            <section>
                                { (cartItems?.map((item, index) => ( 
                                    <CartItemMini 
                                        key= {index} 
                                        itemId = { item?.id }
                                        imgSrc = { item?.img }
                                        title = { item?.title } 
                                        description = '' 
                                        oldPrice = ''
                                        currentPrice = { item?.currentPrice } 
                                        rating = '' 
                                        quantity = { item?.quantity } 
                                    /> 
                                )))}
                            </section>
                        )}
                        
                    </div> 

                    <div className="cart-footer bg-white border rounded py-4 px-3">
                        <Link 
                            to={ route('pay') }
                            className="checkout d-flex justify-content-between align-items-center text-decoration-none text-dark">
                            <span className="fw-bold">${ getTotalPrice()?.toFixed(2) }</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div> 
            }

            <div 
                type="button" 
                onClick={ () => setCartToggle(!cartToggle) } 
                id="cart-btn" 
                className="cart-btn cursor-pointer"> 
                    {(cartItems?.length > 0) && 
                        <span className="position-absolute" style={{ backgroundColor: 'orangered', position: 'absolute', width: '12.5px', height: '12.5px', borderRadius: '50px', top: '-5px', left: '-7px' }}>
                        </span> 
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-handbag-fill text-white"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                    </svg>
            </div>
        </section> 
    )
}

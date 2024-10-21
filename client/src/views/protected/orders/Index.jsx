import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"; 
import utc from 'dayjs/plugin/utc';
dayjs.extend(relativeTime);
dayjs.extend(utc);
import { useOrders } from '@/hooks/useOrders.jsx'; 
import First from '@/components/protected/nested-components/pagination-links/First.jsx'; 
import Previous from '@/components/protected/nested-components/pagination-links/Previous.jsx'; 
import Next from '@/components/protected/nested-components/pagination-links/Next.jsx'; 
import Last from '@/components/protected/nested-components/pagination-links/Last.jsx'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() { 
    // const [page, setPage] = useState(1); 
    const [orderType, setOrderType] = useState('all'); 
    const { orders, getOrders } = useOrders(); 
    // console.log(orders); 

    // const first_page = 1;
    // const pageNumberForward = (orders?.meta?.current_page + 1 > orders?.meta?.total_pages) ? orders?.meta?.total_pages : orders?.meta?.current_page + 1;
    // const pageNumberBackward = (orders?.meta?.current_page - 1 < first_page) ? first_page : orders?.meta?.current_page - 1;

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4 d-flex justify-content-between align-items-center flex-wrap">
                        <span>Orders</span> 
                        <div className="fs-6 d-flex align-items-center gap-2">
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    await getOrders('all', 1); 
                                    setOrderType('all'); 
                                } }
                                className={`btn btn-sm ${(orderType == 'all') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    All
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    await getOrders('delivered', 1); 
                                    setOrderType('delivered'); 
                                } }
                                className={`btn btn-sm ${(orderType == 'delivered') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Delivered
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    await getOrders('undelivered', 1); 
                                    setOrderType('undelivered'); 
                                } }
                                className={`btn btn-sm ${(orderType == 'undelivered') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Undelivered
                            </span>
                        </div>
                    </h2> 

                    <div className="d-flex justify-content-between flex-wrap gap-2"> 
                        <div className="search">
                            <div className="search-container border border-dark" style={{ maxWidth: '375px' }}>
                                <span className="voice-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill"
                                        viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"></path>
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5">
                                        </path>
                                    </svg>
                                </span>
                                <input type="text" placeholder="Search by keywords ..." className="" />
                                <span className="search-icon">
                                    <svg width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <span>
                            { ((orders?.meta?.current_page) > 1) 
                                ? (((orders?.meta?.current_page - 1) * orders?.meta?.limit) + 1) 
                                : orders?.meta?.current_page }
                                    &nbsp;-&nbsp;
                                { ((orders?.meta?.current_page * (orders?.meta?.limit)) > orders?.meta?.total_results) 
                                    ? (orders?.meta?.total_results)
                                        : ((orders?.meta?.current_page) != 1) 
                                        ? (orders?.meta?.current_page * orders?.meta?.limit) 
                                            : ((orders?.meta?.current_page + (orders?.meta?.limit - 1))) } 
                                    &nbsp;of&nbsp; 
                                { orders?.meta?.total_results } 
                                &nbsp;(page { orders?.meta?.current_page } of { orders?.meta?.total_pages })
                        </span> 
                    </div>

                    <section className="py-4">
                        <ul className="list-unstyled d-flex flex-column gap-5">
                            { (orders?.data?.length > 1) && (orders?.data?.map((order, index) => {
                                return (
                                    <li key={order?._id} className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                        <div className="text-dark px-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                                <span className="fw-semibold">#
                                                    { (orders?.meta?.current_page != 1) 
                                                        ? (((orders?.meta?.current_page - 1) * orders?.meta?.limit) + (index + 1))
                                                        : orders?.meta?.current_page * (index + 1) }
                                                </span>
                                                <span 
                                                    type="button" 
                                                    data-bs-toggle="modal" data-bs-target={ `#order${order?._id}Modal` }
                                                    className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                        View Order Details
                                                </span>
                                            </div> 
                                            <div className="amount-and-client">
                                                <h3 className="fw-semibold">${ (order?.total_to_be_paid)?.toFixed(2) }</h3> 
                                                <p>By&nbsp;
                                                    <Link 
                                                        to={ route('home.clients.show', { username: order?.user?.username }) } 
                                                        className="text-dark">
                                                        { order?.user?.first_name + ' ' + order?.user?.last_name }
                                                    </Link>
                                                    &nbsp;from { order?.state_region }, <small>{ dayjs.utc(order?.created_at).fromNow() }</small></p>
                                            </div>
                                            <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                                <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                                <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                    { (order?.orderItems?.length > 0) && (order?.orderItems?.slice(0,2)?.map((orderItem, index) => {
                                                        return (
                                                            <li key={ orderItem?._id } className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id={`carousel${orderItem?._id}Image`} className="carousel slide">
                                                                        <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                            <div className="images">
                                                                                { (orderItem?.product?.images?.map((image, index) => {
                                                                                    return (
                                                                                        <div key={ index } className={`carousel-item ${ (index == 0) && `active`}`}>
                                                                                            <img src={ image } style={{ width: '75px', height: '75px' }} alt="..." />
                                                                                        </div>
                                                                                    )
                                                                                })) }
                                                                            </div> 

                                                                            <div>
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target={`#carousel${orderItem?._id}Image`} data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target={`#carousel${orderItem?._id}Image`} data-bs-slide="next">
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
                                                                        <h5>{ ((orderItem?.product?.title)?.length > 20) ? ((orderItem?.product?.title)?.slice(0,20) + ' ...') : orderItem?.product?.title }</h5>
                                                                        <div className=""><small className="quantity">{ orderItem?.quantity }</small>&nbsp;x&nbsp;<span className="cost fw-semibold">${ (orderItem?.product?.retail_price) }</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                        )
                                                    })) }
                                                </ol> 
                                                { (order?.orderItems?.length > 2) && 
                                                (<span 
                                                    type="button" 
                                                    data-bs-toggle="modal" 
                                                    data-bs-target={ `#order${order?._id}Modal` } 
                                                    className="text-decoration-underline pt-4">
                                                        <span className="fw-semibold">+{ order?.orderItems?.length - 2 }</span>
                                                        &nbsp;other item{ ((order?.orderItems?.length - 2) > 1) && 's' }
                                                </span>) }
                                            </section>
                                        </div> 

                                        <div className="modal fade" id={ `order${order?._id}Modal` } tabIndex="-1" aria-labelledby={ `order${order?._id}ModalLabel` } aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header d-flex justify-content-end align-items-center gap-1">
                                                        <h3 className="modal-title fs-5 d-none" id={ `order${order?._id}ModalLabel` }>Item name</h3>
                                                        <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <section className="amount-and-client">
                                                            <span>Ref:&nbsp;<span className="fw-semibold">#{ (order?._id)?.toUpperCase() }</span></span>
                                                            <h3 className="fw-semibold">${ (order?.total_to_be_paid)?.toFixed(2) }</h3> 
                                                            <p className="d-flex align-items-center" style={{ marginTop: '-0.5rem' }}>
                                                                <span>Paid with</span>
                                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vDMTOrQGXsCRn-XQj-IMuAHaCb%26pid%3DApi&f=1&ipt=b0a1976c6ae2a5d5b9c0b57c212a5d5de0cdff1be4f6eacacb44bf3d8c003d02&ipo=images" style={{ width: '50px' }} alt="" />
                                                            </p>
                                                            <p style={{ marginTop: '-0.5rem' }}>By&nbsp;
                                                                <Link 
                                                                    to={ route('home.clients.show', { username: order?.user?.username }) } 
                                                                    className="text-dark">
                                                                        { order?.user?.first_name + ' ' + order?.user?.last_name }
                                                                </Link>
                                                                &nbsp;from { order?.state_region }, <small>{ dayjs.utc(order?.created_at).fromNow() }</small>
                                                            </p>
                                                        </section> 

                                                        <section className="ordered-items pt-1" style={{ maxWidth: '600px' }}> 
                                                            <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                                            <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                                { (order?.orderItems?.length > 0) && (order?.orderItems?.map(orderItem => {
                                                                    return (
                                                                        <li key={ orderItem?._id } className="ordered-item row align-items-center g-3 py-1">
                                                                            <div className="col-md-2">
                                                                                <div id={`carousel${orderItem?._id}ModalDetailImages`} className="carousel slide">
                                                                                    <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                                        <div className="images"> 
                                                                                            { (orderItem?.product?.images?.map((image, index) => {
                                                                                                return (
                                                                                                    <div key={ index } className={`carousel-item ${ (index == 0) && `active`}`}>
                                                                                                        <img src={ image } style={{ width: '75px', height: '75px' }} alt="..." />
                                                                                                    </div>
                                                                                                )
                                                                                            })) } 
                                                                                        </div> 

                                                                                        <div>
                                                                                            <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target={`#carousel${orderItem?._id}ModalDetailImages`} data-bs-slide="prev">
                                                                                                <span>
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                                    </svg>
                                                                                                </span>
                                                                                                <span className="visually-hidden">Previous</span>
                                                                                            </button>
                                                                                            <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target={`carousel${orderItem?._id}ModalDetailImages`} data-bs-slide="next">
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
                                                                                    <h5>{ ((orderItem?.product?.title)?.length > 20) ? ((orderItem?.product?.title)?.slice(0,20) + ' ...') : orderItem?.product?.title }</h5>
                                                                                    <div className=""><small className="quantity">{ orderItem?.quantity }</small>&nbsp;x&nbsp;<span className="cost fw-semibold">${ (orderItem?.product?.retail_price) }</span></div>
                                                                                </div>
                                                                            </div> 
                                                                        </li>
                                                                    )
                                                                })) } 
                                                            </ol> 
                                                        </section>
                                                    </div>
                                                    <div className="modal-footer">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li> 
                                )
                            }))}
                        </ul>
                    </section>
                </div>

                <section className="pagination-links py-5 d-flex justify-content-end gap-2 pe-2"> 
                    <span 
                        type="button" 
                        onClick={ async () => {
                            await getOrders(orderType, 1); 
                        } }>
                            <First /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => {
                            await getOrders(orderType, ((orders?.meta?.current_page >= 1) ? (orders?.meta?.current_page - 1) : 1)); 
                        } }>
                            <Previous /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => {
                            await getOrders(orderType, ((orders?.meta?.current_page < orders?.meta?.total_pages) ? (orders?.meta?.current_page + 1) : orders?.meta?.total_pages)); 
                            // await getOrders(orderType, ((pageNumber > orders?.meta?.total_pages) ? orders?.meta?.total_pages : (pageNumber + 1))); 
                        } }>
                        <Next /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => {
                            await getOrders(orderType, orders?.meta?.total_pages); 
                        } }>
                            <Last />
                    </span>
                </section>
            </div>
        </Layout>
    )
}

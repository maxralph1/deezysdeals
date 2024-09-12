import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx';


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4">Profit on Items</h2> 

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
                                <input type="text" placeholder="Search item ..." className="" />
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
                        <span>1 - 10 of 500 (page 1 of 20)</span>
                    </div>

                    <section className="py-4">
                        <ul className="list-unstyled d-flex flex-column gap-5">
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#1</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example1Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Profit Details
                                        </span>
                                    </div> 
                                    <div className="amount-and-client">
                                        <h3>Profit: <span className="fw-semibold">$20.50</span></h3> 
                                        <p>Sold to&nbsp;
                                            <Link 
                                                to={ route('home.clients.show', {username: 'maxralph'}) } 
                                                className="text-dark">
                                                Pae Daezi
                                            </Link>
                                            &nbsp;from Boston, <small>2 days ago</small></p>
                                    </div>
                                    <section className="ordered-items pt-0" style={{ maxWidth: '600px' }}> 
                                        <article className="ordered-item row align-items-center g-3 py-1">
                                            <div className="col-md-2">
                                                <div id="carousel1Item1Example" className="carousel slide">
                                                    <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                        <div className="images">
                                                            <div className="carousel-item active">
                                                                <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                        </div> 

                                                        <div>
                                                            <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel1Item1Example" data-bs-slide="prev">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                    </svg>
                                                                </span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel1Item1Example" data-bs-slide="next">
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
                                                    <p className="fw-semibold">Chicken PepperSoup</p>
                                                </div>
                                            </div> 
                                        </article>
                                    </section>
                                </div> 

                                <div className="modal fade" id="example1Modal" tabIndex="-1" aria-labelledby="example1ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-end align-items-center gap-1">
                                                <h3 className="modal-title fs-5 d-none" id="example1ModalLabel">Item name</h3>
                                                <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="modal-body"> 
                                                <span>Ref:&nbsp;<span className="fw-semibold">#12C2654687852BVH120A</span></span>
                                                <section className="amount-and-client d-flex flex-column gap-1">
                                                    <h3 className="fw-semibold">$20.50</h3> 
                                                    <span>Sold at:&nbsp;<span className="fw-semibold">$150.50</span></span> 
                                                    <span>Bought at:&nbsp;<span className="fw-semibold">$120.50</span></span> 
                                                    <span>Transportation cost:&nbsp;<span className="fw-semibold">$3.00</span></span> 
                                                    <span>VAT:&nbsp;<span className="fw-semibold">$7.00</span></span> 
                                                    <span className="d-flex align-items-center">
                                                        <span>Paid with</span>&nbsp;
                                                        <span className="fw-semibold">Cash</span>
                                                    </span>
                                                    <span>Sold to&nbsp;
                                                        <Link 
                                                            to={ route('home.clients.show', {username: 'daezi'}) } 
                                                            target="_blank"
                                                            className="text-dark">
                                                            Pae Daezi
                                                        </Link>
                                                        &nbsp;from Boston, <small>2 days ago</small>
                                                    </span>
                                                </section> 

                                                <section className="ordered-items pt-4" style={{ maxWidth: '600px' }}> 
                                                    <article className="ordered-item row align-items-center g-3 py-1">
                                                        <div className="col-md-2">
                                                            <div id="carousel1ModalItem1Example" className="carousel slide">
                                                                <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                    <div className="images"> 
                                                                        <div className="carousel-item active">
                                                                            <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div>
                                                                    </div> 

                                                                    <div>
                                                                        <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel1ModalItem1Example" data-bs-slide="prev">
                                                                            <span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                </svg>
                                                                            </span>
                                                                            <span className="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel1ModalItem1Example" data-bs-slide="next">
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
                                                                <span className="fs-5">Chicken PepperSoup</span> 
                                                                <div className="d-flex justify-content-end px-4">
                                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                                            <span className="fw-semibold">See item details</span>&nbsp;
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                                <path
                                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                                            </svg>
                                                                        </Link>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </article>
                                                </section>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#2</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example2Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Profit Details
                                        </span>
                                    </div> 
                                    <div className="amount-and-client">
                                        <h3>Profit: <span className="fw-semibold">$20.50</span></h3> 
                                        <p>Sold to&nbsp;
                                            <Link 
                                                to={ route('home.clients.show', {username: 'maxralph'}) } 
                                                className="text-dark">
                                                Max Ralph
                                            </Link>
                                            &nbsp;from Boston, <small>2 days ago</small></p>
                                    </div>
                                    <section className="ordered-items pt-0" style={{ maxWidth: '600px' }}> 
                                        <article className="ordered-item row align-items-center g-3 py-1">
                                            <div className="col-md-2">
                                                <div id="carousel2Item1Example" className="carousel slide">
                                                    <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                        <div className="images">
                                                            <div className="carousel-item active">
                                                                <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                        </div> 

                                                        <div>
                                                            <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel2Item1Example" data-bs-slide="prev">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                    </svg>
                                                                </span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel2Item1Example" data-bs-slide="next">
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
                                                    <p className="fw-semibold">Chicken PepperSoup</p>
                                                </div>
                                            </div> 
                                        </article>
                                    </section>
                                </div> 

                                <div className="modal fade" id="example2Modal" tabIndex="-1" aria-labelledby="example2ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-end align-items-center gap-1">
                                                <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Item name</h3>
                                                <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="modal-body"> 
                                                <span>Ref:&nbsp;<span className="fw-semibold">#12C2654687852BVH120A</span></span>
                                                <section className="amount-and-client d-flex flex-column gap-1">
                                                    <h3 className="fw-semibold">$20.50</h3> 
                                                    <span>Sold at:&nbsp;<span className="fw-semibold">$150.50</span></span> 
                                                    <span>Bought at:&nbsp;<span className="fw-semibold">$120.50</span></span> 
                                                    <span>Transportation cost:&nbsp;<span className="fw-semibold">$3.00</span></span> 
                                                    <span>VAT:&nbsp;<span className="fw-semibold">$7.00</span></span> 
                                                    <span className="d-flex align-items-center">
                                                        <span>Paid with</span>&nbsp;
                                                        <span className="fw-semibold">Cash</span>
                                                    </span>
                                                    <span>Sold to&nbsp;
                                                        <Link 
                                                            to={ route('home.clients.show', {username: 'daezi'}) } 
                                                            target="_blank"
                                                            className="text-dark">
                                                            Max Ralph
                                                        </Link>
                                                        &nbsp;from Boston, <small>2 days ago</small>
                                                    </span>
                                                </section> 

                                                <section className="ordered-items pt-4" style={{ maxWidth: '600px' }}> 
                                                    <article className="ordered-item row align-items-center g-3 py-1">
                                                        <div className="col-md-2">
                                                            <div id="carousel2ModalItem1Example" className="carousel slide">
                                                                <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                    <div className="images"> 
                                                                        <div className="carousel-item active">
                                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
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
                                                                <span className="fs-5">Chicken PepperSoup</span> 
                                                                <div className="d-flex justify-content-end px-4">
                                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                                            <span className="fw-semibold">See item details</span>&nbsp;
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                                <path
                                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                                            </svg>
                                                                        </Link>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </article>
                                                </section>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#3</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example3Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Profit Details
                                        </span>
                                    </div> 
                                    <div className="amount-and-client">
                                        <h3>Profit: <span className="fw-semibold">$20.50</span></h3> 
                                        <p>Sold to&nbsp;
                                            <Link 
                                                to={ route('home.clients.show', {username: 'maxralph'}) } 
                                                className="text-dark">
                                                Pae Daezi
                                            </Link>
                                            &nbsp;from Boston, <small>2 days ago</small></p>
                                    </div>
                                    <section className="ordered-items pt-0" style={{ maxWidth: '600px' }}> 
                                        <article className="ordered-item row align-items-center g-3 py-1">
                                            <div className="col-md-2">
                                                <div id="carousel3Item1Example" className="carousel slide">
                                                    <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                        <div className="images">
                                                            <div className="carousel-item active">
                                                                <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                            </div> 
                                                        </div> 

                                                        <div>
                                                            <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel3Item1Example" data-bs-slide="prev">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                    </svg>
                                                                </span>
                                                                <span className="visually-hidden">Previous</span>
                                                            </button>
                                                            <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel3Item1Example" data-bs-slide="next">
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
                                                    <p className="fw-semibold">Chicken PepperSoup</p>
                                                </div>
                                            </div> 
                                        </article>
                                    </section>
                                </div> 

                                <div className="modal fade" id="example3Modal" tabIndex="-1" aria-labelledby="example3ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-end align-items-center gap-1">
                                                <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Item name</h3>
                                                <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="modal-body"> 
                                                <span>Ref:&nbsp;<span className="fw-semibold">#12C2654687852BVH120A</span></span>
                                                <section className="amount-and-client d-flex flex-column gap-1">
                                                    <h3 className="fw-semibold">$20.50</h3> 
                                                    <span>Sold at:&nbsp;<span className="fw-semibold">$150.50</span></span> 
                                                    <span>Bought at:&nbsp;<span className="fw-semibold">$120.50</span></span> 
                                                    <span>Transportation cost:&nbsp;<span className="fw-semibold">$3.00</span></span> 
                                                    <span>VAT:&nbsp;<span className="fw-semibold">$7.00</span></span> 
                                                    <span className="d-flex align-items-center">
                                                        <span>Paid with</span>&nbsp;
                                                        <span className="fw-semibold">Cash</span>
                                                    </span>
                                                    <span>Sold to&nbsp;
                                                        <Link 
                                                            to={ route('home.clients.show', {username: 'daezi'}) } 
                                                            target="_blank"
                                                            className="text-dark">
                                                            Pae Daezi
                                                        </Link>
                                                        &nbsp;from Boston, <small>2 days ago</small>
                                                    </span>
                                                </section> 

                                                <section className="ordered-items pt-4" style={{ maxWidth: '600px' }}> 
                                                    <article className="ordered-item row align-items-center g-3 py-1">
                                                        <div className="col-md-2">
                                                            <div id="carousel3ModalItem1Example" className="carousel slide">
                                                                <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                    <div className="images"> 
                                                                        <div className="carousel-item active">
                                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                        </div> 
                                                                    </div> 

                                                                    <div>
                                                                        <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel3ModalItem1Example" data-bs-slide="prev">
                                                                            <span>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                </svg>
                                                                            </span>
                                                                            <span className="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel3ModalItem1Example" data-bs-slide="next">
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
                                                                <span className="fs-5">Chicken PepperSoup</span> 
                                                                <div className="d-flex justify-content-end px-4">
                                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                                            <span className="fw-semibold">See item details</span>&nbsp;
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                                <path
                                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                                            </svg>
                                                                        </Link>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </article>
                                                </section>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 
                        </ul>
                    </section>
                </div>

                <PaginationLinks />
            </div>
        </Layout>
    )
}

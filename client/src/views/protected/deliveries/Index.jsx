import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx';


export default function Index() { 
    const [activeLink, setActiveLink] = useState('pending-deliveries'); 

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4">Deliveries</h2> 

                    <div className="py-4"> 
                        <section className="tabs pb-4">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'pending-deliveries') && 'active'}`}
                                        aria-current="page" 
                                        onClick={ () => setActiveLink('pending-deliveries') }>
                                            <span>Pending Deliveries (2)</span>
                                    </span>
                                </li> 
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'delivered') && 'active'}`}
                                        onClick={ () => setActiveLink('delivered') }>
                                            <span>Delivered (400)</span>
                                        </span>
                                </li>
                            </ul>
                        </section> 

                        <section className="d-flex justify-content-between flex-wrap gap-2 pb-4"> 
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
                            <span>1 - 10 of 500 (page 1 of 20)</span>
                        </section>

                        <section>
                            <ul className="list-unstyled d-flex flex-column gap-5">
                                <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                    <div className="text-dark px-3">
                                        <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                            <span className="fw-semibold">#1</span>
                                            <span 
                                                type="button" 
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                    View Order Details
                                            </span>
                                        </div> 
                                        <div className="amount-and-client">
                                            <h3 className="fw-semibold">$240.25</h3> 
                                            <p>To&nbsp;
                                                <Link 
                                                    to={ route('home.clients.show', {username: 'daezi'}) } 
                                                    className="text-dark">
                                                    Pae Daezi
                                                </Link>
                                                &nbsp;from Boston, <small>12:34, September 11, 2024</small></p>
                                        </div>
                                        <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                            <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                            <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                <li className="ordered-item row align-items-center g-3 py-1">
                                                    <div className="col-md-2">
                                                        <div id="carouselExample" className="carousel slide">
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
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
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
                                                            <h5>Hard Beans Brasil Espresso</h5>
                                                            <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                        </div>
                                                    </div> 
                                                </li>
                                                <li className="ordered-item row align-items-center g-3 py-1">
                                                    <div className="col-md-2">
                                                        <div id="carousel2Example" className="carousel slide">
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
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel2Example" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel2Example" data-bs-slide="next">
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
                                                            <h5>Chicken PepperSoup</h5>
                                                            <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                        </div>
                                                    </div> 
                                                </li>
                                            </ol> 
                                            <span 
                                                type="button" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#exampleModal" 
                                                className="text-decoration-underline pt-4">
                                                    <span className="fw-semibold">+2</span>
                                                    &nbsp;other items
                                            </span>
                                        </section>
                                    </div> 

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <section className="amount-and-client d-flex flex-column"> 
                                                        <div className="d-flex gap-2"> 
                                                            <h3 className="fw-semibold">$240.25</h3> 
                                                            <span className="d-flex align-items-center">
                                                                <span>Paid with</span>
                                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vDMTOrQGXsCRn-XQj-IMuAHaCb%26pid%3DApi&f=1&ipt=b0a1976c6ae2a5d5b9c0b57c212a5d5de0cdff1be4f6eacacb44bf3d8c003d02&ipo=images" style={{ width: '50px' }} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <span>To&nbsp;
                                                            <Link 
                                                                to={ route('home.clients.show', {username: 'daezi'}) } 
                                                                className="text-dark">
                                                                Pae Daezi
                                                            </Link>
                                                            &nbsp;
                                                        </span>
                                                        <span>at 123 Boulevard Avenue, Boston</span>
                                                        <span><small>12:34, September 11, 2024</small></span>
                                                    </section> 

                                                    <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                                        <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                                        <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carouselModalExample" className="carousel slide">
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
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carouselModalExample" data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carouselModalExample" data-bs-slide="next">
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
                                                                        <h5>Hard Beans Brasil Espresso</h5>
                                                                        <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carouselModal2Example" className="carousel slide">
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
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carouselModal2Example" data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carouselModal2Example" data-bs-slide="next">
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
                                                                        <h5>Chicken PepperSoup</h5>
                                                                        <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carouselModal3Example" className="carousel slide">
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
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carouselModal3Example" data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carouselModal3Example" data-bs-slide="next">
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
                                                                        <h5>Hard Beans Brasil Espresso</h5>
                                                                        <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carouselModal4Example" className="carousel slide">
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
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carouselModal4Example" data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carouselModal4Example" data-bs-slide="next">
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
                                                                        <h5>Chicken PepperSoup</h5>
                                                                        <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                        </ol> 
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
                                                    View Order Details
                                            </span>
                                        </div> 
                                        <div className="amount-and-client">
                                            <h3 className="fw-semibold">$450.50</h3> 
                                            <p>To&nbsp;
                                                <Link 
                                                    to={ route('home.clients.show', {username: 'maxralph'}) } 
                                                    className="text-dark">
                                                    Max Ralph
                                                </Link>
                                                &nbsp;from Boston, <small>12:34, September 11, 2024</small></p>
                                        </div>
                                        <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                            <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                            <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                <li className="ordered-item row align-items-center g-3 py-1">
                                                    <div className="col-md-2">
                                                        <div id="carousel2Item1Example" className="carousel slide">
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
                                                            <h5>Hard Beans Brasil Espresso</h5>
                                                            <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                        </div>
                                                    </div> 
                                                </li>
                                                <li className="ordered-item row align-items-center g-3 py-1">
                                                    <div className="col-md-2">
                                                        <div id="carousel2Item2Example" className="carousel slide">
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
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel2Item2Example" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel2Item2Example" data-bs-slide="next">
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
                                                            <h5>Chicken PepperSoup</h5>
                                                            <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                        </div>
                                                    </div> 
                                                </li>
                                            </ol> 
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
                                                    <section className="amount-and-client d-flex flex-column"> 
                                                        <div className="d-flex gap-2"> 
                                                            <h3 className="fw-semibold">$450.50</h3> 
                                                            <span className="d-flex align-items-center">
                                                                <span>Paid with</span>
                                                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F009%2F469%2F637%2Foriginal%2Fpaypal-payment-icon-editorial-logo-free-vector.jpg&f=1&nofb=1&ipt=4c40b29681f959d75d7cbc4ca3777644fa53f22878e20eff9efe3945e013aa86&ipo=images" style={{ width: '50px' }} alt="" />
                                                            </span>
                                                        </div>
                                                        
                                                        <span>To&nbsp;
                                                            <Link 
                                                                to={ route('home.clients.show', {username: 'daezi'}) } 
                                                                className="text-dark">
                                                                Pae Daezi
                                                            </Link>
                                                            &nbsp;
                                                        </span>
                                                        <span>at 123 Boulevard Avenue, Boston</span>
                                                        <span><small>12:34, September 11, 2024</small></span>
                                                    </section> 

                                                    <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                                        <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                                        <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                            <li className="ordered-item row align-items-center g-3 py-1">
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
                                                                        <h5>Chicken PepperSoup</h5>
                                                                        <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carousel2ModalItem2Example" className="carousel slide">
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
                                                                                <button className="carousel-control-prev position-absolute left-0 ps-2" type="button" data-bs-target="#carousel2ModalItem2Example" data-bs-slide="prev">
                                                                                    <span>
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                                        </svg>
                                                                                    </span>
                                                                                    <span className="visually-hidden">Previous</span>
                                                                                </button>
                                                                                <button className="carousel-control-next position-absolute right-0 pe-2" type="button" data-bs-target="#carousel2ModalItem2Example" data-bs-slide="next">
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
                                                                        <h5>Hard Beans Brasil Espresso</h5>
                                                                        <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                        </ol> 
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
                                                    View Order Details
                                            </span>
                                        </div> 
                                        <div className="amount-and-client">
                                            <h3 className="fw-semibold">$150.50</h3> 
                                            <p>To&nbsp;
                                                <Link 
                                                    to={ route('home.clients.show', {username: 'maxralph'}) } 
                                                    className="text-dark">
                                                    Max Ralph
                                                </Link>
                                                &nbsp;from Boston, <small>12:34, September 11, 2024</small></p>
                                        </div>
                                        <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                            <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                            <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                <li className="ordered-item row align-items-center g-3 py-1">
                                                    <div className="col-md-2">
                                                        <div id="carousel3Item1Example" className="carousel slide">
                                                            <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                <div className="images"> 
                                                                    <div className="carousel-item active">
                                                                        <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
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
                                                            <h5>Hard Beans Brasil Espresso</h5>
                                                            <div className=""><small className="quantity">2</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$20.05</span></div>
                                                        </div>
                                                    </div> 
                                                </li>
                                            </ol> 
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
                                                    <section className="amount-and-client d-flex flex-column"> 
                                                        <div className="d-flex gap-2"> 
                                                            <h3 className="fw-semibold">$150.50</h3> 
                                                            <span className="d-flex align-items-center">
                                                                <span>Paid with</span>&nbsp;
                                                                <span className="fw-semibold">Cash</span>
                                                            </span>
                                                        </div>
                                                        
                                                        <span>To&nbsp;
                                                            <Link 
                                                                to={ route('home.clients.show', {username: 'daezi'}) } 
                                                                className="text-dark">
                                                                Pae Daezi
                                                            </Link>
                                                            &nbsp;
                                                        </span>
                                                        <span>at 123 Boulevard Avenue, Boston</span>
                                                        <span><small>12:34, September 11, 2024</small></span>
                                                    </section> 

                                                    <section className="ordered-items pt-3" style={{ maxWidth: '600px' }}> 
                                                        <h4 className="fw-semibold border-bottom pb-1 fs-6">Ordered Items</h4>
                                                        <ol className='list-unstyled d-flex flex-column gap-1'> 
                                                            <li className="ordered-item row align-items-center g-3 py-1">
                                                                <div className="col-md-2">
                                                                    <div id="carousel3ModalItem1Example" className="carousel slide">
                                                                        <div className="carousel-inner position-relative" style={{ width: '75px', height: '75px' }}>
                                                                            <div className="images"> 
                                                                                <div className="carousel-item active">
                                                                                    <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                                </div>
                                                                                <div className="carousel-item">
                                                                                    <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
                                                                                </div>
                                                                                <div className="carousel-item">
                                                                                    <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover rounded" style={{ width: '75px', height: '75px' }} alt="..." />
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
                                                                        <h5>Chicken PepperSoup</h5>
                                                                        <div className=""><small className="quantity">3</small>&nbsp;x&nbsp;<span className="cost fw-semibold">$25.45</span></div>
                                                                    </div>
                                                                </div> 
                                                            </li>
                                                        </ol> 
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
                </div>

                <PaginationLinks />
            </div>
        </Layout>
    )
}

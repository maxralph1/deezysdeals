import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 
import PaginationLinks from '@/components/public/nested-components/PaginationLinks.jsx';


export default function Products() {
    return (
        <Layout> 
            <div className="px-3 fs-6 d-flex justify-content-end align-items-center">
                <span>100,000 items</span>
            </div>

            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main"> 

                    <section className="products pt-3">
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carouselExample" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) }  
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel2Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images"> 
                                                        <div className="carousel-item active">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div> 
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel2Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel2Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel3Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images"> 
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel3Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel3Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel4Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel4Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel4Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel5Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel5Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel5Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                <div className="row align-items-center g-3">
                                    <div className="col-sm-12 col-lg-4">
                                        <div id="carousel6Example" className="carousel slide">
                                            <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                <div className="images">
                                                    <div className="carousel-item active">
                                                        <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                </div> 

                                                <div>
                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel6Example" data-bs-slide="prev">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                            </svg>
                                                        </span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel6Example" data-bs-slide="next">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                            </svg>
                                                        </span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-8">
                                        <div className="card-body d-flex flex-column gap-0">
                                            <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                Gaming Ultra-Slim IPS
                                                Display
                                                w/Smart Cover & Speakers,HDR Plug&Play,
                                                External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                            <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                        sizes</span></small></span>
                                            <span className="card-text">10k+ bought in the last month</span>
                                            <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                    className="fw-semibold">$79.99</span></span>
                                            <span className="card-text"><small><span
                                                        className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                        $15.00</span>&nbsp;with coupon</small></span>
                                            <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                    30</span></span>
                                            <span>
                                                <small>More Buying Choices:</small>
                                                <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                            </span>
                                            <div className="pt-2 d-flex gap-2">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel7Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel7Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel7Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                <div className="row align-items-center g-3">
                                    <div className="col-sm-12 col-lg-4">
                                        <div id="carousel8Example" className="carousel slide">
                                            <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                <div className="images">
                                                    <div className="carousel-item active">
                                                        <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                        <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                    </div>
                                                </div> 

                                                <div>
                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel8Example" data-bs-slide="prev">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                            </svg>
                                                        </span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel8Example" data-bs-slide="next">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                            </svg>
                                                        </span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="card-body d-flex flex-column gap-0">
                                            <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                Gaming Ultra-Slim IPS
                                                Display
                                                w/Smart Cover & Speakers,HDR Plug&Play,
                                                External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                            <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                        sizes</span></small></span>
                                            <span className="card-text">10k+ bought in the last month</span>
                                            <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                    className="fw-semibold">$79.99</span></span>
                                            <span className="card-text"><small><span
                                                        className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                        $15.00</span>&nbsp;with coupon</small></span>
                                            <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                    30</span></span>
                                            <span>
                                                <small>More Buying Choices:</small>
                                                <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                            </span>
                                            <div className="pt-2 d-flex gap-2">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                    </svg>
                                                </span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel9Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel9Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel9Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                        <article className="card border-0 mb-5">
                            <Link 
                                to={ route('products.show', {id: '123'}) } 
                                className="text-decoration-none text-dark">
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-12 col-lg-4">
                                            <div id="carousel10Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '225px', height: '250px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block img-fluid object-fit-cover border-radius-35" style={{ width: '225px', height: '250px' }} alt="..." />
                                                        </div>
                                                    </div> 

                                                    <div>
                                                        <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel10Example" data-bs-slide="prev">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel10Example" data-bs-slide="next">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                                                </svg>
                                                            </span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-lg-8">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-4">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span
                                                        className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Save
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivery&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                                <span>
                                                    <small>More Buying Choices:</small>
                                                    <small className="fw-semibold">$400.98(46 used & new offers)</small>
                                                </span>
                                                <div className="pt-2 d-flex gap-2">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Link>
                        </article>
                    </section> 

                    <PaginationLinks /> 
                </div> 
            
            </section>

        </Layout>
    )
}

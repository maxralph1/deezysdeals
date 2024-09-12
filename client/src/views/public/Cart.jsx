import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 


export default function Cart() {
    return (
        <Layout> 
            <div className="w-100 d-flex justify-content-between align-items-center pb-2 px-3 gap-2 border-bottom z-3">
                <div className="d-flex align-items-center gap-1">
                    <h2 className="fs-3 fw-semibold mb-0">Cart Items</h2>
                    <span className="mb-0 badge rounded-pill text-bg-success" style={{ marginTop: '-16px' }}>4</span>
                </div>
                <div className="cursor-pointer d-flex align-items-center gap-2 text-bg-dark rounded py-2 px-2 mb-0">
                    <span className="fw-bold">$2,750.00</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="px-3 pt-3 fs-6 d-flex justify-content-end align-items-center">
                <span>You have&nbsp;
                <span className="fw-semibold">4 items&nbsp;</span>in your cart</span>
            </div>


            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main"> 

                    <section className="products cart-items pt-4"> 
                        <article className="bg-body-tertiary rounded mb-4"> 
                            <div 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                className="d-flex justify-content-end px-4 pt-3">
                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                        <span className="fw-semibold">Brief details</span>
                                    </span>
                            </div> 
                            <div className="row align-items-center m-2 py-2">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain border-radius-35" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1 pe-3">
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-dash-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="border border-secondary px-3 border-radius-35">
                                            30
                                        </span>
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="ps-2">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-trash2-fill text-danger" viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div> 

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                    <div className="modal-content"> 
                                        <div className="modal-header d-flex justify-content-end">
                                            <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Modal title</h3>
                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="border-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                            </svg>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row align-items-center p-4 g-3">
                                                <div className="col-md-5">
                                                    <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        className="img-fluid object-fit-cover border-radius-35" alt="..." />
                                                </div>
                                                <div className="col-md-7">
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
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-bookmark" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-heart" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="d-flex justify-content-end px-4 pt-3 pb-5">
                                                <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                    <a href="./product.html" className="text-decoration-none ps-1 fw-semibold text-white">
                                                        <span className="fw-semibold">See details</span>&nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </article>
                        <article className="bg-body-tertiary rounded mb-4"> 
                            <div 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                className="d-flex justify-content-end px-4 pt-3">
                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                        <span className="fw-semibold">Brief details</span>
                                    </span>
                            </div> 
                            <div className="row align-items-center m-2 py-2">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain border-radius-35" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1 pe-3">
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-dash-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="border border-secondary px-3 border-radius-35">
                                            30
                                        </span>
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="ps-2">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-trash2-fill text-danger" viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div> 

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                    <div className="modal-content"> 
                                        <div className="modal-header d-flex justify-content-end">
                                            <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Modal title</h3>
                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="border-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                            </svg>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row align-items-center p-4 g-3">
                                                <div className="col-md-5">
                                                    <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        className="img-fluid object-fit-cover border-radius-35" alt="..." />
                                                </div>
                                                <div className="col-md-7">
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
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-bookmark" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-heart" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="d-flex justify-content-end px-4 pt-3 pb-5">
                                                <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                    <a href="./product.html" className="text-decoration-none ps-1 fw-semibold text-white">
                                                        <span className="fw-semibold">See details</span>&nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </article>
                        <article className="bg-body-tertiary rounded mb-4"> 
                            <div 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                className="d-flex justify-content-end px-4 pt-3">
                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                        <span className="fw-semibold">Brief details</span>
                                    </span>
                            </div> 
                            <div className="row align-items-center m-2 py-2">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain border-radius-35" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1 pe-3">
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-dash-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="border border-secondary px-3 border-radius-35">
                                            30
                                        </span>
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="ps-2">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-trash2-fill text-danger" viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div> 

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                    <div className="modal-content"> 
                                        <div className="modal-header d-flex justify-content-end">
                                            <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Modal title</h3>
                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="border-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                            </svg>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row align-items-center p-4 g-3">
                                                <div className="col-md-5">
                                                    <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        className="img-fluid object-fit-cover border-radius-35" alt="..." />
                                                </div>
                                                <div className="col-md-7">
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
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-bookmark" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-heart" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="d-flex justify-content-end px-4 pt-3 pb-5">
                                                <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                    <a href="./product.html" className="text-decoration-none ps-1 fw-semibold text-white">
                                                        <span className="fw-semibold">See details</span>&nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </article>
                        <article className="bg-body-tertiary rounded mb-4"> 
                            <div 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal"
                                className="d-flex justify-content-end px-4 pt-3">
                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                        <span className="fw-semibold">Brief details</span>
                                    </span>
                            </div> 
                            <div className="row align-items-center m-2 py-2">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain border-radius-35" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1 pe-3">
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-dash-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="border border-secondary px-3 border-radius-35">
                                            30
                                        </span>
                                        <span>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-plus-circle-fill text-secondary" viewBox="0 0 16 16">
                                                    <path
                                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                            </a>
                                        </span>
                                        <span className="ps-2">
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    className="bi bi-trash2-fill text-danger" viewBox="0 0 16 16">
                                                    <path
                                                        d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div> 

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                    <div className="modal-content"> 
                                        <div className="modal-header d-flex justify-content-end">
                                            <h3 className="modal-title fs-5 d-none" id="exampleModalLabel">Modal title</h3>
                                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="border-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                            </svg>
                                            </button>
                                        </div>

                                        <div className="modal-body">
                                            <div className="row align-items-center p-4 g-3">
                                                <div className="col-md-5">
                                                    <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        className="img-fluid object-fit-cover border-radius-35" alt="..." />
                                                </div>
                                                <div className="col-md-7">
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
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-bookmark" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                                                </svg>
                                                            </span>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                                    className="bi bi-heart" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="d-flex justify-content-end px-4 pt-3 pb-5">
                                                <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                    <a href="./product.html" className="text-decoration-none ps-1 fw-semibold text-white">
                                                        <span className="fw-semibold">See details</span>&nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                        </svg>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div> 
                                </div> 
                            </div>
                        </article>

                    </section>

                </div> 

            </section> 

        </Layout>
    )
}

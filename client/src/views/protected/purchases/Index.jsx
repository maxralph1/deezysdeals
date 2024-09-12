import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx';


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4">Purchased Products for Re-Sale</h2> 

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
                                <input type="text" placeholder="Search products ..." className="" />
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
                            <li className="box-shadow-1 border-radius-25 py-3 px-2 cursor-pointer">
                                <div className="text-dark">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2 px-3">
                                        <span className="fw-semibold">#1</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Item Details
                                        </span>
                                    </div>
                                    <div className="row align-items-center g-3 px-3 py-1">
                                        <div className="col-md-5">
                                            <div id="carouselExample" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
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
                                        <div className="col-md-7">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-6">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Saved
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivered&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                            </div>
                                        </div> 
                                    </div>
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
                                                <div className="row align-items-center justify-content-between p-4 pt-2 g-3">
                                                    <div className="col-md-5">
                                                        <div id="carouselModalExample" className="carousel slide">
                                                            <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                                <div className="images">
                                                                    <div className="carousel-item active">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                </div> 

                                                                <div>
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carouselModalExample" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carouselModalExample" data-bs-slide="next">
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

                                                <section className="about px-4">
                                                    <h4 className="border-bottom pb-2 fs-6">About this Item:</h4> 
                                                    <ul>
                                                        <li>Powerful Performance: Equipped with an Intel Celeron N5100 processor (4C/4T, 1.1/2.8GHz) and integrated Intel UHD Graphics, ensuring smooth and efficient multitasking for everyday computing tasks.</li> 
                                                        <li>Generous Storage & Memory: Features 32GB DDR4 RAM and a 1TB SSD for fast data access and ample storage space, perfect for storing large files and applications.</li> 
                                                        <li>Sleek Design & Display: 15.6" FHD (1920x1080) anti-glare display delivers clear and vibrant visuals. The laptop has a modern and durable design with a black PC-ABS chassis, weighing just 1.7 kg (3.75 lbs) for portability.</li> 
                                                        <li>Enhanced Connectivity & Security: Includes multiple ports for versatile connectivity - USB 2.0, USB 3.2 Gen 1, HDMI 1.4b, and RJ-45 Ethernet. Features Wi-Fi 5, Bluetooth 5.1, a camera privacy shutter, Firmware TPM 2.0 for added security, and comes with Windows 11 Pro pre-installed.</li> 
                                                        <li>Complete Accessory Package for Ultimate Convenience: Alongside the laptop, this package includes a set of valuable accessories to enhance your computing experience. You'll receive a 512GB external hard drive for additional storage, a microfiber cloth for keeping your screen clean and smudge-free, and a hotkey sticker sheet to speed up your workflow. Find your special voucher inside due to package size constraints. Claim your free exclusive gifts with a simple scan, shipped at no extra cost!</li>
                                                    </ul>
                                                </section>

                                                <div className="d-flex justify-content-end px-4 pt-4 pb-2">
                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                            <span className="fw-semibold">See full details</span>&nbsp;
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                            </svg>
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 

                            <li className="box-shadow-1 border-radius-25 py-3 px-2 cursor-pointer">
                                <div className="text-dark">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2 px-3">
                                        <span className="fw-semibold">#2</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example2Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Item Details
                                        </span>
                                    </div>
                                    <div className="row align-items-center g-3 px-3 py-1">
                                        <div className="col-md-5">
                                            <div id="carousel2Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1602722504330-eb690556fd99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
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
                                        <div className="col-md-7">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-6">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Saved
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivered&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                            </div>
                                        </div> 
                                    </div>
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
                                                <div className="row align-items-center justify-content-between p-4 pt-2 g-3">
                                                    <div className="col-md-5">
                                                        <div id="carousel2ModalExample" className="carousel slide">
                                                            <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                                <div className="images">
                                                                    <div className="carousel-item active">
                                                                        <img src="https://images.unsplash.com/photo-1602722504330-eb690556fd99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                </div> 

                                                                <div>
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel2ModalExample" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel2ModalExample" data-bs-slide="next">
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

                                                <section className="about px-4">
                                                    <h4 className="border-bottom pb-2 fs-6">About this Item:</h4> 
                                                    <ul>
                                                        <li>Powerful Performance: Equipped with an Intel Celeron N5100 processor (4C/4T, 1.1/2.8GHz) and integrated Intel UHD Graphics, ensuring smooth and efficient multitasking for everyday computing tasks.</li> 
                                                        <li>Generous Storage & Memory: Features 32GB DDR4 RAM and a 1TB SSD for fast data access and ample storage space, perfect for storing large files and applications.</li> 
                                                        <li>Sleek Design & Display: 15.6" FHD (1920x1080) anti-glare display delivers clear and vibrant visuals. The laptop has a modern and durable design with a black PC-ABS chassis, weighing just 1.7 kg (3.75 lbs) for portability.</li> 
                                                        <li>Enhanced Connectivity & Security: Includes multiple ports for versatile connectivity - USB 2.0, USB 3.2 Gen 1, HDMI 1.4b, and RJ-45 Ethernet. Features Wi-Fi 5, Bluetooth 5.1, a camera privacy shutter, Firmware TPM 2.0 for added security, and comes with Windows 11 Pro pre-installed.</li> 
                                                        <li>Complete Accessory Package for Ultimate Convenience: Alongside the laptop, this package includes a set of valuable accessories to enhance your computing experience. You'll receive a 512GB external hard drive for additional storage, a microfiber cloth for keeping your screen clean and smudge-free, and a hotkey sticker sheet to speed up your workflow. Find your special voucher inside due to package size constraints. Claim your free exclusive gifts with a simple scan, shipped at no extra cost!</li>
                                                    </ul>
                                                </section>

                                                <div className="d-flex justify-content-end px-4 pt-4 pb-2">
                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                            <span className="fw-semibold">See full details</span>&nbsp;
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                            </svg>
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 

                            <li className="box-shadow-1 border-radius-25 py-3 px-2 cursor-pointer">
                                <div className="text-dark">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2 px-3">
                                        <span className="fw-semibold">#3</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example3Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Item Details
                                        </span>
                                    </div>
                                    <div className="row align-items-center g-3 px-3 py-1">
                                        <div className="col-md-5">
                                            <div id="carousel3Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
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
                                        <div className="col-md-7">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-6">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Saved
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivered&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 

                                <div className="modal fade" id="example3Modal" tabIndex="-1" aria-labelledby="example3ModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header d-flex justify-content-end align-items-center gap-1">
                                                <h3 className="modal-title fs-5 d-none" id="example3ModalLabel">Item name</h3>
                                                <button type="button" className="border-0" data-bs-dismiss="modal" aria-label="Close">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row align-items-center justify-content-between p-4 pt-2 g-3">
                                                    <div className="col-md-5">
                                                        <div id="carousel3ModalExample" className="carousel slide">
                                                            <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                                <div className="images">
                                                                    <div className="carousel-item active">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1680390327010-09e627ebd475?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                </div> 

                                                                <div>
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel3ModalExample" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel3ModalExample" data-bs-slide="next">
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

                                                <section className="about px-4">
                                                    <h4 className="border-bottom pb-2 fs-6">About this Item:</h4> 
                                                    <ul>
                                                        <li>Powerful Performance: Equipped with an Intel Celeron N5100 processor (4C/4T, 1.1/2.8GHz) and integrated Intel UHD Graphics, ensuring smooth and efficient multitasking for everyday computing tasks.</li> 
                                                        <li>Generous Storage & Memory: Features 32GB DDR4 RAM and a 1TB SSD for fast data access and ample storage space, perfect for storing large files and applications.</li> 
                                                        <li>Sleek Design & Display: 15.6" FHD (1920x1080) anti-glare display delivers clear and vibrant visuals. The laptop has a modern and durable design with a black PC-ABS chassis, weighing just 1.7 kg (3.75 lbs) for portability.</li> 
                                                        <li>Enhanced Connectivity & Security: Includes multiple ports for versatile connectivity - USB 2.0, USB 3.2 Gen 1, HDMI 1.4b, and RJ-45 Ethernet. Features Wi-Fi 5, Bluetooth 5.1, a camera privacy shutter, Firmware TPM 2.0 for added security, and comes with Windows 11 Pro pre-installed.</li> 
                                                        <li>Complete Accessory Package for Ultimate Convenience: Alongside the laptop, this package includes a set of valuable accessories to enhance your computing experience. You'll receive a 512GB external hard drive for additional storage, a microfiber cloth for keeping your screen clean and smudge-free, and a hotkey sticker sheet to speed up your workflow. Find your special voucher inside due to package size constraints. Claim your free exclusive gifts with a simple scan, shipped at no extra cost!</li>
                                                    </ul>
                                                </section>

                                                <div className="d-flex justify-content-end px-4 pt-4 pb-2">
                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                            <span className="fw-semibold">See full details</span>&nbsp;
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                            </svg>
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li> 

                            <li className="box-shadow-1 border-radius-25 py-3 px-2 cursor-pointer">
                                <div className="text-dark">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2 px-3">
                                        <span className="fw-semibold">#4</span>
                                        <span 
                                            type="button" 
                                            data-bs-toggle="modal" data-bs-target="#example4Modal"
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View Item Details
                                        </span>
                                    </div>
                                    <div className="row align-items-center g-3 px-3 py-1">
                                        <div className="col-md-5">
                                            <div id="carousel4Example" className="carousel slide">
                                                <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                    <div className="images">
                                                        <div className="carousel-item active">
                                                            <img src="https://images.unsplash.com/photo-1602722504330-eb690556fd99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: '215px', height: '215px' }} alt="..." />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
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
                                        <div className="col-md-7">
                                            <div className="card-body d-flex flex-column gap-0">
                                                <h4 className="card-title fs-6">Portable Monitor 15.6inch FHD 1080P USB C HDMI
                                                    Gaming Ultra-Slim IPS
                                                    Display
                                                    w/Smart Cover & Speakers,HDR Plug&Play,
                                                    External Monitor for Laptop PC Phone Mac (15.6'' 1080P)</h4>
                                                <span className="card-text"><small>Options: <span className="fw-semibold">7
                                                            sizes</span></small></span>
                                                <span className="card-text">10k+ bought in the last month</span>
                                                <span className="card-text"><small><s>$86.99</s></small>&nbsp;<span className="fw-semibold">$79.99</span></span>
                                                <span className="card-text"><small><span
                                                            className="bg-success border-radius-35 px-2 py-1 text-white fw-semibold">Saved
                                                            $15.00</span>&nbsp;with coupon</small></span>
                                                <span className="card-text">Delivered&nbsp;<span className="fw-semibold">Fri, Aug
                                                        30</span></span>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 

                                <div className="modal fade" id="example4Modal" tabIndex="-1" aria-labelledby="example4ModalLabel" aria-hidden="true">
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
                                                <div className="row align-items-center justify-content-between p-4 pt-2 g-3">
                                                    <div className="col-md-5">
                                                        <div id="carousel4ModalExample" className="carousel slide">
                                                            <div className="carousel-inner position-relative" style={{ width: '215px', height: '215px' }}>
                                                                <div className="images">
                                                                    <div className="carousel-item active">
                                                                        <img src="https://images.unsplash.com/photo-1602722504330-eb690556fd99?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1695527081756-6e15ed27c6a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                    <div className="carousel-item">
                                                                        <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block object-fit-cover border-radius-35" style={{ width: '215px', height: '215px' }} alt="..." />
                                                                    </div>
                                                                </div> 

                                                                <div>
                                                                    <button className="carousel-control-prev position-absolute left-0 ps-1" type="button" data-bs-target="#carousel4ModalExample" data-bs-slide="prev">
                                                                        <span>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                                                                            </svg>
                                                                        </span>
                                                                        <span className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next position-absolute right-0 pe-1" type="button" data-bs-target="#carousel4ModalExample" data-bs-slide="next">
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

                                                <section className="about px-4">
                                                    <h4 className="border-bottom pb-2 fs-6">About this Item:</h4> 
                                                    <ul>
                                                        <li>Powerful Performance: Equipped with an Intel Celeron N5100 processor (4C/4T, 1.1/2.8GHz) and integrated Intel UHD Graphics, ensuring smooth and efficient multitasking for everyday computing tasks.</li> 
                                                        <li>Generous Storage & Memory: Features 32GB DDR4 RAM and a 1TB SSD for fast data access and ample storage space, perfect for storing large files and applications.</li> 
                                                        <li>Sleek Design & Display: 15.6" FHD (1920x1080) anti-glare display delivers clear and vibrant visuals. The laptop has a modern and durable design with a black PC-ABS chassis, weighing just 1.7 kg (3.75 lbs) for portability.</li> 
                                                        <li>Enhanced Connectivity & Security: Includes multiple ports for versatile connectivity - USB 2.0, USB 3.2 Gen 1, HDMI 1.4b, and RJ-45 Ethernet. Features Wi-Fi 5, Bluetooth 5.1, a camera privacy shutter, Firmware TPM 2.0 for added security, and comes with Windows 11 Pro pre-installed.</li> 
                                                        <li>Complete Accessory Package for Ultimate Convenience: Alongside the laptop, this package includes a set of valuable accessories to enhance your computing experience. You'll receive a 512GB external hard drive for additional storage, a microfiber cloth for keeping your screen clean and smudge-free, and a hotkey sticker sheet to speed up your workflow. Find your special voucher inside due to package size constraints. Claim your free exclusive gifts with a simple scan, shipped at no extra cost!</li>
                                                    </ul>
                                                </section>

                                                <div className="d-flex justify-content-end px-4 pt-4 pb-2">
                                                    <span className="btn btn-sm btn-dark border-radius-35 d-flex align-items-center">
                                                        <Link to={ route('products.show') } target="_blank"  className="text-decoration-none ps-1 fw-semibold text-white">
                                                            <span className="fw-semibold">See full details</span>&nbsp;
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                            </svg>
                                                        </Link>
                                                    </span>
                                                </div>
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

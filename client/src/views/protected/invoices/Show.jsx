import Layout from '@/components/protected/Layout.jsx'; 


export default function Show() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4"><span>Ref:&nbsp;<span className="fw-semibold">#1287852120ABVHC26546</span></span></h2> 

                    <div className="py-3"> 
                        <section className="amount-and-client"> 
                            <section className="d-flex align-items-center gap-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                    </svg>
                                </span>
                                <span>Print copy</span>
                            </section>
                            <section className="barcode pt-3" style={{ textAlign: 'center' }}>
                                <img alt='Barcode Generator TEC-IT'
                                src='https://barcode.tec-it.com/barcode.ashx?data=128785212026&code=EAN13'/>
                            </section>
                            <h3 className="fw-semibold">$240.25</h3> 
                            <p className="d-flex align-items-center" style={{ marginTop: '-0.5rem' }}>
                                <span>Paid with</span>
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F009%2F469%2F637%2Foriginal%2Fpaypal-payment-icon-editorial-logo-free-vector.jpg&f=1&nofb=1&ipt=4c40b29681f959d75d7cbc4ca3777644fa53f22878e20eff9efe3945e013aa86&ipo=images" style={{ width: '50px' }} alt="" />
                            </p>
                            <p style={{ marginTop: '-0.5rem' }}><small>2 days ago</small></p>
                        </section> 

                        <section className="ordered-items pt-1" style={{ maxWidth: '600px' }}> 
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

                            <div className="text-end border-top border-bottom py-1">
                                <span className="fw-semibold fs-5">$240.25</span>
                            </div>
                        </section> 
                    </div> 
                </div> 
            </div>
        </Layout>
    )
}

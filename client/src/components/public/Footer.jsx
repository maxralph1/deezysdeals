import { useState } from 'react'; 


export default function Footer() {
    const [helpToggle, setHelpToggle] = useState(false); 
    const [cartToggle, setCartToggle] = useState(false); 

    return (
        <footer className="footer pt-5 px-3 z-2">
            <section className="help"> 

                { helpToggle && 
                    <div id="help-box" className="help-box card p-3">
                        <section>
                            <h4 className="fw-bold border-bottom">Chat with our AI HelpDesk</h4>
                        </section>
                        <section className="messages border-bottom w-100">
                            <div className="d-flex flex-column gap-2 pt-2 pb-3">
                                <article className="w-100 d-flex justify-content-start bg-dark rounded text-white text-start p-3 pe-5">
                                    <span className="text-start">How may we help you today?</span>
                                </article>
                                
                                <article className="w-100 d-flex justify-content-end bg-body-tertiary rounded p-3 ps-5">
                                    <span className="text-end">I need to set up my account</span>
                                </article> 

                                <article className="w-100 d-flex justify-content-start bg-dark rounded text-white text-start p-3 pe-5">
                                    <span className="text-start">How may we help you today?</span>
                                </article>
                                
                                <article className="w-100 d-flex justify-content-end bg-body-tertiary rounded p-3 ps-5">
                                    <span className="text-end">I need to set up my account</span>
                                </article>
                            </div> 
                            <div className="email-option mx-4 p-1 rounded bg-secondary text-white my-2">
                                <span className="w-75">Not satisfied with our AI response? <a href="#" className="text-decoration-none text-white fw-semibold">Email us</a>.</span>
                            </div>
                        </section> 

                        <section> 
                            <form action="" className="w-100 pt-3 d-flex justify-content-between align-items-center gap-1">
                                <div>
                                    <div className="">
                                        <textarea className="form-control" placeholder="Ask our AI  ..." id="message" style={{ height: '50px' }}></textarea>
                                    </div>
                                </div> 
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </div> 
                            </form>
                        </section>
                    </div> 
                }

                <div 
                    type="button" 
                    onClick={ () => setHelpToggle(!helpToggle) }
                    id="help-btn" 
                    className="help-btn cursor-pointer d-flex align-items-center gap-1">
                    <span className="text text-white">
                        Help
                    </span> 
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-question-circle-fill text-white" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                        </svg>
                    </span>
                </div>
            </section> 

            <section className="cart"> 

                { cartToggle && 
                    <div id="cart-box" className="cart-box card p-2"> 
                        <div className="position-sticky top-0">
                            <div className="w-100 d-flex justify-content-between align-items-center py-3 px-2 gap-2">
                                <div className="d-flex align-items-center gap-1">
                                    <h4 className="fs-6 fw-semibold mb-0">Cart Items</h4>
                                    <span className="mb-0 badge rounded-pill text-bg-success">2</span>
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
                        </div>
                        
                        <div className="cart-items">
                            <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1">
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
                            </article>
                            
                            <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1">
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
                            </article>
                            
                            <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
                                <div className="col-4">
                                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
                                </div>
                                <div className="col-8 d-flex flex-column">
                                    <div className="text pb-1">
                                        <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                        <p className="item-description">An elegant, classic of highest quality ...</p>
                                        <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between gap-1">
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
                            </article>
                        </div> 

                        <div className="cart-footer bg-white border rounded py-4 px-3">
                            <div className="checkout d-flex justify-content-between align-items-center">
                                <span className="fw-bold">$2,750</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                        className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div> 
                }

                <div 
                    type="button" 
                    onClick={ () => setCartToggle(!cartToggle) } 
                    id="cart-btn" 
                    className="cart-btn cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-handbag-fill text-white"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                    </svg>
                </div>
            </section>

            <section className="footer-end bg-dark text-white">
                <div className="header d-flex flex-column"
                    style={{ background: 'url(https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '30vh', borderRadius: '35px 35px 0 0' }} >
                    <div className="d-flex align-items-center justify-content-between flex-wrap column-gap-3 row-gap-1 h-100 px-3">
                        <div className="d-flex flex-column m-auto gap-2">
                            <span className="text-dark fw-bold" style={{ textShadow: '1px 1px white, -1px -1px white' }}>Get it Before Everyone Else</span>
                            <div className="search-container border border-dark">
                                <input type="text" placeholder="Email address" />
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        className="bi bi-arrow-right-circle-fill text-dark" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
            
                        <div className="m-auto">
                            <span className="shop-now btn btn-sm border-radius-35">
                                <a href="#" className="text-decoration-none ps-1 fw-semibold">
                                    <span>Shop Now</span>&nbsp;
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
            
                <section className="contact d-flex justify-content-between py-4 px-3">
                    <div className="d-flex flex-column gap-2">
                        <span>
                            <a href="#" className="text-decoration-none text-white">About</a>
                        </span>
                        <span>
                            <a href="#" className="text-decoration-none text-white">Contact</a>
                        </span>
                    </div>
            
                    <div className="d-flex flex-column text-center">
                        <span className="fw-semibold">DeezysDeals</span>
                        <span><small>Best shopping experience</small></span>
                    </div>
            
                    <section className="social d-flex gap-2">
                        <a href="http://www.tiktok.com/@deezysdeals" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-tiktok text-white" viewBox="0 0 16 16">
                                <path
                                    d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/deezysdeals?igsh=MWd5ZGR3dnFvZzRuaQ==" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-instagram text-white" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61561516712053&mibextid=LQQJ4d" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-facebook text-white" viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a> 
                        <a href="https://youtu.be/wIDt6Yt2HDI?feature=shared" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube text-white" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </a>
                        <a href="https://x.com/deezysdeals?s=21" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-twitter-x text-white" viewBox="0 0 16 16">
                                <path
                                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </section>
                </section>
            
                <section className="px-3 py-4">Copyright &copy; 2024. <span className="fw-bold">DeezysDeals</span>.</section>
            </section>
        </footer>
    )
}

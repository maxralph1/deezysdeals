export default function Aside() {
    return (
        <aside className="aside card border-radius-35 mt-4 mb-4"> 
                <div className="advanced-search p-3 pt-4">
                    <div className="px-2">
                        <h3 className="fw-bold border-bottom pb-2 fs-5">Advanced Search</h3>
                    </div>
                    <div className="d-flex flex-column row-gap-2 pt-2">
                        <form>
                            <div className="search d-flex flex-column gap-3">
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
                                    <input type="text" placeholder="Keywords ..." />
                                </div>
                                <div className="form border border-dark" style={{ maxWidth: '300px' }}>
                                    <label htmlFor="" className="label" id="price-range">Price range:</label>
                                    <div className="d-flex w-100 justify-content-around">
                                        <input type="number" data-target="price-range" placeholder="e.g. 0" className="" /> <span className="fw-bold">|</span>
                                        <input type="number" data-target="price-range" placeholder="e.g. 100" />
                                    </div> 
                                </div>
                            </div>

                            <div className="pt-3 d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark px-4 border-radius-35">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                                                stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="trending p-3 pt-4">
                    <div className="px-2">
                        <h3 className="fw-bold border-bottom pb-2 pt-3 fs-5">Trending</h3>
                    </div>
                    <div className="d-flex flex-column row-gap-2">
                        <article className="item row align-items-center m-2 py-3 bg-body-tertiary rounded">
                            <div className="col-md-4">
                                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <div className="text">
                                    <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                    <p className="item-description">An elegant, classic of highest quality ...</p>
                                    <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                </div>
                            </div>
                        </article>
                        <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
                            <div className="col-md-4">
                                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" style={{ width: '75px', height: '100px' }} className="rounded d-block object-fit-contain" />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <div className="text">
                                    <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                    <p className="item-description">An elegant, classic of highest quality ...</p>
                                    <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                </div>
                            </div>
                        </article>
                        <article className="item row align-items-center m-2 py-2 bg-body-tertiary rounded">
                            <div className="col-md-4">
                                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" style={{ width: '75px', height: '100px' }}className="rounded d-block object-fit-contain" />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                <div className="text">
                                    <h5 className="item-title fw-semibold">Hard Beans Brasil Espresso</h5>
                                    <p className="item-description">An elegant, classic of highest quality ...</p>
                                    <p className="item-amount"><s className="">$275</s>&nbsp;<span className="fw-semibold text-success">$250.00</span></p>
                                </div>
                            </div>
                        </article>
                    </div> 
                    <div className="d-flex pt-3 px-2">
                        <span className="btn btn-sm border-radius-35 d-flex align-items-center">
                            <a href="#" className="text-decoration-none ps-1 fw-semibold">
                                <span className="fw-semibold">See more</span>&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div> 
        </aside> 
    )
}

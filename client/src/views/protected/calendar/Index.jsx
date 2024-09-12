import { useState } from 'react'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Show() { 
    const [activeLink, setActiveLink] = useState('deliveries'); 

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Calendar</h2> 

                    <div className="py-3"> 
                        <section>
                            <form action="" id="activities-form" className="activities-form">
                                <div className="row mb-3 gap-3">
                                    <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                        <label htmlFor="" className="label" id="date">Select Date for Activities:</label>
                                        <input type="date" placeholder="e.g. 01-02-2014" data-target="date" />
                                    </div>
                                </div> 

                                <div className="pt-2 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-sm btn-dark px-3 border-radius-35">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle"
                                                viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </section>

                        <div className="py-4">
                            <section className="tabs">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'deliveries') && 'active'}`}
                                            aria-current="page" 
                                            onClick={ () => setActiveLink('deliveries') }>
                                                <span>Deliveries (2)</span>
                                        </span>
                                    </li> 
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'purchases') && 'active'}`}
                                            onClick={ () => setActiveLink('purchases') }>
                                                <span>Purchases (2)</span>
                                            </span>
                                    </li>
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'responses-to-clients') && 'active'}`}
                                            aria-current="page" 
                                            onClick={ () => setActiveLink('responses-to-clients') }>
                                                <span>Responses to Clients (14)</span>
                                        </span>
                                    </li> 
                                </ul>
                            </section>

                            <section className="py-3"> 
                                <div className="text-end pb-4">
                                    <span>1 - 10 of 500 (page 1 of 20)</span>
                                </div> 

                                <ul className="list-unstyled d-flex flex-column gap-3">
                                    <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                        (Content will be dynamically populated from the server using the already laid down template for these headings in other links within our site (application)).
                                    </li>
                                </ul>
                            </section>
                        </div> 
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

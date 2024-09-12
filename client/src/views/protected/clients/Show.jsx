import { useState } from 'react'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Show() { 
    const [activeLink, setActiveLink] = useState('pending-deliveries'); 

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Pae Daezi</h2> 

                    <div className="py-3"> 
                        <section className="d-flex align-items-center flex-wrap column-gap-5 row-gap-3">
                            <div className="">
                                <span>
                                    <img src="https://images.unsplash.com/photo-1517090186835-e348b621c9ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit-cover border border-secondary border-2 border-radius-35 box-shadow-1" style={{ width: '200px', height: '225px' }} alt="" />
                                </span> 
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Pae Daezi</h3> 
                                <span className="fw-semibold">@paedaezi</span>
                                <span className="pt-0 mt-0">paedaezi@deezysdeals.com</span>
                                <span className="pt-0 mt-0">I am here to shop the whole of America! Why don't you join me?</span>
                            </div>
                        </section> 

                        <div className="py-4">
                            <section className="tabs">
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
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'payments') && 'active'}`}
                                            aria-current="page" 
                                            onClick={ () => setActiveLink('payments') }>
                                                <span>Payments (14)</span>
                                        </span>
                                    </li> 
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'orders') && 'active'}`}
                                            onClick={ () => setActiveLink('orders') }>
                                                <span>Orders (2)</span>
                                            </span>
                                    </li>
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'items-bought') && 'active'}`}
                                            onClick={ () => setActiveLink('items-bought') }>
                                                <span>Items Bought (50)</span>
                                            </span>
                                    </li>
                                    <li className="nav-item">
                                        <span 
                                            type="button" 
                                            className={`nav-link fw-semibold d-flex align-items-center text-dark ${(activeLink == 'ratings') && 'active'}`}
                                            onClick={ () => setActiveLink('ratings') }>
                                                <span>Ratings/Reviews (5)</span>
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
                                        (Content will be dynamically populated from the server using the already laid down (designed) template for these headings in (from) other links within our site (application)).
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

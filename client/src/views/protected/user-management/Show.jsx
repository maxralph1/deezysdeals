import { useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"; 
import utc from 'dayjs/plugin/utc';
dayjs.extend(relativeTime);
dayjs.extend(utc); 
import { useUser } from '@/hooks/useUser.jsx'; 
import scrollToTop from '@/utils/ScrollToTop.jsx'; 
import First from '@/components/protected/nested-components/pagination-links/First.jsx'; 
import Previous from '@/components/protected/nested-components/pagination-links/Previous.jsx'; 
import Next from '@/components/protected/nested-components/pagination-links/Next.jsx'; 
import Last from '@/components/protected/nested-components/pagination-links/Last.jsx'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Show() { 
    const [activeLink, setActiveLink] = useState('deliveries'); 

    const params = useParams(); 
    const { user, getUser } = useUser(params?.username); 
    
    console.log(user); 

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

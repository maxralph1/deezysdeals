import { useState } from 'react'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx';


export default function Index() {
    const [activeLink, setActiveLink] = useState(5);

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Reviews/Ratings</h2> 

                    <div className="py-4">
                        <section className="tabs">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold text-dark ${(activeLink == 5) && 'active'}`}
                                        aria-current="page" 
                                        onClick={ () => setActiveLink(5) }>5-stars</span>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        type="button"
                                        className={`nav-link fw-semibold text-dark ${(activeLink == 4) && 'active'}`}
                                        onClick={ () => setActiveLink(4) }>4-stars</span>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold text-dark ${(activeLink == 3) && 'active'}`}
                                        onClick={ () => setActiveLink(3) }>3-stars</span>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold text-dark ${(activeLink == 2) && 'active'}`}
                                        onClick={ () => setActiveLink(2) }>2-stars</span>
                                </li>
                                <li className="nav-item">
                                    <span 
                                        type="button" 
                                        className={`nav-link fw-semibold text-dark ${(activeLink == 1) && 'active'}`}
                                        onClick={ () => setActiveLink(1) }>1-star</span>
                                </li>
                            </ul>
                        </section>

                        <section className="py-3"> 
                            <div className="text-end pb-3">
                                <span>1 - 10 of 500 (page 1 of 20)</span>
                            </div> 

                            <ul className="list-unstyled d-flex flex-column gap-3">
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>Excellent Service</h3> 
                                    <p>What a wonderful way to buy stuff I need!</p> 
                                    <p className="text-end">- Pae Daezi,&nbsp;<small>2 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>Yes!</h3> 
                                    <p>I got to order these products I've been searching for everywhere!</p> 
                                    <p className="text-end">- Pae Daezi,&nbsp;<small>10 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They never seem to amaze with their excellent customer service!</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>10 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
                                </li>
                                <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                    <h3 className='fs-6'>WOW!</h3> 
                                    <p>They've got eye for details as always</p> 
                                    <p className="text-end">- Max Ralph,&nbsp;<small>15 days ago</small></p>
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

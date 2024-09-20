import { useState } from 'react'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() { 
    const [newslettersSubscription, setNewslettersSubscription] = useState(true); 
    const [receiveNotifications, setReceiveNotifications] = useState(true); 

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Settings</h2> 

                    <section className="py-3"> 
                        <div className="d-flex flex-column gap-3">
                            <div className="newsletter-subscription d-flex align-items-center gap-1">
                                { (newslettersSubscription == true) 
                                    ?   <span 
                                            type="button" 
                                            onClick={ () => setNewslettersSubscription(false) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-toggle-on" viewBox="0 0 16 16">
                                                    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                                                </svg>
                                        </span>
                                    : (newslettersSubscription == false) 
                                        ?   <span 
                                                type="button" 
                                                onClick={ () => setNewslettersSubscription(true) }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
                                                        <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
                                                    </svg>
                                            </span>
                                                : '' } 
                                            <span>Receive newsletters</span>
                            </div>

                            <div className="newsletter-subscription d-flex align-items-center gap-1">
                                { (receiveNotifications == true) 
                                    ?   <span 
                                            type="button" 
                                            onClick={ () => setReceiveNotifications(false) }>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-toggle-on" viewBox="0 0 16 16">
                                                    <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                                                </svg>
                                        </span>
                                    : (receiveNotifications == false) 
                                        ?   <span 
                                                type="button" 
                                                onClick={ () => setReceiveNotifications(true) }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-toggle-off" viewBox="0 0 16 16">
                                                        <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
                                                    </svg>
                                            </span>
                                                : '' } 
                                            <span>Receive notifications</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

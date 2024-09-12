import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx'; 


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Notifications</h2> 

                    <section className="py-3"> 
                        <div className="text-end pb-3">
                            <span>1 - 10 of 500 (page 1 of 20)</span>
                        </div> 

                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer bg-secondary text-white">
                                <h3 className='fs-6 fw-semibold'>Order Notification</h3> 
                                <p>You just ordered 5 items worth $150.50.&nbsp;<span><Link to={ route('home.orders.show') } className="text-warning">View details</Link></span>.</p> 
                            </li>
                            <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                <h3 className='fs-6 fw-semibold'>Email Notification</h3> 
                                <p>Response to your inquiry has just been sent to your email. Comsult your email for the message.</p> 
                            </li>
                            <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                <h3 className='fs-6 fw-semibold'>Order Arrival Notification</h3> 
                                <p>You just order of 5 items worth $150.50 has just arrived.&nbsp;<span><Link to={ route('home.orders.show') } className="text-warning">View details</Link></span>.</p> 
                            </li>
                            <li className="box-shadow-1 border-radius-25 py-3 px-4 cursor-pointer">
                                <h3 className='fs-6 fw-semibold'>Bonus Notification</h3> 
                                <p>You have just been awarded a discount of $10 on any item you purchase. You can use it on any item on our online shop.&nbsp;<span><Link to={ route('home.discounts.show') } className="text-warning">View details</Link></span>.</p> 
                            </li>
                        </ul>
                    </section>
                </div> 

                <PaginationLinks /> 
            </div>
        </Layout>
    )
}

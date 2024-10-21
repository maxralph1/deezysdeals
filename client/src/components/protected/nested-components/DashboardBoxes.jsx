import { useOrders } from '@/hooks/useOrders.jsx'; 
import RatingChart from './RatingChart';


export default function DashboardBoxes() { 
    const { orders } = useOrders(); 
    console.log(orders); 

    return (
        <section className="dashboard-boxes d-flex flex-column gap-4">
            <div className="line line-1">
                <section className="sales-purchase gap-4">
                    <div className="sales d-flex justify-content-between p-3 border-radius-25 box-shadow-1 bg-secondary text-white">
                        <div className="d-flex flex-column justify-content-between gap-2">
                            <h2 className="fs-6">Total Orders <span className="fw-semibold">({ orders?.meta?.total_results })</span></h2>
                            <span className="fs-4 fw-semibold">${ (orders?.meta?.total_amount)?.toLocaleString('en') }</span>
                        </div>
            
                        <div className="d-flex flex-column justify-content-between align-items-end gap-2">
                            <span className="menu cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </span>
                            <span className="d-flex justify-content-end align-items-center gap-1 flex-wrap">
                                <span className="badge rounded-pill text-bg-success">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                            className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                        </svg>
                                    </span>
                                    <span><small>+15%</small></span>
                                </span>
                                <span>
                                    <small>vs last month</small>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="purchase d-flex justify-content-between p-3 border-radius-25 box-shadow-1">
                        <div className="d-flex flex-column justify-content-between gap-2">
                            <h2 className="fs-6">Total Purchase</h2>
                            <span className="fs-4 fw-semibold">$240,592.00</span>
                        </div>
            
                        <div className="d-flex flex-column justify-content-between align-items-end gap-2">
                            <span className="menu cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </span>
                            <span className="d-flex justify-content-end align-items-center gap-1 flex-wrap">
                                <span className="badge rounded-pill text-bg-danger">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"
                                            className="bi bi-arrow-down-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z" />
                                        </svg>
                                    </span>
                                    <span><small>-4%</small></span>
                                </span>
                                <span>
                                    <small>vs last month</small>
                                </span>
                            </span>
                        </div>
                    </div>
                </section>
            
                <div className="client-growth box-shadow-1 border-radius-25 p-3 d-flex flex-column gap-2">
                    <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <h2 className="fs-6">Clients Volume</h2> 
                            <span className="menu cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </span>
                        </div>
                        
                        <div>
                            <ul className="list-unstyled d-flex gap-1">
                                <li className="badge rounded-pill text-bg-dark">12h</li>
                                <li className="badge rounded-pill text-bg-secondary">24h</li>
                                <li className="badge rounded-pill text-bg-secondary">A Week</li>
                                <li className="badge rounded-pill text-bg-secondary">A Month</li>
                                <li className="badge rounded-pill text-bg-secondary">All</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-semibold fs-4">192,230</span>
                        <span className="badge rounded-pill text-bg-success">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-up-right"
                                    viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </span>
                            <span><small>+15%</small></span>
                        </span>
                    </div> 

                    <div>
                        <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>
                    </div> 

                    <div className="d-flex align-items-center justify-content-between fw-semibold">
                        <small>Check-ins totally</small> 
                        <small>+120 today</small>
                    </div>
                </div>
            
                <div className="customers-volume box-shadow-1 border-radius-25 p-3 d-flex flex-column justify-content-between gap-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="fs-6">Client Growth</h2>
                        <span className="menu cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </span>
                    </div> 

                    <div className="d-flex flex-column">
                        <span className="fs-4 fw-semibold">120</span> 
                        <span>New Clients</span>
                    </div> 

                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <span className="border border-1 border-secondary border-radius-35 px-3" style={{ fontSize: '0.75rem' }}>Client volume increased</span>
                        <span className="badge rounded-pill text-bg-success">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-arrow-up-right"
                                    viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </span>
                            <span><small>+15%</small></span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="line line-2">
                <div className="statistics box-shadow-1 border-radius-25 p-3 d-flex flex-column justify-content-between gap-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-column">
                            <h2 className="fs-6">Statistics</h2>
                            <span className="badge rounded-pill text-bg-success p-2">
                                Ratings
                            </span>
                        </div>
                        <div>
                            <span className="badge rounded-pill text-bg-secondary">
                                Weekly
                            </span> 
                            <span className="menu cursor-pointer ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </span>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="d-flex flex-column gap-1 col-3">
                            <span className="fw-semibold fs-4">+72%</span>
                            <small>Customer satisfaction increase from last week</small>
                        </div>

                        <section className="col-9">
                            {/* <div className="chart-bars">
                                <span className="mon bg-secondary cursor-pointer" style={{ height: '2rem', minWidth: '1.7rem' }}></span>
                                <span className="tue bg-secondary cursor-pointer" style={{ height: '4rem', minWidth: '1.7rem' }}></span>
                                <span className="wed bg-secondary cursor-pointer" style={{ height: '6rem', minWidth: '1.7rem' }}></span>
                                <span className="thu bg-secondary cursor-pointer" style={{ height: '3.5rem', minWidth: '1.7rem' }}></span>
                                <span className="fri bg-secondary cursor-pointer" style={{ height: '2.5rem', minWidth: '1.7rem' }}></span>
                                <span className="sat bg-secondary cursor-pointer" style={{ height: '4.5rem', minWidth: '1.7rem' }}></span>
                                <span className="sun bg-secondary cursor-pointer" style={{ height: '2rem', minWidth: '1.7rem' }}></span>
                            </div> */} 
                            <RatingChart />
                        </section>
                    </div>
                </div> 

                <div className="orders box-shadow-1 border-radius-25 p-3 d-flex flex-column justify-content-between gap-2" style={{ background: 'url(https://c8.alamy.com/comp/2K69C8B/map-of-setagaya-city-urban-black-and-white-poster-road-map-image-with-metropolitan-city-area-view-2K69C8B.jpg)', backgroundSize: 'cover' }}>
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="fs-6" style={{ textShadow: '2px 2px white, -2px -2px white' }}>Most Order by Client</h2>
                        <span className="menu cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </span>
                    </div>

                    <section>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="w-100 d-flex align-items-center justify-content-between bg-success border-radius-35 px-3 text-white py-1">
                                <span className="d-flex align-items-center gap-1">
                                    <span>
                                        <img src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="object-fit-cover border border-white border-2" style={{ width: '40px', height: '40px', borderRadius: '50px' }}
                                            alt="" />
                                    </span> 
                                    <span className="d-flex flex-column">
                                        <small className="fw-semibold">Pae Daezi</small>
                                        <small className=""><small>$250.00, 30 days ago</small></small>
                                    </span>
                                </span>
                                
                                <span>Chicago</span>
                                <span>#1</span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between bg-secondary border-radius-35 px-3 text-white py-1" style={{ width: '95%' }}>
                                <span className="d-flex align-items-center gap-1">
                                    <span>
                                        <img src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="object-fit-cover border border-white border-2" style={{ width: '40px', height: '40px', borderRadius: '50px' }}
                                            alt="" />
                                    </span>
                                    <span className="d-flex flex-column">
                                        <small className="fw-semibold">Pae Daezi</small>
                                        <small className=""><small>$215.00, 30 days ago</small></small>
                                    </span>
                                </span>
                                <span>Boston</span>
                                <span>#2</span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between bg-white border border-dark border-radius-35 px-3 text-dark py-1" style={{ width: '90%' }}>
                                <span className="d-flex align-items-center gap-1">
                                    <span>
                                        <img src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            className="object-fit-cover border border-dark border-2" style={{ width: '40px', height: '40px', borderRadius: '50px' }}
                                            alt="" />
                                    </span> 
                                    <span className="d-flex flex-column">
                                        <small className="fw-semibold">Pae Daezi</small>
                                        <small className=""><small>$215.00, 30 days ago</small></small>
                                    </span>
                                </span>
                                <span>Boston</span>
                                <span>#3</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    )
}

import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 


export default function Header() {
    const [navToggle, setNavToggle] = useState(false); 

    return (
        <header className="header dashboard-header container-fluid z-3 bg-dark bg-gradient d-flex justify-content-between border-radius-35 px-4 mt-3">
            <h1 className="company-name fw-bold text-white">DeezysDeals</h1> 

            <div id="dashboard-nav" className="dashboard-navbar fw-bold mt-3" style={{ display: navToggle && 'flex' }}>
                <nav className="dashboard-topnav">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={ route('index') } className="text-decoration-none">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={ route('home.invoices.index') } className="text-decoration-none">
                                Invoices
                            </Link>
                        </li>

                        <li>
                            <Link to={ route('home.calendar.index') } className="text-decoration-none">
                                Calendar
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <section className="user-topnav">
                    <ul className="list-unstyled">
                        <li className="notifications"> 
                            <Link 
                                to={ route('home.notifications.index') } 
                                className="text-decoration-none d-flex align-items-center justify-content-end gap-1">
                                <span className="text d-block d-md-none">Notifications</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                    </svg>
                                </span>
                            </Link>
                        </li>
                        <li className="settings">
                            <Link 
                                to={ route('home.settings.index') } 
                                className="text-decoration-none d-flex align-items-center justify-content-end gap-1">
                                <span className="text d-block d-md-none">
                                    Settings
                                </span> 
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                                        <path
                                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                                    </svg>
                                </span>
                            </Link>
                        </li> 
                        <li className="auth-user d-flex align-items-center gap-2">
                            <span id="user-icon" className="user">
                                <img src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="" className="object-fit-cover border border-2" />
                            </span> 
                            <span className="d-flex flex-column">
                                <span className="">Pae Daezi</span>
                                <span className="fw-normal">@paedaezi</span>
                            </span>
                        </li>
                        <li className="sign-out text-danger d-flex align-items-center justify-content-end gap-1">
                            <span className="text d-block d-md-none">Sign Out</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-power text-danger"
                                    viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z" />
                                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
            
            <div 
                id="dashboard-mobile-nav" 
                className="dashboard-mobile-nav cursor-pointer d-block d-md-none" 
                onClick={ () => setNavToggle(!navToggle) }>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    className="mobile-nav-icon bi bi-list text-white" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
        </header>
    )
}

import { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { route } from '@/routes'; 
import NavBarUserOptions from './nested-components/NavBarUserOptions';


export default function Header() { 
    const location = useLocation();
    const [navToggle, setNavToggle] = useState(true); 
    
    return (
        <header className="d-flex flex-column container-fluid z-3">
            <section className="socials pt-2 pe-4">
                <ul className="list-unstyled d-flex justify-content-end gap-3"> 
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok text-dark"
                                viewBox="0 0 16 16">
                                <path
                                    d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram text-dark"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook text-dark"
                                viewBox="0 0 16 16">
                                <path
                                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x text-dark"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>
                    </li> 
                </ul>
            </section> 

            <section className="main-header d-flex justify-content-between align-items-center bg-dark bg-gradient px-4">
                <h1 className="fs-4 fw-bold text-white mt-1">DeezysDeals</h1> 

                <nav className={`main-nav ${navToggle && `d-none`} d-md-flex`} id="nav"> 
                    <ul className="list-unstyled gap-3 cursor-pointer">
                        <li className="fw-bold">
                            <Link to={ route('index') } className="text-decoration-none">
                                Home
                            </Link>
                        </li>
                        <li className="fw-bold">
                            <Link to={ route('home.index') } className="text-decoration-none">
                                Dashboard
                            </Link>
                        </li>
                        <li className="fw-bold">
                            <Link to={ route('products.index') } className="text-decoration-none">
                                Products
                            </Link>
                        </li>
                        <li className="fw-bold">
                            <Link to={ route('categories.index') } className="text-decoration-none">
                                Categories
                            </Link>
                        </li>
                        <li className="fw-bold"> 
                            <Link to={ route('cart') } className="text-decoration-none d-flex align-items-center justify-content-end">
                                <span className="d-block d-md-none">
                                    Cart
                                </span>&nbsp;
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag-fill"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                                    </svg>
                                </span>
                            </Link>
                        </li>
                        <li className="fw-bold"> 
                            <Link to={ route('sign-in') } className="text-decoration-none d-flex align-items-center justify-content-end">
                                <span className="d-block d-md-none">
                                    Sign In/Out
                                </span>&nbsp; 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill-lock"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                                </svg>
                            </Link> 
                        </li> 

                        { (location.pathname == route('brands.show')) 
                            ? <NavBarUserOptions /> 
                            : (location.pathname == route('brands.index')) 
                                ? <NavBarUserOptions /> 
                                : (location.pathname == route('categories.show')) 
                                    ? <NavBarUserOptions /> 
                                    : (location.pathname == route('categories.index')) 
                                        ? <NavBarUserOptions /> 
                                        : (location.pathname == route('cart')) 
                                            ? <NavBarUserOptions /> 
                                            : (location.pathname == route('paid')) 
                                                ? <NavBarUserOptions /> 
                                                : (location.pathname == route('products.show')) 
                                                    ? <NavBarUserOptions /> 
                                                    : (location.pathname == route('products.index')) 
                                                        ? <NavBarUserOptions /> 
                                                        : (location.pathname == route('index')) 
                                                            ? <NavBarUserOptions /> 
                                            : ''
                        } 

                    </ul>
                </nav>

                <div 
                    type="button" 
                    className="mobile-nav cursor-pointer d-block d-md-none" 
                    id="mobile-nav" 
                    data-target="nav" 
                    onClick={ () => setNavToggle(!navToggle) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="mobile-nav-icon bi bi-list text-white"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
            </section> 

            <section className="end-header pt-3">
                <div className="search">
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
                        <input type="text" placeholder="Search ..." className="" />
                        <span className="search-icon">
                            <svg width="16"
                                height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                                    stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </section>
        </header> 
    )
}

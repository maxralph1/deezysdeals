import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx';
import { Link, useLocation } from 'react-router-dom'; 
import { route } from '@/routes'; 
import UserNoImage from '@/assets/images/user-icon.jpg'; 


export default function SideNav() { 
    const { user, signOut } = useContext(AuthContext); 
    const location = useLocation(); 
    const [sideNavToggle, setSideNavToggle] = useState(false); 

    // Greeting
    const date = new Date();
    const hour = date.getHours();

    return ( 
        <>
            <aside id="aside" className="aside dashboard-aside card border-radius-35 z-3" style={{ display: sideNavToggle && 'block' }}>
                <div className="py-3 px-4 d-flex flex-column gap-4">
                    <section id="aside-content" className="aside-content pt-3"> 
                        <div className="border-bottom d-flex flex-column">
                            <span>Good&nbsp;
                                { hour < 12 
                                    ? 'morning' 
                                        : hour < 16 
                                        ? 'afternoon' 
                                            : hour >= 16 
                                            ? 'evening' 
                                                : '' }
                            </span>
                            <p className="fs-5 fw-semibold d-flex align-items-center gap-1 flex-wrap">
                                <span>
                                    <img src={ user?.user?.user_image ? user?.user?.user_image : UserNoImage } className="object-fit-cover border border-2 border-dark" style={{ width: '40px', height: '40px', borderRadius: '50px' }} alt="" />
                                </span>
                                <span className="text-capitalize">
                                    { user?.user?.first_name + ' ' + user?.user?.last_name }
                                </span>
                            </p>
                        </div>
                        <div className="sidenav"> 
                            <ul className="list-unstyled d-flex flex-column gap-2 py-3">
                                <li>
                                    <Link to={ route('home.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname == route('home.index') && 'active'}`}>
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 18V15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                                                stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={ route('home.sales.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/sales') && 'active'}`}>
                                        <svg fill="#000000" width="25" height="25" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z" />
                                            <path
                                                d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z" />
                                            <path
                                                d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Sales</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.purchases.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/purchases') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-receipt"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27m.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0z" />
                                            <path
                                                d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Purchases</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.profit.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/profit') && 'active'}`}>
                                        <svg fill="#000000" height="25" width="25" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 359.967 359.967" xmlSpace="preserve">
                                            <path id="XMLID_106_"
                                                d="M269.967,136.038V89.996c0-22.002-15.426-41.832-43.436-55.836c-24.705-12.352-57.217-19.155-91.547-19.155
                                                                        c-34.334,0-66.847,6.803-91.551,19.155C15.425,48.164,0,67.994,0,89.996v59.992v59.99v59.992c0,22.003,15.425,41.832,43.434,55.837
                                                                        c24.704,12.352,57.217,19.154,91.551,19.154c26.155,0,51.089-3.902,72.629-11.302c14.236,7.224,30.327,11.302,47.354,11.302
                                                                        c57.897,0,105-47.103,105-105C359.967,187.157,320.784,143.339,269.967,136.038z M30,198.013c4.091,2.765,8.567,5.378,13.434,7.811
                                                                        c24.704,12.352,57.218,19.155,91.551,19.155c5.414,0,10.796-0.179,16.128-0.516c-0.751,5.059-1.146,10.234-1.146,15.499
                                                                        c0,4.899,0.345,9.72,0.998,14.442c-5.271,0.376-10.609,0.566-15.98,0.566C74.897,254.971,30,231.217,30,209.979V198.013z
                                                                            M160.833,193.483c-8.422,0.991-17.084,1.495-25.849,1.495C74.897,194.979,30,171.226,30,149.988v-11.966
                                                                        c4.091,2.765,8.567,5.378,13.434,7.81c24.704,12.353,57.218,19.155,91.551,19.155c18.472,0,36.403-1.986,52.89-5.73
                                                                        C176.64,168.613,167.387,180.264,160.833,193.483z M134.984,45.005c60.086,0,104.982,23.753,104.982,44.991
                                                                        c0,21.238-44.896,44.992-104.982,44.992C74.897,134.988,30,111.234,30,89.996C30,68.758,74.897,45.005,134.984,45.005z M30,269.971
                                                                        v-11.965c4.091,2.765,8.567,5.377,13.434,7.81c24.704,12.352,57.217,19.155,91.551,19.155c8.28,0,16.502-0.407,24.573-1.194
                                                                        c4.576,9.925,10.653,19.021,17.943,26.99c-13.367,2.737-27.84,4.195-42.517,4.195C74.897,314.962,30,291.208,30,269.971z
                                                                            M254.967,314.962c-41.355,0-75-33.645-75-75c0-41.238,33.457-74.802,74.652-74.991c0.117,0.003,0.23,0.018,0.348,0.018
                                                                        s0.23-0.015,0.348-0.018c41.195,0.189,74.652,33.753,74.652,74.991C329.967,281.317,296.322,314.962,254.967,314.962z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Profit</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.orders.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/orders') && 'active'}`}>
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                                                stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                                                stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                                                stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 8H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
                                                strokeLinejoin="round" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Orders</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.order-items.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/order-items') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-boxes"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Order Items</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.payments.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/payments') && 'active'}`}>
                                        <svg width="25" height="25" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink">
                                            <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="ic_fluent_payment_24_regular" fill="#212121" fillRule="nonzero">
                                                    <path
                                                        d="M19.2388849,5.0207074 C20.7014167,5.0207074 21.8972891,6.162412 21.9838661,7.60318507 L21.9888849,7.7707074 L21.9888849,16.275793 C21.9888849,17.7383249 20.8471803,18.9341973 19.4064072,19.0207742 L19.2388849,19.025793 L4.76104885,19.025793 C3.29851702,19.025793 2.10264457,17.8840884 2.01606765,16.4433154 L2.01104885,16.275793 L2.01104885,7.7707074 C2.01104885,6.30817556 3.15275345,5.11230312 4.59352652,5.02572619 L4.76104885,5.0207074 L19.2388849,5.0207074 Z M20.4880489,10.9947074 L3.51004885,10.9947074 L3.51104885,16.275793 C3.51104885,16.9230017 4.00292352,17.4553269 4.63324361,17.5193394 L4.76104885,17.525793 L19.2388849,17.525793 C19.8860935,17.525793 20.4184188,17.0339184 20.4824312,16.4035983 L20.4888849,16.275793 L20.4880489,10.9947074 Z M18.2529045,14.5 C18.6671181,14.5 19.0029045,14.8357864 19.0029045,15.25 C19.0029045,15.6296958 18.7207506,15.943491 18.3546751,15.9931534 L18.2529045,16 L15.7529045,16 C15.3386909,16 15.0029045,15.6642136 15.0029045,15.25 C15.0029045,14.8703042 15.2850584,14.556509 15.6511339,14.5068466 L15.7529045,14.5 L18.2529045,14.5 Z M19.2388849,6.5207074 L4.76104885,6.5207074 C4.11384016,6.5207074 3.58151495,7.01258206 3.51750246,7.64290216 L3.51104885,7.7707074 L3.51004885,9.4947074 L20.4880489,9.4947074 L20.4888849,7.7707074 C20.4888849,7.12349871 19.9970102,6.5911735 19.3666901,6.52716101 L19.2388849,6.5207074 Z"
                                                        id="🎨-Color">
                                    
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Payments</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.ratings.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/ratings') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-star"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Ratings</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.products.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/products') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-boxes"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Products</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.deals.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/deals') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-handbag"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Deals</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.deliveries.index') }
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/deliveries') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-truck"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Deliveries</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.social-media.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/social-media') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Social Media</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.clients.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/clients') && 'active'}`}>
                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="User / User_02">
                                                <path id="Vector"
                                                    d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                                                    stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Clients</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.admin.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/admin') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Admin</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.users.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/user-management') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">User Management</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.notifications.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/notifications') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bell"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6">
                                            </path>
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Notifications</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.profile.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/profile') && 'active'}`}>
                                        <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.474 19.013a8.941 8.941 0 0 0-4.115-4.89 6 6 0 1 0-8.717 0 8.941 8.941 0 0 0-4.115 4.89 11.065 11.065 0 0 0 1.63 1.59 6.965 6.965 0 0 1 4.728-5.275 1 1 0 0 0 .181-1.829 4 4 0 1 1 3.871 0 1 1 0 0 0 .181 1.829 6.965 6.965 0 0 1 4.726 5.272 11.059 11.059 0 0 0 1.63-1.587z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Profile</span>
                                    </Link>
                                </li> 
                                <li>
                                    <Link to={ route('home.site-updates.index') } 
                                        className={`text-decoration-none text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35 ${ location.pathname.startsWith('/home/site-updates') && 'active'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-globe-americas"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                                        </svg>
                                        <span className="fw-semibold fs-6 px-2">Site Updates</span>
                                    </Link>
                                </li>
                            </ul>
                        </div> 
                        <div className="border-top py-3 ps-1">
                            <span 
                                type='button' 
                                onClick={ signOut } 
                                className="text-dark sidenav-item p-2 ps-3 d-flex gap-1 align-items-center border-radius-35">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-power text-danger"
                                    viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1z"></path>
                                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"></path>
                                </svg>
                                <span className="fw-semibold fs-6 px-2 text-danger">Sign Out</span>
                            </span>
                        </div>
                    </section> 
                </div> 
            </aside> 

            <div 
                type="button"
                id="dashboard-bottom-mobile-nav"
                className="dashboard-bottom-mobile-nav cursor-pointer position-fixed bottom-0 btn btn-dark p-2 mb-3 rounded-circle z-3" 
                onClick={ () => setSideNavToggle(!sideNavToggle) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        className="mobile-nav-icon bi bi-list text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
            </div> 
        </>
    )
}

import { useContext, useState } from 'react';
import AuthContext from '@/context/AuthContext.jsx';
import { Link } from 'react-router-dom';
import { route } from '@/routes';
import Constants from '@/utils/Constants.jsx';
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function SideBar() { 
    const { user, signOut } = useContext(AuthContext);

    return (
        <>
            <nav className="sidebar d-none d-md-flex col-md-3 col-lg-2 position-relative">
                <section className="bg-body-tertiary ms-2 me-0 my-2 px-3 py-5 rounded position-fixed top-0 h-97 overflow-y-auto">
                    <header>
                        {/* <img src="../assets/images/deezysdeals.png" alt="DeezysDeals"  width="100" /> */}
                        <h1 className="fs-4 fw-bold">Deezysdeals</h1>
                    </header>
                    <section className="pt-3">
                        <ul className="nav flex-column gap-1">
                            <li className="nav-item p-2 d-flex align-items-center concave border-radius-35">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 18V15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <Link to={ route('home.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Home</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center">
                                <svg fill="#000000" width="20" height="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M136.948 908.811c5.657 0 10.24-4.583 10.24-10.24V610.755c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v287.816c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V610.755c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v287.816c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.96c5.657 0 10.24-4.583 10.24-10.24V551.322c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v347.249c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V551.322c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v347.249c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.342c5.657 0 10.24-4.583 10.24-10.24V492.497c0-5.651-4.588-10.24-10.24-10.24h-81.92c-5.652 0-10.24 4.589-10.24 10.24v406.692c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V492.497c0-28.271 22.924-51.2 51.2-51.2h81.92c28.276 0 51.2 22.929 51.2 51.2v406.692c0 28.278-22.922 51.2-51.2 51.2zm278.414-40.958c5.657 0 10.24-4.583 10.24-10.24V441.299c0-5.657-4.583-10.24-10.24-10.24h-81.92a10.238 10.238 0 00-10.24 10.24v457.892c0 5.657 4.583 10.24 10.24 10.24h81.92zm0 40.96h-81.92c-28.278 0-51.2-22.922-51.2-51.2V441.299c0-28.278 22.922-51.2 51.2-51.2h81.92c28.278 0 51.2 22.922 51.2 51.2v457.892c0 28.278-22.922 51.2-51.2 51.2zm-6.205-841.902C677.379 271.088 355.268 367.011 19.245 387.336c-11.29.683-19.889 10.389-19.206 21.679s10.389 19.889 21.679 19.206c342.256-20.702 670.39-118.419 964.372-284.046 9.854-5.552 13.342-18.041 7.79-27.896s-18.041-13.342-27.896-7.79z"/><path d="M901.21 112.64l102.39.154c11.311.017 20.494-9.138 20.511-20.449s-9.138-20.494-20.449-20.511l-102.39-.154c-11.311-.017-20.494 9.138-20.511 20.449s9.138 20.494 20.449 20.511z"/><path d="M983.151 92.251l-.307 101.827c-.034 11.311 9.107 20.508 20.418 20.542s20.508-9.107 20.542-20.418l.307-101.827c.034-11.311-9.107-20.508-20.418-20.542s-20.508 9.107-20.542 20.418z"/></svg>
                                <Link to={ route('home.payments.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Sales</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center">
                                <svg fill="#000000" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 359.967 359.967" xmlSpace="preserve">
                                <path id="XMLID_106_" d="M269.967,136.038V89.996c0-22.002-15.426-41.832-43.436-55.836c-24.705-12.352-57.217-19.155-91.547-19.155
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
                                    s0.23-0.015,0.348-0.018c41.195,0.189,74.652,33.753,74.652,74.991C329.967,281.317,296.322,314.962,254.967,314.962z"/>
                                </svg>
                                <Link to={ route('home.profits.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Profit</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 8H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <Link to={ route('home.orders.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Orders</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>ic_fluent_payment_24_regular</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="ic_fluent_payment_24_regular" fill="#212121" fillRule="nonzero">
                                            <path d="M19.2388849,5.0207074 C20.7014167,5.0207074 21.8972891,6.162412 21.9838661,7.60318507 L21.9888849,7.7707074 L21.9888849,16.275793 C21.9888849,17.7383249 20.8471803,18.9341973 19.4064072,19.0207742 L19.2388849,19.025793 L4.76104885,19.025793 C3.29851702,19.025793 2.10264457,17.8840884 2.01606765,16.4433154 L2.01104885,16.275793 L2.01104885,7.7707074 C2.01104885,6.30817556 3.15275345,5.11230312 4.59352652,5.02572619 L4.76104885,5.0207074 L19.2388849,5.0207074 Z M20.4880489,10.9947074 L3.51004885,10.9947074 L3.51104885,16.275793 C3.51104885,16.9230017 4.00292352,17.4553269 4.63324361,17.5193394 L4.76104885,17.525793 L19.2388849,17.525793 C19.8860935,17.525793 20.4184188,17.0339184 20.4824312,16.4035983 L20.4888849,16.275793 L20.4880489,10.9947074 Z M18.2529045,14.5 C18.6671181,14.5 19.0029045,14.8357864 19.0029045,15.25 C19.0029045,15.6296958 18.7207506,15.943491 18.3546751,15.9931534 L18.2529045,16 L15.7529045,16 C15.3386909,16 15.0029045,15.6642136 15.0029045,15.25 C15.0029045,14.8703042 15.2850584,14.556509 15.6511339,14.5068466 L15.7529045,14.5 L18.2529045,14.5 Z M19.2388849,6.5207074 L4.76104885,6.5207074 C4.11384016,6.5207074 3.58151495,7.01258206 3.51750246,7.64290216 L3.51104885,7.7707074 L3.51004885,9.4947074 L20.4880489,9.4947074 L20.4888849,7.7707074 C20.4888849,7.12349871 19.9970102,6.5911735 19.3666901,6.52716101 L19.2388849,6.5207074 Z" id="🎨-Color">

                                </path>
                                        </g>
                                    </g>
                                </svg>
                                <Link to={ route('home.payments.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Payments</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center"> 
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="User / User_02">
                                    <path id="Vector" d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                                <Link to={ route('home.clients.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Clients</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center"> 
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="style=linear">
                                        <g id="notification-bell">
                                        <path id="vector" d="M14.8728 19.4434C14.8728 19.7467 14.7952 20.0471 14.6445 20.3274C14.4937 20.6077 14.2728 20.8623 13.9943 21.0769C13.7157 21.2914 13.385 21.4615 13.0211 21.5776C12.6572 21.6937 12.2671 21.7535 11.8732 21.7535C11.4793 21.7535 11.0893 21.6937 10.7253 21.5776C10.3614 21.4615 10.0307 21.2914 9.75221 21.0769C9.47368 20.8623 9.25273 20.6077 9.10199 20.3274C8.95124 20.0471 8.87366 19.7467 8.87366 19.4434" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"/>
                                        <path id="vector_2" d="M19.6147 13.1897L19.8793 13.7605C20.8888 15.9374 19.5741 18.4819 17.2145 18.918L17.0543 18.9476C13.6293 19.5807 10.1172 19.5807 6.69218 18.9476C4.31327 18.5079 3.05472 15.876 4.20588 13.7483L4.43229 13.3298C5.05046 12.1872 5.37418 10.9085 5.37418 9.60942L5.37418 8.28813C5.37418 6.06434 6.63282 4.03213 8.62372 3.04138C10.678 2.0191 13.0852 1.98433 15.1681 2.94684L15.3728 3.04138C17.5063 4.02726 18.8723 6.16325 18.8723 8.51353L18.8723 9.82416C18.8723 10.9866 19.1256 12.1351 19.6147 13.1897Z" stroke="#000000" strokeWidth="1.5"/>
                                        </g>
                                    </g>
                                </svg>
                                <Link to={ route('home.notifications.index') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Notifications</Link>
                            </li>
                            <li className="nav-item p-2 d-flex align-items-center"> 
                                <svg fill="#000000" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.474 19.013a8.941 8.941 0 0 0-4.115-4.89 6 6 0 1 0-8.717 0 8.941 8.941 0 0 0-4.115 4.89 11.065 11.065 0 0 0 1.63 1.59 6.965 6.965 0 0 1 4.728-5.275 1 1 0 0 0 .181-1.829 4 4 0 1 1 3.871 0 1 1 0 0 0 .181 1.829 6.965 6.965 0 0 1 4.726 5.272 11.059 11.059 0 0 0 1.63-1.587z"/>
                                </svg>
                                <Link to={ route('home.profile') } className="text-decoration-none text-dark fw-semibold fs-6 px-2">Profile</Link>
                            </li> 

                            <hr />

                            <li 
                                type='button' 
                                onClick={ signOut }
                                className="nav-item p-2 d-flex align-items-center cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-closed-fill text-danger" viewBox="0 0 16 16">
                                    <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                </svg> 
                                <span className="text-decoration-none text-danger fw-semibold fs-6 px-2 border-none outline-none">Sign Out</span>
                            </li>
                        </ul>
                    </section> 
                    <footer className="px-2 py-4">
                        <div className="d-flex align-items-center gap-2">
                            <img src={ UserImage } alt="" width="40" height="40" className="object-fit-cover rounded-circle border border-2 border-secondary flat" />
                            <span className="d-flex flex-column">
                                <span className="fw-semibold"><small>{ user?.user?.first_name + ' ' + user?.user?.last_name }</small></span>
                                <span><small><small>@{ user?.user?.username }</small></small></span>
                            </span>
                        </div>
                    </footer>
                </section>
            </nav> 



            {/* Mobile Nav */}
            <nav className="w-100 d-flex justify-content-between align-items-center d-md-none position-fixed bottom-0 left-0 z-1 py-4 px-4">
                <span className="p-3 convex rounded-circle">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="concave">
                        <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 8H21" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className="p-3 convex rounded-circle">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="concave">
                        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className="p-3 convex rounded-circle">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="concave">
                        <path d="M12 18V15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className="p-3 convex rounded-circle">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="concave">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2C3.62481 2 5.06733 3.03971 5.58114 4.58114L5.72076 5L18.03 5C18.6859 4.99998 19.2437 4.99996 19.6951 5.04029C20.165 5.08226 20.6347 5.17512 21.064 5.43584C21.6667 5.80183 22.1211 6.36838 22.3477 7.03605C22.5091 7.51168 22.4978 7.99036 22.4369 8.45816C22.3783 8.90755 22.2573 9.45209 22.115 10.0924L21.8088 11.4704C21.664 12.1218 21.5435 12.6641 21.4106 13.1043C21.2716 13.5649 21.1006 13.9803 20.8231 14.36C20.4058 14.931 19.8446 15.3812 19.1967 15.6646C18.7658 15.8532 18.3232 15.93 17.8434 15.9658C17.3849 16 16.8295 16 16.1621 16H10.8379C10.1705 16 9.61512 16 9.15656 15.9658C8.67678 15.93 8.23421 15.8532 7.80328 15.6646C7.15536 15.3812 6.59418 14.931 6.17692 14.36C5.89941 13.9803 5.72844 13.5649 5.58939 13.1043C5.45649 12.6641 5.33602 12.1219 5.19125 11.4704L4.035 6.26729L3.68377 5.21359C3.44219 4.48885 2.76395 4 2 4C1.44772 4 1 3.55228 1 3ZM6.24662 7L7.13569 11.0008C7.29042 11.6971 7.39528 12.166 7.50404 12.5263C7.60908 12.8742 7.69899 13.0531 7.79172 13.18C8.00035 13.4655 8.28094 13.6906 8.6049 13.8323C8.74888 13.8953 8.94301 13.9443 9.30546 13.9713C9.68076 13.9994 10.1612 14 10.8745 14H16.1255C16.8388 14 17.3192 13.9994 17.6945 13.9713C18.057 13.9443 18.2511 13.8953 18.3951 13.8323C18.7191 13.6906 18.9997 13.4655 19.2083 13.18C19.301 13.0531 19.3909 12.8742 19.496 12.5263C19.6047 12.166 19.7096 11.6971 19.8643 11.0008L20.153 9.70159C20.3075 9.00651 20.408 8.54985 20.4536 8.19974C20.4982 7.858 20.4722 7.73312 20.4537 7.67868C20.3782 7.45613 20.2267 7.26728 20.0259 7.14528C19.9767 7.11544 19.8605 7.06302 19.5172 7.03235C19.1655 7.00094 18.6979 7 17.9859 7H6.24662Z" fill="#0F1729"/>
                        <path d="M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" fill="#0F1729"/>
                        <path d="M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z" fill="#0F1729"/>
                    </svg>
                </span> 
                <span className="convex rounded-circle border border-2 border-secondary">
                    <img src={ UserImage } alt="Bookmarks" width="40" height="40" className="object-fit-cover rounded-circle concave" />
                </span>
            </nav>
            {/* end Mobile Nav */}
        </>
    )
}

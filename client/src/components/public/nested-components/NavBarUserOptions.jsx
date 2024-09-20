import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import UserNoImage from '@/assets/images/user-icon.jpg'; 


export default function NavBarUserOptions() { 
    const { user, signOut } = useContext(AuthContext); 
    const [userOptionsToggle, setUserOptionsToggle] = useState(false); 

    return (
        <li className="d-none d-md-inline">
            <span className="position-relative">
                <span 
                    id="user-icon" 
                    className="user" 
                    onClick={ () => setUserOptionsToggle(!userOptionsToggle) }>
                    <img src={ user?.user?.user_image ? user?.user?.user_image : UserNoImage }
                        alt="" className="object-fit-cover border border-2"
                        style={{ height: '25px', width: '25px', borderRadius: '50px' }} />
                </span>
    
                <div id="user-options"
                    className="user-options position-absolute bg-white px-3 py-4 border border-1 border-radius-35 text-nowrap hidden box-shadow-1 fw-semibold"
                    style={{ top: '40px', right: '0', display: userOptionsToggle && 'block' }}>
                    <ul className="list-unstyled d-flex flex-column gap-3">
                        <li className="text-dark">
                            <Link to={ route('home.index') } className="text-decoration-none text-dark d-flex justify-content-end gap-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 18V15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                                        stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        <li className="text-dark d-flex justify-content-end gap-1">
                            <Link to={ route('home.settings.index') } className="text-decoration-none text-dark d-flex justify-content-end gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-gear-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                </svg>
                                <span>
                                    Settings
                                </span>
                            </Link>
                        </li>
                        <li 
                            type="button" 
                            onClick={ signOut }
                            className="text-danger d-flex justify-content-end gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-power" viewBox="0 0 16 16">
                                <path d="M7.5 1v7h1V1z" />
                                <path
                                    d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                            </svg>
                            <span>
                                Sign Out
                            </span>
                        </li>
                    </ul>
                </div>
            </span>
        </li>
    )
}

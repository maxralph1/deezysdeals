import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/auth/Layout.jsx';  


export default function PasswordlessSignInRequest() {
    const [username, setUsername] = useState(''); 

    let { passwordlessSignInRequest } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        passwordlessSignInRequest(username); 
    }

    return (
        <Layout>
            <h2 className="fw-bold fs-6 d-flex justify-content-end mb-3">Passwordless SignIn</h2>
            <form onSubmit={ handleSubmit } id="auth-form" className="auth-form" >
                <div className="">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="" className="label" id="username-label">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            onChange={ e => setUsername(e.target.value) }
                            placeholder="e.g. daezi1" 
                            data-target="username-label" />
                    </div>
                </div>

                <div className="pt-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-dark px-4 border-radius-35">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </form>

            <section className="auth-options px-5 pt-3 gap-3 d-flex flex-column align-items-center gap-3">
                <span className=""><Link to={ route('sign-up') } className="text-dark fw-bold">Sign Up</Link>&nbsp;if you do not already have an account</span> 
                <span className="">Forgot your password?<Link to={ route('password-reset-request') } className="text-dark fw-bold">&nbsp;Reset Password</Link></span> 
            </section>
        </Layout>
    )
}

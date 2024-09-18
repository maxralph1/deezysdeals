import { useContext, useState } from 'react'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import swal from 'sweetalert2'; 
import Layout from '@/components/auth/Layout.jsx'; 


export default function SignUpAsEnterprise() { 
    const [username, setUsername] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordRepeat, setPasswordRepeat] = useState(''); 
    const [enterpriseName, setEnterpriseName] = useState(''); 
    
    let { signUp } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        if (password != passwordRepeat) {
            swal.fire({
                text: 'Passwords do not match', 
                color: "#900000",
                width: 300,
                position: 'top',
                showConfirmButton: false,
            });
        } else if (password == passwordRepeat) { 
            let account_type; 
            
            signUp(username, email, firstName, lastName, password, account_type = 'enterprise', enterpriseName)
        }
    }

    return (
        <Layout>
            <h2 className="fw-bold fs-6 d-flex justify-content-end mb-3">Sign Up</h2>
            <form onSubmit={ handleSubmit } id="auth-form" className="auth-form" >
                <div className="">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="" className="label">Email:</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            onChange={ e => setEmail(e.target.value) }
                            placeholder="e.g. pae@daezi.com" 
                            data-target="email" 
                            required />
                    </div>
                </div>
                <div className="">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="username" className="label">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            onChange={ e => setUsername(e.target.value) }
                            placeholder="e.g. daezi1" 
                            data-target="username" 
                            required />
                    </div>
                </div> 
                <div className="grid">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="first_name" className="label">First Name:</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            onChange={ e => setFirstName(e.target.value) }
                            placeholder="e.g. Pae" 
                            data-target="first_name" 
                            required />
                    </div>
                    <div className="form border border-dark mb-3">
                        <label htmlFor="last_name" className="label">Last Name:</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            onChange={ e => setLastName(e.target.value) }
                            placeholder="e.g. Daezi"
                            data-target="last_name" 
                            required />
                    </div>
                </div> 
                <div className="">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="enterpriseName" className="label">Enterprise Name:</label>
                        <input 
                            type="text" 
                            name="enterpriseName" 
                            id="enterpriseName" 
                            onChange={ e => setEnterpriseName(e.target.value) }
                            placeholder="e.g. Daezi GmbH" 
                            data-target="enterpriseName" 
                            required />
                    </div>
                </div> 
                <div className="grid">
                    <div className="form border border-dark mb-3">
                        <label htmlFor="password" className="label">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={ e => setPassword(e.target.value) }
                            placeholder="*********" 
                            data-target="password" 
                            required />
                    </div>
                    <div className="form border border-dark mb-3">
                        <label htmlFor="" className="label" id="repeat_password_label">Repeat Password:</label>
                        <input 
                            type="password" 
                            name="repeat_password" 
                            id="repeat_password" 
                            onChange={ e => setPasswordRepeat(e.target.value) }
                            placeholder="*********" 
                            data-target="repeat_password_label" 
                            required />
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
                <span className=""><Link to={ route('sign-up')} className="text-dark fw-bold">Sign up as individual instead</Link></span> 
                <span className=""><Link to={ route('sign-in')} className="text-dark fw-bold">Sign in</Link>&nbsp;if you already have an account</span> 
                <span className="">Forgot your password?<Link to={ route('password-reset-request') } className="text-dark fw-bold">&nbsp;Reset Password</Link></span> 
            </section>
        </Layout>
    )
}

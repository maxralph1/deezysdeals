import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/auth/Layout.jsx'; 


export default function SignUp() {
  return (
    <Layout>
      <h2 className="fw-bold fs-6 d-flex justify-content-end mb-3">Sign Up</h2>
        <form action="" id="auth-form" className="auth-form" >
            <div className="">
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="email">Email:</label>
                    <input type="email" placeholder="e.g. pae@daezi.com" data-target="email" />
                </div>
            </div>
            <div className="">
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="username">Username:</label>
                    <input type="text" placeholder="e.g. daezi1" data-target="username" />
                </div>
            </div>
            <div className="grid">
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="first_name">First Name:</label>
                    <input type="text" placeholder="e.g. Pae" data-target="first_name" />
                </div>
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="last_name">Last Name:</label>
                    <input type="text" placeholder="e.g. Daezi" data-target="last_name" />
                </div>
            </div> 
            <div className="grid">
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="password">Password:</label>
                    <input type="password" placeholder="*********" data-target="password" />
                </div>
                <div className="form border border-dark mb-3">
                    <label htmlFor="" className="label" id="repeat_password">Repeat Password:</label>
                    <input type="password" placeholder="*********" data-target="repeat_password" />
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
            <span className=""><Link to={ route('sign-in')} className="text-dark fw-bold">Sign in</Link>&nbsp;if you already have an account</span> 
            <span className="">Forgot your password?<Link to={ route('password-reset-request') } className="text-dark fw-bold">&nbsp;Reset Password</Link></span> 
        </section>
    </Layout>
  )
}

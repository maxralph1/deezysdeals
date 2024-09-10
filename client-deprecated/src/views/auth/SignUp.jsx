import { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { route } from '@/routes'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import Layout from '../../components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function SignUp() {
    const [btnActive, setBtnActive] = useState(false); 
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState(''); 
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [enterpriseName, setEnterpriseName] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [password2, setPassword2] = useState(''); 

    let { signUp } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        if (password != password2) {
            swal.fire({ 
                text: 'Given passwords do not match', 
                color: "#900000",
                width: 300,
                position: 'top',
                showConfirmButton: false,
            });
        }; 

        const account_type = e.target.account_type.value;

        signUp(username, email, firstName, lastName, enterpriseName, password, account_type); 
    }; 

    return (
        <Layout>
            <form onSubmit={ handleSubmit }>
                <div className="row align-items-center pt-4">
                    <section className="d-none d-md-block col-md-6 col-lg-6">
                        <img src={ UserImage } alt="" className="w-100 border-radius-35" />
                    </section> 

                    <section className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center px-5"> 
                        <div className="input-container border border-dark" style={{ maxWidth: '375px' }}>
                            <select 
                                name="account_type" 
                                id="account_type" 
                                aria-label="Account type" 
                                className="w-100 border-radius-35">
                                {/* <option selected>Open this select menu</option>
                                <option value="1">One</option> */}
                                    <option value='individual'>Individual</option>
                                    <option value='enterprise'>Enterprise</option>
                            </select>
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="username"
                                id="username" 
                                type="text" 
                                placeholder="Username" 
                                onChange={e => setUsername(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="email"
                                id="email" 
                                type="email" 
                                placeholder="Email" 
                                onChange={e => setEmail(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="firstname"
                                id="firstname" 
                                type="text" 
                                placeholder="First Name" 
                                onChange={e => setFirstName(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="lastname"
                                id="lastname" 
                                type="text" 
                                placeholder="Last Name" 
                                onChange={e => setLastName(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="enterprise_name"
                                id="enterprise_name" 
                                type="text" 
                                placeholder="Enterprise Name" 
                                onChange={e => setEnterpriseName(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="password"
                                id="password" 
                                type="password" 
                                placeholder="Password" 
                                onChange={e => setPassword(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="password2"
                                id="password2" 
                                type="password" 
                                placeholder="Repeat Password" 
                                onChange={e => setPassword2(e.target.value)} 
                                required />
                        </div> 

                        <div className="pt-4">
                            <button type="submit" className={ `px-5 fw-semibold btn ` + (btnActive && "active") } onClick={() => setBtnActive(true) }>Sign Up</button> 
                            {/* onClick={() => setBtnActive(prevState => !prevState)} */}
                        </div>
                    </section>
                </div>
            </form>
        </Layout>
    )
}

import { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import { route } from '@/routes'; 
import AuthContext from '@/context/AuthContext.jsx'; 
import Layout from '../../components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function SignIn() { 
    const [btnActive, setBtnActive] = useState(false); 
    const [emailUsername, setEmailUsername] = useState(''); 
    const [password, setPassword] = useState(''); 

    let { signIn } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        signIn(emailUsername, password); 
    }; 

    return (
        <Layout>
            <form onSubmit={ handleSubmit }>
                <div className="row align-items-center pt-4">
                    <section className="d-none d-md-block col-md-6 col-lg-6">
                        <img src={ UserImage } alt="" className="w-100 border-radius-35" />
                    </section> 

                    <section className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center px-5">
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="email_username"
                                id="email_username" 
                                type="text" 
                                placeholder="Username / Email" 
                                onChange={e => setEmailUsername(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark" style={{ maxWidth: '375px' }}>
                            <input 
                                name="password" 
                                id="password" 
                                type="password" 
                                placeholder="Password" 
                                onChange={e => setPassword(e.target.value)} 
                                required />
                        </div> 

                        <div className="pt-4">
                            <button type="submit" className={ `px-5 fw-semibold btn ` + (btnActive && "active") } onClick={() => setBtnActive(true) }>Sign In</button> 
                            {/* onClick={() => setBtnActive(prevState => !prevState)} */}
                        </div>
                    </section>
                </div>
            </form>
        </Layout>
    )
}

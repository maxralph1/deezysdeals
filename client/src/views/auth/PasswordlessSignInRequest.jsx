import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { route } from '@/routes'; 
import AuthContext from '@/context/AuthContext.jsx';
import Layout from '@/components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function PasswordlessSignInRequest() { 
    const [btnActive, setBtnActive] = useState(false); 
    const [username, setUsername] = useState(''); 

    let { passwordlessSignInRequest } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        passwordlessSignInRequest(username); 
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
                                name="username"
                                id="username" 
                                type="text" 
                                placeholder="Username" 
                                onChange={ e => setUsername(e.target.value) } 
                                required />
                        </div> 

                        <div className="pt-4">
                            <button type="submit" className={ `px-5 fw-semibold btn ` + (btnActive && "active") } onClick={() => setBtnActive(true) }>Get Sign In Link</button> 
                            {/* onClick={() => setBtnActive(prevState => !prevState)} */}
                        </div>
                    </section>
                </div>
            </form>
        </Layout>
    )
}

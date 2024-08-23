import { useContext, useState } from 'react'; 
import swal from 'sweetalert2'; 
import { Link, useParams } from 'react-router-dom';
import { route } from '@/routes'; 
import AuthContext from '@/context/AuthContext.jsx';
import Layout from '@/components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function PasswordReset() { 
    const [btnActive, setBtnActive] = useState(false); 
    const [password, setPassword] = useState(''); 
    const [password2, setPassword2] = useState(''); 

    const params = useParams(); 
    const { username, token } = params; 

    let { resetPassword } = useContext(AuthContext); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        if (password != password2) {
            swal.fire({
            text: 'Both passwords do not match', 
            color: "#820303",
            width: 300,
            position: 'top',
            showConfirmButton: false,
            });
        } else if (password == password2) {
            // resetPassword(params?.username, params?.token, password); 
            resetPassword(username, token, password); 
        }; 
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
                                name="password" 
                                id="password" 
                                type="password" 
                                placeholder="New Password" 
                                onChange={e => setPassword(e.target.value)} 
                                required />
                        </div> 
                        <div className="input-container border border-dark mb-3" style={{ maxWidth: '375px' }}>
                            <input 
                                name="password2" 
                                id="password" 
                                type="password" 
                                placeholder="Repeat Password" 
                                onChange={e => setPassword2(e.target.value)} 
                                required />
                        </div> 

                        <div className="pt-4">
                            <button type="submit" className={ `px-5 fw-semibold btn ` + (btnActive && "active") } onClick={() => setBtnActive(true) }>Reset Password</button> 
                            {/* onClick={() => setBtnActive(prevState => !prevState)} */}
                        </div>
                    </section>
                </div>
            </form>
        </Layout>
    )
}

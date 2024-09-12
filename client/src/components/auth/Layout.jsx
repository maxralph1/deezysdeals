import { useLocation } from 'react-router-dom'; 
import { route } from '@/routes';
import Header from '@/components/public/Header.jsx'; 
import Footer from '@/components/public/Footer.jsx'; 


export default function Layout({ children }) {
    return (
        <>
            <Header /> 

            <main className="auth-main py-5 row align-items-center">

                <section className="d-none d-md-block col-md-7" style={{ marginLeft: '-40px', background: 'url(https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',  backgroundSize: 'cover', borderRadius: '0 35px 35px 0', height: '65vh' }}>
                    <div id="carouselExampleSlidesOnly" className="p-5 carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner py-5" style={{ textShadow: '2px 2px white, -2px -2px white' }}>
                            <div className="text py-4 carousel-item active">
                                <h2 className="fw-bold fs-1">Shopping Redefined!</h2>
                                <p className="fw-semibold fs-2">Shop on all your favorites.</p>
                            </div>
                            <div className="text py-4 carousel-item">
                                <h2 className="fw-bold fs-1">Get Discounts!</h2>
                                <p className="fw-semibold fs-2">Get disount on all purchases.</p>
                            </div>
                        </div>
                    </div>
                </section> 

                <section className="auth-form-section col-sm-12 col-md-5 py-2">

                    { children }

                </section>

            </main>

            <Footer />
        </>
    )
}

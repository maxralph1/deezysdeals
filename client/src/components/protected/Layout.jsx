// import { useLocation } from 'react-router-dom'; 
// import { route } from '@/routes';
import Header from '@/components/protected/Header.jsx'; 
import SideNav from '@/components/protected/SideNav.jsx'; 
import Footer from '@/components/protected/Footer.jsx'; 



export default function Layout({ children }) { 
    // const location = useLocation(); 

    return (
        <>
            <Header /> 
            
            <main className="px-3 pt-4">
                <section className="grid dashboard-grid grid-order-reverse pt-3 px-3">

                    <SideNav /> 

                    { children }

                </section> 
            </main>

            <Footer />
        </>
    )
}

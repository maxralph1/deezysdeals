import { Link, useLocation } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Header from '@/components/public/Header.jsx';
// import SideBar from '@/components/public/SideBar.jsx';
import Footer from '@/components/public/Footer.jsx'; 
import '@/assets/css/public.css'

export default function Layout({ children }) { 
    const location = useLocation(); 

    return (
        <> 

            <Header />

            <main>

                { children }

            </main> 

            <Footer />

        </>
    )
}

import { Link, useLocation } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Header from '@/components/public/Header.jsx';
// import SideBar from '@/components/public/SideBar.jsx';
import Footer from '@/components/public/Footer.jsx'; 
import NavBar from '@/components/public/NavBar'; 

export default function Layout({ children }) { 
    const location = useLocation(); 

    return (
        <> 

            <Header />
            
            <NavBar /> 

            <main className="pt-3">
                
                { children }

            </main> 

            <Footer />
            
        </>
    )
}

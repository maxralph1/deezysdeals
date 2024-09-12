import { useLocation } from 'react-router-dom'; 
import { route } from '@/routes';
import Header from '@/components/public/Header.jsx'; 
import Footer from '@/components/public/Footer.jsx'; 
// import '../../assets/js/script.js'; 
import Suggestions from './Suggestions.jsx';
import Testimonials from './Testimonials.jsx';
import Hero from './nested-components/Hero.jsx';


export default function Layout({ children }) { 
    const location = useLocation();

    return (
        <>
            <Header />

            <main className="px-3 pt-4"> 

                { location.pathname == route('index') && 

                    <Hero /> 
                    
                }

                { children } 

                <Suggestions /> 

                <Testimonials />

            </main> 

            <Footer />
        </>
    )
}

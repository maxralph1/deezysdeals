import Layout from '../../components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 

export default function Index() {
    return ( 
        <Layout>
            <section className="hero w-100">
                <div className="h-50">
                    <img src={ UserImage } alt="" style={{ height: '425px' }} className="w-100 object-fit-cover border-radius-35" />
                </div>
            </section>
        </Layout>
    )
}

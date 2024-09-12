import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Aside from '@/components/public/Aside.jsx'; 
import Layout from '@/components/public/Layout.jsx'; 
import PaginationLinks from '@/components/public/nested-components/PaginationLinks.jsx'; 


export default function Brands() {
    return (
        <Layout>
            <section className="grid grid-order-reverse pt-3 px-3"> 

                <Aside />

                <div className="main"> 
                    <section className="products pt-5 d-flex flex-wrap gap-4">
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.png" style={{ width: '100px', height: '100px' }}
                                        alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Nestle
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pngplay.com/wp-content/uploads/3/Apple-Logo-Transparent-Images.png"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Apple
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://logos-world.net/wp-content/uploads/2022/11/PG-Logo.png" style={{ width: '100px', height: '100px' }}
                                        alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    P&G
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2015/12/nike-logo-wallpaper-hd-white.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Nike
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://turbologo.com/articles/wp-content/uploads/2019/10/chanel-logo-illustration.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Chanel
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.wallpaperflare.com/static/975/1009/308/windows-8-windows-10-blue-logo-wallpaper.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Windows
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Gucci-logo-wallpapers-HD-pictures-images.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Gucci
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://vectorified.com/image/versace-logo-vector-11.jpg" style={{ width: '100px', height: '100px' }} alt=""
                                        className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Versace
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://i.pinimg.com/originals/57/58/22/575822c5381ea91c21bfd2c69b359e24.png"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Adidas
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://static.vecteezy.com/system/resources/previews/023/867/293/original/reebok-logo-brand-clothes-with-name-white-symbol-design-icon-abstract-illustration-with-black-background-free-vector.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Reebok
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo.png" style={{ width: '100px', height: '100px' }}
                                        alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Nestle
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pngplay.com/wp-content/uploads/3/Apple-Logo-Transparent-Images.png"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Apple
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://logos-world.net/wp-content/uploads/2022/11/PG-Logo.png" style={{ width: '100px', height: '100px' }}
                                        alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    P&G
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2015/12/nike-logo-wallpaper-hd-white.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Nike
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://turbologo.com/articles/wp-content/uploads/2019/10/chanel-logo-illustration.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Chanel
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.wallpaperflare.com/static/975/1009/308/windows-8-windows-10-blue-logo-wallpaper.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Windows
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Gucci-logo-wallpapers-HD-pictures-images.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Gucci
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://vectorified.com/image/versace-logo-vector-11.jpg" style={{ width: '100px', height: '100px' }} alt=""
                                        className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Versace
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://i.pinimg.com/originals/57/58/22/575822c5381ea91c21bfd2c69b359e24.png"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Adidas
                                </span>
                            </Link>
                        </article>
                        <article className="">
                            <Link to={ route('brands.show', { id: '' }) } className="text-dark text-decoration-none d-flex flex-column align-items-center gap-2">
                                <span>
                                    <img src="https://static.vecteezy.com/system/resources/previews/023/867/293/original/reebok-logo-brand-clothes-with-name-white-symbol-design-icon-abstract-illustration-with-black-background-free-vector.jpg"
                                        style={{ width: '100px', height: '100px' }} alt="" className="object-fit-cover border-radius-35" />
                                </span>
                                <span className="fw-bold">
                                    Reebok
                                </span>
                            </Link>
                        </article>
                    </section>

                    <PaginationLinks /> 
                
                </div> 

            </section> 
        </Layout>
    )
}

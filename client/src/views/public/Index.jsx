import Layout from '../../components/public/Layout.jsx'; 
import UserImage from '@/assets/images/IMG_3264.png'; 
import { useProductDetails1 } from '@/hooks/external/useProductDetails1.jsx'

export default function Index() { 
    const { productDetails, getProductDetails } = useProductDetails1();
    console.log(productDetails); 

    return ( 
        <Layout>
            <section className="hero">
                <div className="intro">
                    <div className="brief-categories">
                        <ul className="list-unstyled">
                            <li>Health</li>
                            <li>Electronics</li>
                            <li>Fashion</li>
                            <li>Automobile</li> 
                            <li className="d-flex align-items-center gap-1 btn btn-sm btn-outline-dark border-radius-35 mt-4">
                                <span className="text-nowrap fw-bold">Explore More</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="main">
                        <h2>Your <span className="text-nowrap">One-Stop</span> Shop</h2>
                        <p>Shop all in one place from the comfort of your home.</p> 
                        <div className="shop-now m-auto">
                            <span className="btn btn-sm btn-dark border-radius-35">
                                <span>Shop Now</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-circle-fill text-white" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                    </svg>
                                </span>
                            </span>
                        </div> 
                    </div>
                    
                    <div className="rating">
                        <span className="heading fw-semibold">Best Service</span>
                        <span className="stars pe-1">
                            <span className="fa-solid fa-star active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span className="fa-solid fa-star active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span className="fa-solid fa-star active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span className="fa-solid fa-star active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                            <span className="fa-solid fa-star active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                        </span> 
                        <span className="text">I've never seen anything like this! Awesome delivery speed!</span>
                        <span className="client">-&nbsp;<small className="fst-italic">Julia Hopkins</small></span>
                    </div>
                </div> 
            </section>  

            <section className="search">
                <div className="search-container">
                    <span className="voice-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill"
                            viewBox="0 0 16 16">
                            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                            <path
                                d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </span>
                    <input type="text" placeholder="Search products" /> 
                    <span className="search-icon"><img src={ UserImage } alt="" width="16" /></span>
                </div>
            </section> 

            <section className="new-arrivals">
                <h3 className="fw-semibold">New Arrivals</h3>
            
                <div className="nav-scroller py-1 mb-3">
                    <nav className="nav justify-content-between py-3">
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Electronics</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Health</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Automobile</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Jewelries</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Shoes</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Bags</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Fashion</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                    </nav>
                </div>
            </section>

            <section className="trending bg-dark">
                <header className="heading d-flex align-items-center justify-content-start gap-3">
                    <h3 className="mt-2">Trending</h3> |
                    <span className="d-flex align-items-center gap-1">
                        <span className="mt-1">See All</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </span>
                    </span>
                </header> 

                <div className="products gap-5"> 
                    <div className="nav-scroller py-1 mb-3">
                        <nav className="nav justify-content-between py-3">

                            <article style={{ background: 'url(../../assets/images/IMG_3264.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <h4 className="fw-bold">Red Socks</h4>

                                <div className="buy">
                                    <div className="price fw-bold">
                                        <span className="old-price"><small>8.99$</small></span>
                                        <span className="new-price">5.99$</span>
                                    </div> 

                                    <div className="actions">
                                        <span><img src="./assets/images/heart-alt-svgrepo-com.svg" alt="" width="25" /></span>
                                        <span><img src="./assets/images/shopping-cart-svgrepo-com.svg" alt="" width="25" /></span>
                                    </div>
                                </div>
                            </article>
                            <article style={{ background: 'url(./assets/images/IMG_3264.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <h4 className="fw-bold">Red Socks</h4>

                                <div className="buy">
                                    <div className="price fw-bold">
                                        <span className="old-price"><small>8.99$</small></span>
                                        <span className="new-price">5.99$</span>
                                    </div> 

                                    <div className="actions">
                                        <span><img src="./assets/images/heart-alt-svgrepo-com.svg" alt="" width="25" /></span>
                                        <span><img src="./assets/images/shopping-cart-svgrepo-com.svg" alt="" width="25" /></span>
                                    </div>
                                </div>
                            </article>
                            <article style={{ background: 'url(./assets/images/IMG_3264.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <h4 className="fw-bold">Red Socks</h4>

                                <div className="buy">
                                    <div className="price fw-bold">
                                        <span className="old-price"><small>8.99$</small></span>
                                        <span className="new-price">5.99$</span>
                                    </div> 

                                    <div className="actions">
                                        <span><img src="./assets/images/heart-alt-svgrepo-com.svg" alt="" width="25" /></span>
                                        <span><img src="./assets/images/shopping-cart-svgrepo-com.svg" alt="" width="25" /></span>
                                    </div>
                                </div>
                            </article> 

                        </nav> 
                    </div>
                </div>
            </section> 

            <section className="brands d-flex flex-wrap justify-content-between align-items-center flex-wrap gap-3">
                <div className="text d-flex flex-column">
                    <h3>Luxury on your mind?</h3> 
                    <p>Quality, technology; browse the top brands</p> 
                    <div className="search-container border border-dark">
                        <span className="voice-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill"
                                viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                                <path
                                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Search brands" />
                        <span className="search-icon"><img src={ UserImage } alt="" width="16" /></span>
                    </div>
                </div> 

                <div className="categories" style={{ minWidth: '350px', maxWidth: '400px', background: 'url(./assets/images/IMG_3264.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <ul className="list-unstyled">
                        <li>Nike</li>
                        <li>Sony</li>
                        <li>Adidas</li>
                        <li>Johnson</li> 
                        <li className="d-flex align-items-center gap-1 btn btn-sm btn-outline-dark border-radius-35 mt-4">
                            <span className="text-nowrap fw-bold">Explore More</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div> 

            </section> 

            <section className="popular-categories">
                <h3>Popular Categories</h3>
            
                <div className="nav-scroller py-1 mb-3">
                    <nav className="nav justify-content-between py-3">
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Electronics</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Health</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Automobile</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Jewelries</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Shoes</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Bags</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                        <a href="#" className="nav-item nav-link link-body-emphasis d-flex align-items-center gap-3">
                            <span className="title">Fashion</span>
                            <span>
                                <img src={ UserImage } alt="" width="100" height="150"
                                    className="object-fit-cover" />
                            </span>
                        </a>
                    </nav>
                </div>
            </section>
        </Layout>
    )
}

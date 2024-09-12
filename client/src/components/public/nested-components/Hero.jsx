export default function Hero() {
    return (
        <section className="hero p-3 pb-5"
            style={{ background: 'url(https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=1018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="content h-100 py-3"> 
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="text py-4 carousel-item active">
                            <h2 className="fw-bold">It's Christmas!</h2>
                            <p className="fw-semibold">Get <u className="text-decoration">25% off</u> on your favorite high-quality
                                products.</p>
                        </div>
                        <div className="text py-4 carousel-item">
                            <h2 className="fw-bold">Get Discounts!</h2>
                            <p className="fw-semibold">Get disount on all purchases as from September 23.</p>
                        </div>
                    </div>
                </div>
                
                <div className="rating">
                    <span className="heading fw-semibold px-2">Our Ratings</span>
                    <span className="stars pe-1">
                        <span className="fa-solid fa-star active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                        <span className="fa-solid fa-star active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                        <span className="fa-solid fa-star active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                        <span className="fa-solid fa-star active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                        <span className="fa-solid fa-star active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </span>
                    </span>
                    <div className="body w-100 fw-bold" style={{ textShadow: '0.25px 0.25px white, -0.25px -0.25px white' }}>
                        <span className="text text-end">I've never seen anything like this! Awesome delivery speed!</span>&nbsp;&nbsp;
                        <span className="client">-&nbsp;<span className="fst-italic">Julia Hopkins</span></span>
                    </div>
                </div>
            </div> 

            <div className="footer d-flex justify-content-center pt-4">
                <span className="shop-now btn border-radius-35">
                    <a href="#" className="text-decoration-none ps-1 fw-semibold">
                        <span>Start Shopping</span>&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle-fill"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                        </svg>
                    </a>
                </span> 
            </div>
        </section> 
    )
}

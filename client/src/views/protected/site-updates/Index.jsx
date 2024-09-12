import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Site Updates</h2> 

                    <div className="py-3"> 
                        <section className="pb-3">
                            <h3 className="border-bottom pb-1 fs-5">1. Main Home Page</h3> 

                            <div className='py-3'>
                                <section className="main-home-hero">
                                    <h4 className="border-bottom pb-1 fs-6">a. Hero Image</h4>
                                    <div className="d-flex align-items-end gap-3 py-2">
                                        <span>
                                            <img src="https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&amp;w=1018&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit-cover border border-secondary border-2 border-radius-35 box-shadow-1" style={{ width: '300px', height: '150px' }} alt="" />
                                        </span> 
                                        <span className="btn btn-dark border-radius-35 py-0 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </section> 

                                <section className="main-home-hero pt-3">
                                    <h4 className="border-bottom pb-1 fs-6">b. Footer Image</h4>
                                    <div className="d-flex align-items-end gap-3 py-2">
                                        <span>
                                            <img src="https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit-cover border border-secondary border-2 border-radius-35 box-shadow-1" style={{ width: '300px', height: '150px' }} alt="" />
                                        </span> 
                                        <span className="btn btn-dark border-radius-35 py-0 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                                            </svg>
                                        </span>
                                    </div>
                                </section> 

                                <section className="main-home-hero pt-3">
                                    <h4 className="border-bottom pb-1 fs-6">c. Hero Texts</h4> 
                                    
                                    <div className="px-3"> 
                                        <h5 className='border-bottom fs-6'><small>Current Texts:</small></h5>
                                        <ol className="d-flex flex-column">
                                            <li>
                                                Get 25% off every item you buy before September 25
                                            </li>
                                            <li>
                                                It's the Christmas Season. Santa Claus is in our shop.
                                            </li>
                                        </ol>
                                    </div>
                                    
                                    <form id="" className="hero-form">                                
                                        <div className="row mb-3 gap-3">
                                            <div className="form border border-dark">
                                                <label htmlFor="" className="label" id="text1">Text 1:</label>
                                                <textarea className="label border-0" placeholder="Write your text  ..." id="text1" style={{ height: '30px', width: '100%' }}></textarea>
                                            </div>
                                        </div> 
                                        <div className="row mb-3 gap-3">
                                            <div className="form border border-dark">
                                                <label htmlFor="" className="label" id="text2">Text 2:</label>
                                                <textarea className="label border-0" placeholder="Write your text  ..." id="text2" style={{ height: '30px', width: '100%' }}></textarea>
                                            </div>
                                        </div> 
                                        <div className="row mb-3 gap-3">
                                            <div className="form border border-dark">
                                                <label htmlFor="" className="label" id="text3">Text 3:</label>
                                                <textarea className="label border-0" placeholder="Write your text  ..." id="text3" style={{ height: '30px', width: '100%' }}></textarea>
                                            </div>
                                        </div> 

                                        <div className="pt-3 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-dark px-3 border-radius-35">
                                                <span>Update</span>&nbsp;
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-circle"
                                                        viewBox="0 0 16 16">
                                                        <path fillRule="evenodd"
                                                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </section> 
                            </div>
                        </section>
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

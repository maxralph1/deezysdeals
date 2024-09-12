import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4">Profile</h2> 

                    <div className="py-3"> 
                        <section className="d-flex align-items-center flex-wrap column-gap-5 row-gap-3">
                            <div className="d-flex align-items-end gap-3">
                                <span>
                                    <img src="https://images.unsplash.com/photo-1517090186835-e348b621c9ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-fit-cover border border-secondary border-2 border-radius-35 box-shadow-1" style={{ width: '200px', height: '225px' }} alt="" />
                                </span> 
                                <span className="btn btn-dark border-radius-35 py-0 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="d-flex flex-column">
                                <h3>Pae Daezi</h3> 
                                <span className="fw-semibold">@paedaezi</span>
                                <span className="pt-0 mt-0">paedaezi@deezysdeals.com</span>
                                <span className="pt-0 mt-0">I am here to shop the whole of America! Why don't you join me?</span>
                            </div>
                        </section> 

                        <section className="pt-5"> 
                            <form action="" id="profile-form" className="profile-form">
                                <div className="row mb-3 gap-3">
                                    <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                        <label htmlFor="" className="label" id="first_name">First Name:</label>
                                        <input type="text" value="Pae" placeholder="e.g. Pae" data-target="first_name" />
                                    </div>
                                    <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                        <label htmlFor="" className="label" id="last_name">Last Name:</label>
                                        <input type="text" value="Daezi" placeholder="e.g. Daezi" data-target="last_name" />
                                    </div>
                                </div> 
                                <div className="row mb-3 gap-3">
                                    <div className="form border border-dark col-sm-12 col-md-5 col-lg-6">
                                        <label htmlFor="" className="label" id="email">Email:</label>
                                        <input type="text" value="paedaezi@deezysdeals.com" placeholder="e.g. paedaezi@deezysdeals.com" data-target="email" />
                                    </div>
                                </div> 
                                <div className="row mb-3 gap-3">
                                    <div className="form border border-dark">
                                        <label htmlFor="" className="label" id="password">Password:</label>
                                        <input type="password" placeholder="*********" data-target="password" />
                                    </div>
                                    <div className="form border border-dark">
                                        <label htmlFor="" className="label" id="repeat_password">Repeat Password:</label>
                                        <input type="password" placeholder="*********" data-target="repeat_password" />
                                    </div>
                                </div> 
                                <div className="row mb-3 gap-3">
                                    <div className="form border border-dark">
                                        <label htmlFor="" className="label" id="bio">Bio:</label>
                                        <textarea className="label border-0" placeholder="Write your bio  ..." id="bio" style={{ height: '35px', width: '100%' }}></textarea>
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
                </div> 
            </div>
        </Layout>
    )
}

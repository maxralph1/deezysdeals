import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/protected/Layout.jsx'; 
import PaginationLinks from '@/components/protected/nested-components/PaginationLinks.jsx';


export default function Index() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4">Users</h2> 

                    <div className="d-flex justify-content-between flex-wrap gap-2"> 
                        <div className="search">
                            <div className="search-container border border-dark" style={{ maxWidth: '375px' }}>
                                <span className="voice-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill"
                                        viewBox="0 0 16 16">
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"></path>
                                        <path
                                            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5">
                                        </path>
                                    </svg>
                                </span>
                                <input type="text" placeholder="Search user ..." className="" />
                                <span className="search-icon">
                                    <svg width="16"
                                        height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                                            stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <span>1 - 10 of 500 (page 1 of 20)</span>
                    </div>

                    <section className="py-4">
                        <ul className="list-unstyled d-flex flex-column gap-5">
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#1</span>
                                        <Link 
                                            to={ route('home.admin.show', {username: 'paedazi'})}
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View User
                                        </Link>
                                    </div> 
                                    <div className="amount-and-client d-flex flex-column gap-2">
                                        <h3 className="fw-semibold">Pae Daezi</h3> 
                                        <span className="fw-semibold fs-5">@paedaezi</span>
                                    </div>
                                </div> 
                            </li> 
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#2</span>
                                        <Link 
                                            to={ route('home.admin.show', {username: 'maxralph'})}
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View User
                                        </Link>
                                    </div> 
                                    <div className="amount-and-client d-flex flex-column gap-2">
                                        <h3 className="fw-semibold">Max Ralph</h3> 
                                        <span className="fw-semibold fs-5">@maxralph</span>
                                    </div>
                                </div> 
                            </li> 
                            <li className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                <div className="text-dark px-3">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                        <span className="fw-semibold">#3</span>
                                        <Link 
                                            to={ route('home.admin.show', {username: 'paedazi'})}
                                            className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                View User
                                        </Link>
                                    </div> 
                                    <div className="amount-and-client d-flex flex-column gap-2">
                                        <h3 className="fw-semibold">Charisma Ralph</h3> 
                                        <span className="fw-semibold fs-5">@charismaralph</span>
                                    </div>
                                </div> 
                            </li> 
                        </ul>
                    </section>
                </div>

                <PaginationLinks />
            </div>
        </Layout>
    )
}


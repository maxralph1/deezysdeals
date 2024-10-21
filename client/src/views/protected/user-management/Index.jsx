import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime"; 
import utc from 'dayjs/plugin/utc';
dayjs.extend(relativeTime);
dayjs.extend(utc); 
import { useUsers } from '@/hooks/useUsers.jsx'; 
import scrollToTop from '@/utils/ScrollToTop.jsx'; 
import First from '@/components/protected/nested-components/pagination-links/First.jsx'; 
import Previous from '@/components/protected/nested-components/pagination-links/Previous.jsx'; 
import Next from '@/components/protected/nested-components/pagination-links/Next.jsx'; 
import Last from '@/components/protected/nested-components/pagination-links/Last.jsx'; 
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() { 
    const [userRole, setUserRole] = useState(''); 
    const { users, getUsers } = useUsers(); 
    console.log(users)

    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3"> 
                    <h2 className="border-bottom pb-1 fs-4 d-flex justify-content-between align-items-center flex-wrap row-gap-3">
                        <span>Users</span> 
                        <div className="fs-6 d-flex align-items-center gap-2 flex-wrap">
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    setUserRole(''); 
                                    await getUsers('', 1); 
                                } }
                                className={`btn btn-sm ${(userRole == '') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    All
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    setUserRole('admin'); 
                                    await getUsers('admin', 1); 
                                } }
                                className={`btn btn-sm ${(userRole == 'admin') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Admins
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    setUserRole('dispatcher'); 
                                    await getUsers('dispatcher', 1); 
                                } }
                                className={`btn btn-sm ${(userRole == 'dispatcher') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Dispatchers
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    setUserRole('individual'); 
                                    await getUsers('individual', 1); 
                                } }
                                className={`btn btn-sm ${(userRole == 'individual') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Individuals
                            </span>
                            <span 
                                type="button" 
                                onClick={ async () => {
                                    setUserRole('enterprise'); 
                                    await getUsers('enterprise', 1); 
                                } }
                                className={`btn btn-sm ${(userRole == 'enterprise') ? 'btn-secondary' : 'btn-outline-secondary'} border-radius-35 py-0 fw-semibold`}>
                                    Enterprises
                            </span>
                        </div>
                    </h2> 

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
                        <span>
                            { ((users?.meta?.current_page) > 1) 
                                ? (((users?.meta?.current_page - 1) * users?.meta?.limit) + 1) 
                                : users?.meta?.current_page }
                                    &nbsp;-&nbsp;
                                { ((users?.meta?.current_page * (users?.meta?.limit)) > users?.meta?.total_results) 
                                    ? (users?.meta?.total_results)
                                        : ((users?.meta?.current_page) != 1) 
                                        ? (users?.meta?.current_page * users?.meta?.limit) 
                                            : ((users?.meta?.current_page + (users?.meta?.limit - 1))) } 
                                    &nbsp;of&nbsp; 
                                { users?.meta?.total_results } 
                                &nbsp;(page { users?.meta?.current_page } of { users?.meta?.total_pages })
                        </span>
                    </div>

                    <section className="py-4">
                        <ul className="list-unstyled d-flex flex-column gap-5">
                            { (users?.data?.length > 1) && (users?.data?.map((user, index) => {
                                return (
                                    <li key={ user?._id } className="box-shadow-1 border-radius-25 py-4 px-2 cursor-pointer">
                                        <div className="text-dark px-3">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap pb-2">
                                                <span className="fw-semibold">#
                                                    { (users?.meta?.current_page != 1) 
                                                        ? (((users?.meta?.current_page - 1) * users?.meta?.limit) + (index + 1))
                                                        : users?.meta?.current_page * (index + 1) }
                                                </span>
                                                <Link 
                                                    to={ route('home.users.show', { username: user?.username })}
                                                    className="btn btn-sm btn-secondary border-radius-35 py-0 fw-semibold">
                                                        View User
                                                </Link>
                                            </div> 
                                            <div className="amount-and-client d-flex flex-column gap-2">
                                                <h3 className="fw-semibold">{ user?.first_name + ' ' + user?.last_name }</h3> 
                                                <span className="fw-semibold fs-5">@{ user?.username }</span>
                                            </div>
                                        </div> 
                                    </li> 
                                )
                            })) }
                        </ul>
                    </section>
                </div>

                <section className="pagination-links py-5 d-flex justify-content-end gap-2 pe-2"> 
                    <span 
                        type="button" 
                        onClick={ async () => { 
                            scrollToTop(); 
                            await getUsers(userRole, 1); 
                        } }>
                            <First /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => { 
                            scrollToTop(); 
                            await getUsers(userRole, ((users?.meta?.current_page >= 1) ? (users?.meta?.current_page - 1) : 1)); 
                        } }>
                            <Previous /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => { 
                            scrollToTop(); 
                            await getUsers(userRole, ((users?.meta?.current_page < users?.meta?.total_pages) ? (users?.meta?.current_page + 1) : users?.meta?.total_pages)); 
                        } }>
                        <Next /> 
                    </span> 
                    <span 
                        type="button" 
                        onClick={ async () => { 
                            scrollToTop(); 
                            await getUsers(userRole, users?.meta?.total_pages); 
                        } }>
                            <Last />
                    </span>
                </section>
            </div>
        </Layout>
    )
}


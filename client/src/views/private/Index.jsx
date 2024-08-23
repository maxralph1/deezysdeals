import { Link } from 'react-router-dom'; 
import { route } from '@/routes'; 
import Layout from '@/components/private/Layout.jsx'; 

export default function Index() {
    return (
        <Layout>
            <section className="pt-4 px-3 bg-body-tertiary rounded">
                    <h2 className="fw-bold px-3">Good morning Pae!</h2>
                    <small className="fw-bold px-3">Welcome back</small>

                    <section>
                        <div className="row py-3"> 
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
                                <Link to={ route('home.orders.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Orders</h5>
                                                <p className="card-text fw-semibold"><small>Total orders today</small></p>
                                                <p className="card-text fw-bold">500</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-success fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>20%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}> 
                                <Link to={ route('home.payments.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Sales</h5>
                                                <p className="card-text fw-semibold"><small>Total sales today</small></p>
                                                <p className="card-text fw-bold">500USD</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-warning fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>10%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}> 
                                <Link to={ route('home.profits.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Profit</h5>
                                                <p className="card-text fw-semibold"><small>Total profit today</small></p>
                                                <p className="card-text fw-bold">500USD</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-warning fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>10%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}> 
                                <Link to={ route('home.clients.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Clients</h5>
                                                <p className="card-text fw-semibold"><small>Total clients today</small></p>
                                                <p className="card-text fw-bold">50</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-danger fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>5%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}> 
                                <Link to={ route('home.admins.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Admins</h5>
                                                <p className="card-text fw-semibold"><small>Total admins today</small></p>
                                                <p className="card-text fw-bold">50</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-danger fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>5%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}> 
                                <Link to={ route('home.visits.index') } className="text-decoration-none">
                                    <div className="card border-0 border-radius-35 px-3 py-4 convex">
                                        <div className="h-100 card-body d-flex align-items-start justify-content-between gap-2">
                                            <div className="d-flex flex-column">
                                                <h5 className="card-title fs-6 fw-bold">Visits</h5>
                                                <p className="card-text fw-semibold"><small>Total visits today</small></p>
                                                <p className="card-text fw-bold">5000</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center p-3 rounded-circle concave">
                                                <span className="text-success fw-bold" style={{ height: '25px', width: '25px', textWrap: 'nowrap' }}>26%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        </div>
                    </section>
                </section>

                <section className="pt-4 px-3 bg-body-tertiary rounded my-2">
                    <section className="row gap-3 p-4">
                        <article className="col-sm-12 col-md-12 col-lg-5 card p-4 border-0 border-radius-15 border-shadow table-responsive bg-dark-yellow border-shadow" style={{ minWidth: '48.5%' }}>
                            <table className="table table-dark-yellow  table-borderless table-hover table-responsive caption-top bg-transparent">
                                <caption className="fw-bold border-bottom">Orders</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">By</th>
                                        <th scope="col">On</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr className="cursor-pointer" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td> 
                                        <td>
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                    <div className="modal-content pb-3">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita. Esse enim, quidem deserunt iure ab veritatis accusamus quis repellat sint molestias culpa harum provident in placeat! Reiciendis enim dicta nemo dolores veritatis non aut, impedit, iusto quisquam sit in, facere laborum at! A unde itaque ipsam amet excepturi accusantium pariatur, cum, voluptatum, quisquam deleniti officiis dicta odit est facere fuga ab sed iste laboriosam deserunt esse sunt omnis non. Ea consequuntur fuga iure, exercitationem tempore voluptatibus odio voluptates cumque facere impedit perspiciatis optio sed ad, esse fugiat nemo animi commodi dolorum odit ratione placeat officiis incidunt. Iure voluptates nobis laudantium sed necessitatibus adipisci, delectus eveniet sunt quia perferendis sint sapiente perspiciatis odit officiis illum maxime dolores, aut quam! Iure, delectus voluptatum iusto ipsam exercitationem, in mollitia maiores alias eligendi et explicabo? Eligendi accusamus ab corrupti ea nemo omnis quasi dignissimos fugit libero! Quo odit quae quia neque exercitationem iure sunt aliquam excepturi, explicabo ducimus ea tempora? Soluta ea modi fugiat nostrum quibusdam atque velit, culpa sed, ipsam vitae neque! Delectus velit nostrum minima possimus corporis. At cupiditate quaerat, reprehenderit perspiciatis atque veniam culpa libero pariatur nesciunt, ullam cumque odio blanditiis ipsa! Modi id temporibus sequi a soluta vitae omnis illum illo deleniti ad, maiores voluptatem et! Recusandae unde dolores, quas quibusdam dignissimos nihil amet consequatur non incidunt ab illum magnam ipsum laborum minima doloribus harum fugiat quidem architecto, ex tempore sed! Adipisci, porro quia nesciunt est, ratione ad odio commodi asperiores, eos vero modi exercitationem sapiente facere aliquid sit.
                                                        </div>
                                                        <div className="pt-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <span className="fw-semibold">
                                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center">
                                        <span>See more&nbsp;</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                                            </svg>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </article>
                        <article className="col-sm-12 col-md-12 col-lg-5 card p-4 border-0 border-radius-15 border-shadow table-responsive bg-dark border-shadow" style={{ minWidth: '48.5%' }}>
                            <table className="table table-dark table-borderless table-hover table-responsive caption-top bg-transparent">
                                <caption className="fw-bold border-bottom text-white">Payments</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">By</th>
                                        <th scope="col">On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <span className="fw-semibold text-white">
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="text-white">See more&nbsp;</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square-fill text-white" viewBox="0 0 16 16">
                                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                                            </svg>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </article>
                        <article className="col-sm-12 col-md-12 col-lg-5 card p-4 border-0 border-radius-15 border-shadow table-responsive bg-body-secondary" style={{ minWidth: '48.5%' }}>
                            <table className="table table-secondary table-borderless table-hover table-responsive caption-top">
                                <caption className="fw-bold border-bottom">Visits</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">By</th>
                                        <th scope="col">On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                    <tr className="cursor-pointer">
                                        <th scope="row">52444841</th>
                                        <td>$200.00</td>
                                        <td>Otto Handel</td>
                                        <td>2 days ago</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <span className="fw-semibold">
                                    <a href="#" className="text-decoration-none text-dark">
                                        <span className="">See more&nbsp;</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                                                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"/>
                                            </svg>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </article>
                    </section>
                </section>
        </Layout>
    )
}

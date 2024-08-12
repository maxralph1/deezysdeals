import React from 'react'
import Layout from '@/components/private/Layout'

export default function Index() {
    return (
        <Layout>
            <section className="pt-4 px-3 bg-body-tertiary rounded my-2">
                    <h2 className="fw-bold px-3">Good morning Pae!</h2>
                    <small className="fw-bold px-3">Welcome back</small>

                    <section>
                        <div className="row py-3">
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
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
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
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
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
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
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
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
                            </article>
                            <article className="col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3" style={{ minWidth: '250px' }}>
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
                            </article>
                        </div>
                    </section>
                </section>

                <section className="pt-4 px-3 bg-body-tertiary rounded my-2">
                    <section className="row gap-3 p-4">
                        <article className="col-sm-12 col-md-12 col-lg-5 card p-4 border-0 border-radius-15 border-shadow table-responsive convex" style={{ minWidth: '48.5%' }}>
                            <table className="table table-secondary table-borderless table-hover table-responsive caption-top bg-transparent">
                                <caption className="fw-bold border-bottom">Sales</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <span className="fw-semibold">See more</span>
                            </div>
                        </article>
                        <article className="col-sm-12 col-md-12 col-lg-5 card p-4 border-0 border-radius-15 border-shadow" style={{ minWidth: '48.5%' }}>
                            <table className="table table-borderless table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colSpan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                    </section>
                </section>
        </Layout>
    )
}

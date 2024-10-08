export default function DealComponent() {
    return (
        <article className="nav-item card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src="https://images.unsplash.com/photo-1520189123429-6a76abfe7906?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid object-fit-cover" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body h-100 d-flex flex-column justify-content-center align-items-start">
                        <h4 className="card-title fw-semibold text-start">Summer Sales</h4>
                        <p className="card-text text-start w-100" style={{ whiteSpace: 'wrap' }}>We are giving 25% off every Nike shoe you buy. </p> 
                        <div className="justify-self-start">
                            <span className="btn btn-sm btn-dark border-radius-35 d-flex justify-items-start gap-1">
                                <span>Find Out More</span>
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
                </div>
            </div>
        </article>
    )
}

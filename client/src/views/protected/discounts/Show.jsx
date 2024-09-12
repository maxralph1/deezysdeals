import Layout from '@/components/protected/Layout.jsx'; 


export default function Show() {
    return (
        <Layout>
            <div className="main">
                <div className="dashboard-content pt-3">
                    <h2 className="border-bottom pb-1 fs-4"><span>Discount:&nbsp;<span className="fw-semibold">#12878526546</span></span></h2> 

                    <div className="py-3"> 

                        <p>Value:&nbsp;<span className="fw-semibold fs-5">$10</span></p> 
                        <p>Expires:&nbsp;<span className="fw-semibold fs-5">September 20, 2024, 11:22</span></p> 

                    </div> 
                </div> 
            </div>
        </Layout>
    )
}

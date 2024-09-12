import DashboardBoxes from '@/components/protected/nested-components/DashboardBoxes';
import Layout from '@/components/protected/Layout.jsx'; 


export default function Index() {
  return (
    <Layout> 

      <div className="main">
        <div className="dashboard-content pt-3">
          <DashboardBoxes /> 
        </div>
      </div>

    </Layout>
  )
}

import { useContext } from 'react'; 
import { useParams } from 'react-router-dom'; 
import AuthContext from '@/context/AuthContext.jsx';
import Layout from '@/components/protected/Layout.jsx'; 


export default function VerifyEmail() { 
  const { verifyEmail } = useContext(AuthContext);
  const params = useParams();
  const username = params.username;
  const token = params.token; 

  verifyEmail(username, token); 

  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center gap-2" style={{ height: '80vh' }}>
        <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </Layout>
  )
}

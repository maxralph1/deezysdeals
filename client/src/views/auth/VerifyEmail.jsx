import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import AuthContext from '@/context/AuthContext.jsx';
import Layout from '@/components/public/Layout.jsx'; 

export default function VerifyEmail() { 
    const { verifyEmail } = useContext(AuthContext);
    const params = useParams();
    const username = params.username;
    const token = params.token;

    verifyEmail(username, token); 

    return (
        <Layout>
            <div>Please wait ...</div>
        </Layout>
    )
}

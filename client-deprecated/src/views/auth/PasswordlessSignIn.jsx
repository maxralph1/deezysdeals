import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import AuthContext from '@/context/AuthContext.jsx';
import Layout from '@/components/public/Layout.jsx'; 

export default function PasswordlessSignIn() { 
    const { passwordlessSignIn } = useContext(AuthContext);
    const params = useParams();
    const username = params.username;
    const token = params.token;

    passwordlessSignIn(username, token);

    return (
        <Layout>
            <div>Please wait ...</div>
        </Layout>
    )
}

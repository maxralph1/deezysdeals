import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { route } from '@/routes'; 

import NotFound from '@/views/NotFound.jsx'; 
import SignUp from './views/auth/SignUp';
import SignIn from './views/auth/SignIn';
import PasswordResetRequest from './views/auth/PasswordResetRequest';
import PasswordReset from './views/auth/PasswordReset'; 

import PrivateIndex from '@/views/private/Index.jsx';

import Index from '@/views/public/Index.jsx'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */} 
        <Route path={ route('index') } element={ <Index /> } />

        {/* Auth Routes */}
        <Route path={ route('sign-up') } element={ <SignUp /> } /> 
        <Route path={ route('sign-in') } element={ <SignIn /> } /> 
        <Route path={ route('password-reset-request') } element={ <PasswordResetRequest /> } /> 
        <Route path={ route('password-reset') } element={ <PasswordReset /> } />

        {/* Private Routes */}
        <Route path={ route('home.index') } element={ <PrivateIndex /> } />

        {/* 404 */} 
        <Route path='*' element={ <NotFound /> } />

      </Routes>
    </BrowserRouter>
  )
} 


export default App;
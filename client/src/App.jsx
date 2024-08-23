import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { AuthProvider } from '@/context/AuthContext.jsx'; 
import PrivateRoute from '@/utils/PrivateRoute.jsx'; 

import NotFound from '@/views/NotFound.jsx'; 
import SignUp from '@/views/auth/SignUp'; 
import VerifyEmail from '@/views/auth/VerifyEmail';
import SignIn from '@/views/auth/SignIn'; 
import PasswordlessSignInRequest from '@/views/auth/PasswordlessSignInRequest';
import PasswordlessSignIn from '@/views/auth/PasswordlessSignIn'; 
import PasswordResetRequest from '@/views/auth/PasswordResetRequest';
import PasswordReset from '@/views/auth/PasswordReset'; 

import PrivateCategoryShow from '@/views/private/categories/Show.jsx'; 
import PrivateCategoriesIndex from '@/views/private/categories/Index.jsx'; 

import PrivateProductShow from '@/views/private/products/Show.jsx'; 
import PrivateProductsIndex from '@/views/private/products/Index.jsx'; 

import PrivateOrderShow from '@/views/private/orders/Show.jsx'; 
import PrivateOrderEdit from '@/views/private/orders/Edit.jsx'; 
import PrivateOrderCreate from '@/views/private/orders/Create.jsx'; 
import PrivateOrdersIndex from '@/views/private/orders/Index.jsx'; 

import PrivatePaymentShow from '@/views/private/payments/Show.jsx'; 
import PrivatePaymentsIndex from '@/views/private/payments/Index.jsx'; 

import PrivateProfitShow from '@/views/private/profits/Show.jsx'; 
import PrivateProfitsIndex from '@/views/private/profits/Index.jsx'; 

import PrivateUserShow from '@/views/private/users/Show.jsx'; 
import PrivateUserEdit from '@/views/private/users/Edit.jsx'; 
import PrivateUserCreate from '@/views/private/users/Create.jsx'; 
import PrivateUsersIndex from '@/views/private/users/Index.jsx'; 

import PrivateVisitShow from '@/views/private/visits/Show.jsx'; 
import PrivateVisitsIndex from '@/views/private/visits/Index.jsx'; 

import PrivateNotificationShow from '@/views/private/notifications/Show.jsx'; 
import PrivateNotificationsIndex from '@/views/private/notifications/Index.jsx'; 

import PrivateProfile from '@/views/private/Profile.jsx';

import PrivateIndex from '@/views/private/Index.jsx';

import Index from '@/views/public/Index.jsx'; 


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Auth Routes */}
          <Route path={ route('sign-up') } element={ <SignUp /> } /> 
          <Route path={ route('verify-email') } element={ <VerifyEmail /> } /> 
          <Route path={ route('sign-in') } element={ <SignIn /> } /> 
          <Route path={ route('passwordless-signin-request') } element={ <PasswordlessSignInRequest /> } /> 
          <Route path={ route('passwordless-signin') } element={ <PasswordlessSignIn /> } /> 
          <Route path={ route('password-reset-request') } element={ <PasswordResetRequest /> } /> 
          <Route path={ route('password-reset') } element={ <PasswordReset /> } /> 

          {/* Public Routes */} 
          <Route path={ route('index') } element={ <Index /> } />

          {/* Private Routes */} 
          <Route path='/' element={<PrivateRoute />}> 
            <Route path={ route('home.categories.show') } element={ <PrivateCategoryShow />} /> 
            <Route path={ route('home.categories.index') } element={ <PrivateCategoriesIndex />} /> 

            <Route path={ route('home.products.show') } element={ <PrivateProductShow />} /> 
            <Route path={ route('home.products.index') } element={ <PrivateProductsIndex />} /> 

            <Route path={ route('home.orders.show') } element={ <PrivateOrderShow />} /> 
            <Route path={ route('home.orders.edit') } element={ <PrivateOrderEdit />} /> 
            <Route path={ route('home.orders.create') } element={ <PrivateOrderCreate />} /> 
            <Route path={ route('home.orders.index') } element={ <PrivateOrdersIndex />} /> 

            <Route path={ route('home.payments.show') } element={ <PrivatePaymentShow />} /> 
            <Route path={ route('home.payments.index') } element={ <PrivatePaymentsIndex />} /> 

            <Route path={ route('home.profits.show') } element={ <PrivateProfitShow />} /> 
            <Route path={ route('home.profits.index') } element={ <PrivateProfitsIndex />} /> 

            <Route path={ route('home.clients.show') } element={ <PrivateUserShow />} /> 
            <Route path={ route('home.clients.edit') } element={ <PrivateUserEdit />} /> 
            <Route path={ route('home.clients.create') } element={ <PrivateUserCreate />} /> 
            <Route path={ route('home.clients.index') } element={ <PrivateUsersIndex />} /> 

            <Route path={ route('home.admins.show') } element={ <PrivateUserShow />} /> 
            <Route path={ route('home.admins.edit') } element={ <PrivateUserEdit />} /> 
            <Route path={ route('home.admins.create') } element={ <PrivateUserCreate />} /> 
            <Route path={ route('home.admins.index') } element={ <PrivateUsersIndex />} /> 

            <Route path={ route('home.visits.show') } element={ <PrivateVisitShow />} /> 
            <Route path={ route('home.visits.index') } element={ <PrivateVisitsIndex />} /> 

            <Route path={ route('home.notifications.show') } element={ <PrivateNotificationShow />} /> 
            <Route path={ route('home.notifications.index') } element={ <PrivateNotificationsIndex />} /> 

            <Route path={ route('home.profile') } element={ <PrivateProfile /> } />

            <Route path={ route('home.index') } element={ <PrivateIndex /> } />
          </Route> 

          {/* 404 */} 
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
} 


export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { route } from '@/routes'; 
import { AuthProvider } from '@/context/AuthContext.jsx'; 
import { CartProvider } from '@/context/CartContext.jsx'; 
import ProtectedRoute from '@/utils/ProtectedRoute.jsx'; 

import SignUp from '@/views/auth/SignUp.jsx'; 
import SignUpAsEnterprise from '@/views/auth/SignUpAsEnterprise.jsx'; 
import VerifyEmail from '@/views/auth/VerifyEmail.jsx';
import SignIn from '@/views/auth/SignIn.jsx'; 
import PasswordlessSignInRequest from '@/views/auth/PasswordlessSignInRequest.jsx';
import PasswordlessSignIn from '@/views/auth/PasswordlessSignIn.jsx'; 
import PasswordResetRequest from '@/views/auth/PasswordResetRequest.jsx';
import PasswordReset from '@/views/auth/PasswordReset.jsx'; 

import Brand from '@/views/public/Brand.jsx'; 
import Brands from '@/views/public/Brands.jsx'; 
import Cart from '@/views/public/Cart.jsx'; 
import Categories from '@/views/public/Categories.jsx'; 
import Category from '@/views/public/Category.jsx'; 
import Pay from '@/views/public/Pay.jsx'; 
import Paid from '@/views/public/Paid.jsx'; 
import Product from '@/views/public/Product.jsx'; 
import Products from '@/views/public/Products.jsx'; 
import Index from '@/views/public/Index.jsx'; 

import ProtectedAdminShow from '@/views/protected/admin/Show.jsx'; 
import ProtectedAdminEdit from '@/views/protected/admin/Edit.jsx'; 
import ProtectedAdminIndex from '@/views/protected/admin/Index.jsx'; 

import ProtectedCalendarIndex from '@/views/protected/calendar/Index.jsx'; 

import ProtectedClientShow from '@/views/protected/clients/Show.jsx'; 
import ProtectedClientEdit from '@/views/protected/clients/Edit.jsx'; 
import ProtectedClientsIndex from '@/views/protected/clients/Index.jsx'; 

import ProtectedDealEdit from '@/views/protected/deals/Edit.jsx'; 
import ProtectedDealsIndex from '@/views/protected/deals/Index.jsx'; 

import ProtectedDeliveryEdit from '@/views/protected/deliveries/Edit.jsx'; 
import ProtectedDeliveriesIndex from '@/views/protected/deliveries/Index.jsx'; 

import ProtectedDiscountShow from '@/views/protected/discounts/Show.jsx'; 
import ProtectedDiscountEdit from '@/views/protected/discounts/Edit.jsx'; 
import ProtectedDiscountsIndex from '@/views/protected/discounts/Index.jsx'; 

import ProtectedInvoiceShow from '@/views/protected/invoices/Show.jsx'; 
import ProtectedInvoicesIndex from '@/views/protected/invoices/Index.jsx'; 

import ProtectedNotificationsIndex from '@/views/protected/notifications/Index.jsx'; 

import ProtectedOrderShow from '@/views/protected/orders/Show.jsx'; 
import ProtectedOrderEdit from '@/views/protected/orders/Edit.jsx'; 
import ProtectedOrdersIndex from '@/views/protected/orders/Index.jsx'; 

import ProtectedPaymentsIndex from '@/views/protected/payments/Index.jsx'; 

import ProtectedProductEdit from '@/views/protected/products/Edit.jsx'; 
import ProtectedProductsIndex from '@/views/protected/products/Index.jsx'; 

import ProtectedProfileIndex from '@/views/protected/profile/Index.jsx'; 

import ProtectedProfitIndex from '@/views/protected/profit/Index.jsx'; 

import ProtectedPurchaseEdit from '@/views/protected/purchases/Edit.jsx'; 
import ProtectedPurchasesIndex from '@/views/protected/purchases/Index.jsx'; 

import ProtectedRatingsIndex from '@/views/protected/ratings/Index.jsx'; 

import ProtectedSalesIndex from '@/views/protected/sales/Index.jsx'; 

import ProtectedSettingsIndex from '@/views/protected/settings/Index.jsx'; 

import ProtectedSiteUpdatesIndex from '@/views/protected/site-updates/Index.jsx'; 

import ProtectedSocialMediaEdit from '@/views/protected/social-media/Edit.jsx'; 
import ProtectedSocialMediaIndex from '@/views/protected/social-media/Index.jsx'; 

import ProtectedUserManagementShow from '@/views/protected/user-management/Show.jsx'; 
import ProtectedUserManagementEdit from '@/views/protected/user-management/Edit.jsx'; 
import ProtectedUserManagementIndex from '@/views/protected/user-management/Index.jsx'; 

import ProtectedIndex from '@/views/protected/Index.jsx'; 

import NotFound from '@/views/NotFound.jsx'; 


function App() {
  return (
    <BrowserRouter> 
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Auth Routes */}
              <Route path={ route('sign-up') } element={ <SignUp /> } /> 
              <Route path={ route('sign-up-as-enteprise') } element={ <SignUpAsEnterprise /> } /> 
              <Route path={ route('verify-email') } element={ <VerifyEmail /> } /> 
              <Route path={ route('sign-in') } element={ <SignIn /> } /> 
              <Route path={ route('passwordless-signin-request') } element={ <PasswordlessSignInRequest /> } /> 
              <Route path={ route('passwordless-signin') } element={ <PasswordlessSignIn /> } /> 
              <Route path={ route('password-reset-request') } element={ <PasswordResetRequest /> } /> 
              <Route path={ route('password-reset') } element={ <PasswordReset /> } /> 

              {/* Public Routes */} 
              <Route path={ route('brands.show') } element={ <Brand /> } /> 
              <Route path={ route('brands.index') } element={ <Brands /> } /> 
              <Route path={ route('cart') } element={ <Cart /> } /> 
              <Route path={ route('categories.show') } element={ <Category /> } /> 
              <Route path={ route('categories.index') } element={ <Categories /> } /> 
              <Route path={ route('pay') } element={ <Pay /> } /> 
              <Route path={ route('paid') } element={ <Paid /> } /> 
              <Route path={ route('products.show') } element={ <Product /> } /> 
              <Route path={ route('products.index') } element={ <Products /> } /> 

              <Route path={ route('index') } element={ <Index /> } /> 

              {/* Proctected Routes */} 
              <Route path='/' element={ <ProtectedRoute />}>
                <Route path={ route('home.admin.show') } element={ <ProtectedAdminShow /> } />
                <Route path={ route('home.admin.edit') } element={ <ProtectedAdminEdit /> } />
                <Route path={ route('home.admin.index') } element={ <ProtectedAdminIndex /> } /> 

                <Route path={ route('home.calendar.index') } element={ <ProtectedCalendarIndex /> } /> 

                <Route path={ route('home.clients.show') } element={ <ProtectedClientShow /> } />
                <Route path={ route('home.clients.edit') } element={ <ProtectedClientEdit /> } />
                <Route path={ route('home.clients.index') } element={ <ProtectedClientsIndex /> } /> 

                <Route path={ route('home.deals.edit') } element={ <ProtectedDealEdit /> } />
                <Route path={ route('home.deals.index') } element={ <ProtectedDealsIndex /> } /> 

                <Route path={ route('home.deliveries.edit') } element={ <ProtectedDeliveryEdit /> } />
                <Route path={ route('home.deliveries.index') } element={ <ProtectedDeliveriesIndex /> } /> 

                <Route path={ route('home.discounts.show') } element={ <ProtectedDiscountShow /> } />
                <Route path={ route('home.discounts.edit') } element={ <ProtectedDiscountEdit /> } />
                <Route path={ route('home.discounts.index') } element={ <ProtectedDiscountsIndex /> } /> 

                <Route path={ route('home.invoices.show') } element={ <ProtectedInvoiceShow /> } />
                <Route path={ route('home.invoices.index') } element={ <ProtectedInvoicesIndex /> } /> 

                <Route path={ route('home.notifications.index') } element={ <ProtectedNotificationsIndex /> } /> 

                <Route path={ route('home.orders.show') } element={ <ProtectedOrderShow /> } />
                <Route path={ route('home.orders.edit') } element={ <ProtectedOrderEdit /> } />
                <Route path={ route('home.orders.index') } element={ <ProtectedOrdersIndex /> } /> 

                <Route path={ route('home.payments.index') } element={ <ProtectedPaymentsIndex /> } /> 

                <Route path={ route('home.products.edit') } element={ <ProtectedProductEdit /> } />
                <Route path={ route('home.products.index') } element={ <ProtectedProductsIndex /> } /> 

                <Route path={ route('home.profile.index') } element={ <ProtectedProfileIndex /> } /> 

                <Route path={ route('home.profit.index') } element={ <ProtectedProfitIndex /> } /> 

                <Route path={ route('home.purchases.edit') } element={ <ProtectedPurchaseEdit /> } />
                <Route path={ route('home.purchases.index') } element={ <ProtectedPurchasesIndex /> } /> 

                <Route path={ route('home.ratings.index') } element={ <ProtectedRatingsIndex /> } /> 

                <Route path={ route('home.sales.index') } element={ <ProtectedSalesIndex /> } /> 

                <Route path={ route('home.settings.index') } element={ <ProtectedSettingsIndex /> } /> 

                <Route path={ route('home.site-updates.index') } element={ <ProtectedSiteUpdatesIndex /> } /> 

                <Route path={ route('home.social-media.edit') } element={ <ProtectedSocialMediaEdit /> } /> 
                <Route path={ route('home.social-media.index') } element={ <ProtectedSocialMediaIndex /> } /> 

                <Route path={ route('home.user-management.show') } element={ <ProtectedUserManagementShow /> } />
                <Route path={ route('home.user-management.edit') } element={ <ProtectedUserManagementEdit /> } />
                <Route path={ route('home.user-management.index') } element={ <ProtectedUserManagementIndex /> } /> 

                <Route path={ route('home.index') } element={ <ProtectedIndex /> } />
              </Route> 

              {/* 404 */} 
              <Route path='*' element={ <NotFound /> } />
          </Routes> 
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

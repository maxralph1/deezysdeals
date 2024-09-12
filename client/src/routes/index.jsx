const routeNames = {

    /** Auth Routes */ 
    'sign-up': '/sign-up', 
    'verify-email': '/verify-email/:username/:token', 
    'sign-in': '/sign-in', 
    'passwordless-signin': '/passwordless-signin/:username/:token', 
    'passwordless-signin-request': '/passwordless-signin-request', 
    'password-reset': '/password-reset/:username/:token', 
    'password-reset-request': '/password-reset-request', 


    /** Private Routes */ 
    'home.admin.show': '/home/admin/:username/show', 
    'home.admin.edit': '/home/admin/:username/edit', 
    'home.admin.index': '/home/admin', 

    'home.calendar.index': '/home/calendar', 

    'home.clients.show': '/home/clients/:username/show', 
    'home.clients.edit': '/home/clients/:username/edit', 
    'home.clients.index': '/home/clients', 

    'home.deals.edit': '/home/deals/:id/edit', 
    'home.deals.index': '/home/deals', 

    'home.deliveries.edit': '/home/deliveries/:id/edit', 
    'home.deliveries.index': '/home/deliveries', 

    'home.discounts.show': '/home/discounts/:id/show', 
    'home.discounts.edit': '/home/discounts/:id/edit', 
    'home.discounts.index': '/home/discounts', 

    'home.invoices.show': '/home/invoices/:id/show', 
    'home.invoices.index': '/home/invoices', 

    'home.notifications.index': '/home/notifications', 
    
    'home.orders.show': '/home/orders/:id/show', 
    'home.orders.edit': '/home/orders/:id/edit', 
    'home.orders.index': '/home/orders', 

    'home.payments.index': '/home/payments', 

    'home.products.edit': '/home/products/:id/edit', 
    'home.products.index': '/home/products', 

    'home.profile.index': '/home/profile', 

    'home.profit.index': '/home/profit', 

    'home.purchases.edit': '/home/purchases/:id/edit', 
    'home.purchases.create': '/home/purchases/create', 
    'home.purchases.index': '/home/purchases', 

    'home.ratings.index': '/home/ratings', 

    'home.sales.index': '/home/sales', 

    'home.settings.index': '/home/settings', 

    'home.site-updates.index': '/home/site-updates', 

    // 'home.social-media.show': '/home/social-media/:id/show', 
    'home.social-media.edit': '/home/social-media/:id/edit', 
    'home.social-media.index': '/home/social-media', 

    'home.settings.index': '/home/settings', 

    'home.index': '/home', 


    /** Public Routes */ 
    'brands.show': '/brands/:id/show', 
    'brands.index': '/brands', 

    'categories.show': '/categories/:id/show', 
    'categories.index': '/categories', 

    'cart': '/cart', 
    'paid': '/paid', 

    'products.show': '/products/:id/show', 
    'products.index': '/products', 

    'index': '/'
} 

function route(name, params = {}) {
    let url = routeNames[name] 

    for (let prop in params) {
        if (Object?.prototype?.hasOwnProperty?.call(params, prop)) {
            url = url?.replace(`:${prop}`, params[prop])
        }
    } 

    return url;
} 


export { route }
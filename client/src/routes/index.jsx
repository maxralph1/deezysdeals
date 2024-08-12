const routeNames = {

    /** Auth Routes */ 
    'sign-up': '/sign-up', 
    'sign-in': '/sign-in', 
    'password-reset': '/password-reset/:username/:token', 
    'password-reset-request': '/password-reset-request', 


    /** Private Routes */ 
    'home.products.show': '/home/products/:id/show', 
    'home.products.edit': '/home/products/:id/edit', 
    'home.products.create': '/home/products/create', 
    'home.products.index': '/home/products', 

    'home.orders.show': '/home/orders/:id/show', 
    'home.orders.edit': '/home/orders/:id/edit', 
    'home.orders.create': '/home/orders/create', 
    'home.orders.index': '/home/orders',

    'home.payments.show': '/home/payments/:id/show', 
    'home.payments.edit': '/home/payments/:id/edit', 
    'home.payments.create': '/home/payments/create', 
    'home.payments.index': '/home/payments',

    'home.index': '/home', 


    /** Public Routes */ 
    'categories.show': '/categories/:id/show', 
    'categories.index': '/categories', 

    'sub-categories.show': '/sub-categories/:id/show', 
    'sub-categories.index': '/sub-categories', 

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
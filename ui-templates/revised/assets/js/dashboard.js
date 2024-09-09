const dashboardNavBtn = document.getElementById('dashboard-mobile-nav'); 
const dashboardNav = document.getElementById('dashboard-nav'); 

const dashboardBottomNavBtn = document.getElementById('dashboard-bottom-mobile-nav');
const dashboardAsideContent = document.getElementById('aside'); 

const helpBtn = document.getElementById("help-btn"); 
const helpBox = document.getElementById("help-box"); 

const cartBtn = document.getElementById("cart-btn"); 
const cartBox = document.getElementById("cart-box"); 


dashboardNavBtn.addEventListener('click', () => { 
    dashboardNav.classList.toggle('d-none');
}); 

dashboardBottomNavBtn.addEventListener('click', () => { 
    if (dashboardAsideContent.style.display == 'block') {
        dashboardAsideContent.style.display = 'none';
    } else {
        dashboardAsideContent.style.display = 'block';
    }
}); 

helpBtn.addEventListener('click', () => { 
    if (!cartBox.classList.contains("d-none")) {
        cartBox.classList.add("d-none");
    }; 

    helpBox.classList.toggle("d-none"); 
});

cartBtn.addEventListener('click', () => { 
    if (!helpBox.classList.contains("d-none")) {
        helpBox.classList.add("d-none");
    }; 

    cartBox.classList.toggle("d-none"); 
}); 
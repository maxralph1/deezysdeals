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



/** Modals */ 

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add event listeners to open modal buttons
document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', function() {
        const targetModal = this.getAttribute('data-target');
        openModal(targetModal);
    });
}); 

// Add event listeners to close modal buttons
document.querySelectorAll('.modal-close').forEach(span => {
    span.addEventListener('click', function() {
        const targetModal = this.getAttribute('data-modal');
        closeModal(targetModal);
    });
});

// Close modals when clicking outside of modal content
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
} 

/** End Modals */ 
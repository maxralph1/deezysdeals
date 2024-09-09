const navBtn = document.getElementById('mobile-nav'); 
const nav = document.getElementById('nav'); 

const helpBtn = document.getElementById('help-btn'); 
const helpBox = document.getElementById('help-box'); 

const cartBtn = document.getElementById('cart-btn'); 
const cartBox = document.getElementById('cart-box'); 

const user = document.getElementById('user-icon'); 
const userOptions = document.getElementById('user-options'); 



/** Navigation */ 
navBtn.addEventListener('click', () => {
    nav.classList.toggle('d-none');
}); 
/** End Navigation */ 


/** Side-screen Icons/Modals */ 

helpBtn.addEventListener('click', () => { 
    if (!cartBox.classList.contains('d-none')) {
        cartBox.classList.add('d-none');
    }; 

    helpBox.classList.toggle('d-none'); 
});

cartBtn.addEventListener('click', () => { 
    if (!helpBox.classList.contains('d-none')) {
        helpBox.classList.add('d-none');
    }; 

    cartBox.classList.toggle('d-none'); 
}); 

user.addEventListener('click', () => { 
    if (userOptions.style.display == 'block') {
        userOptions.style.display = 'none'
    } else {
        userOptions.style.display = 'block'
    }
}); 

/** End Side-screen Icons/Modals */ 


/** Forms */ 

function hideLabel(labelId) {
    const label = document.getElementById(labelId); 

    document.querySelectorAll('label').forEach(otherLabel => {
        if (otherLabel.id !== labelId) {
            otherLabel.style.display = 'block'; 
        }
    }); 
    
    if (label) {
        label.style.display = 'none';
    } 
}

// Add event listeners to forms
document.querySelectorAll('[data-target]').forEach(input => {
    input.addEventListener('focus', function() {
        const targetLabel = this.getAttribute('data-target');
        hideLabel(targetLabel);
    });
}); 

/** End Forms */ 


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
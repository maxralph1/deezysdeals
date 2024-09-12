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


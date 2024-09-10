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
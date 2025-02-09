// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

// Show application form
function showApplicationForm() {
    document.getElementById('application-form').style.display = 'block';
    document.getElementById('eligibility-form').style.display = 'none';
}

// Show eligibility form
function showEligibilityForm() {
    document.getElementById('eligibility-form').style.display = 'block';
    document.getElementById('application-form').style.display = 'none';
}

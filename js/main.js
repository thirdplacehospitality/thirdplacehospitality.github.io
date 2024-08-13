/* Root CSS Variables for theming */
:root {
    --light-blue: #f4f9fc;
    --dark-blue: #005f73;
    --light-grey: #f0f4f8;
    --hover-blue: #0077b6;
    --very-dark-blue: #023e8a;
}

/* General Body and Layout Styles */
body, html {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: var(--light-blue);
    color: #333;
    scroll-behavior: smooth;
}

header {
    text-align: center;
    padding: 2rem 0;
}

/* Section Styles */
section {
    padding: 40px 20px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    visibility: hidden;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out, visibility 0.6s;
}

/* Fade-in effect when in viewport */
.fade-in {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
}

/* Contact Form Styling */
#contact form {
    max-width: 600px;
    margin: auto;
}

footer {
    background: var(--very-dark-blue);
    color: var(--light-grey);
    text-align: center;
    padding: 1rem;
}

/* Responsive navigation and sections */
@media (min-width: 768px) {
    nav ul {
        justify-content: center;
    }

    .fade-in {
        transition-delay: 0.3s;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        root: null, // using the viewport as the root
        threshold: 0.2, // trigger when 20% of the element is in view
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // add 'active' to start the animation
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // observe each .fade-in section
    });
});
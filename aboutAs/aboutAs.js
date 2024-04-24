// Add JavaScript to handle carousel functionality


let testimonialIndex = 0;
let timer;

function moveTestimonials(n) {
    clearInterval(timer); // Clear any existing interval
    const testimonials = document.querySelectorAll('.testimonial');
    testimonialIndex += n;
    showTestimonials();
    timer = setInterval(() => {
        testimonialIndex++;
        showTestimonials();
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)
}

function showTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }
    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    testimonials[testimonialIndex].style.display = 'block';
}

// Start the carousel initially
moveTestimonials(0);

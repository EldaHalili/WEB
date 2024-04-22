// Add JavaScript to handle carousel functionality
let testimonialIndex = 0;

function moveTestimonials(n) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonialIndex += n;
    showTestimonials();
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
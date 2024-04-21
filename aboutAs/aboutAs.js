// Add JavaScript to handle carousel functionality
document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const testimonialsContainer = document.querySelector(".testimonials-container");

    let translateX = 0;

    // Move carousel to the left
    prevBtn.addEventListener("click", function () {
        if (translateX < 0) {
            translateX += 250; // Adjust the value based on testimonial width
            testimonialsContainer.style.transform = `translateX(${translateX}px)`;
        }
    });

    // Move carousel to the right
    nextBtn.addEventListener("click", function () {
        const containerWidth = testimonialsContainer.offsetWidth;
        const contentWidth = testimonialsContainer.scrollWidth;
        if (translateX > -(contentWidth - containerWidth)) {
            translateX -= 250; // Adjust the value based on testimonial width
            testimonialsContainer.style.transform = `translateX(${translateX}px)`;
        }
    });
});

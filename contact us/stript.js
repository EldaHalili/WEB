window.addEventListener("DOMContentLoaded", () => {
    const starRating = new StarRating("form");
});

class StarRating {
    constructor(qs) {
        this.ratings = [
            {id: 1, name: "Terrible"},
            {id: 2, name: "Bad"},
            {id: 3, name: "OK"},
            {id: 4, name: "Good"},
            {id: 5, name: "Excellent"}
        ];
        this.rating = null;
        this.el = document.querySelector(qs);

        this.init();
    }

    init() {
        this.el?.addEventListener("change", this.updateRating.bind(this));

        // stop Firefox from preserving form data between refreshes
        try {
            this.el?.reset();
        } catch (err) {
            console.error("Element isn’t a form.");
        }
    }

    updateRating(e) {
        // clear animation delays
        Array.from(this.el.querySelectorAll(`[for*="rating"]`)).forEach(el => {
            el.className = "rating__label";
        });

        const ratingObject = this.ratings.find(r => r.id === +e.target.value);
        const prevRatingID = this.rating?.id || 0;

        let delay = 0;
        this.rating = ratingObject;
        this.ratings.forEach(rating => {
            const {id} = rating;

            // add the delays
            const ratingLabel = this.el.querySelector(`[for="rating-${id}"]`);

            if (id > prevRatingID + 1 && id <= this.rating.id) {
                ++delay;
                ratingLabel.classList.add(`rating__label--delay${delay}`);
            }

            // hide ratings to not read, show the one to read
            const ratingTextEl = this.el.querySelector(`[data-rating="${id}"]`);

            if (this.rating.id !== id)
                ratingTextEl.setAttribute("hidden", true);
            else
                ratingTextEl.removeAttribute("hidden");
        });
    }
}

// Get the modal
const modal = document.getElementById("successModal");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting by default

    const ratingChecked = document.querySelector(".rating__input:checked");
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    // Perform form validation
    if (!ratingChecked) {
        alert("Please rate our page before submitting.");
        return;
    }
    if (!emailValue.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // If validation passes, show success modal
    modal.style.display = "block";
});


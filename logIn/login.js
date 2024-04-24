// Get the modal for forgotten password
var forgottenModal = document.getElementById("forgotten");

// Get the link for Forgotten Password
var forgotPasswordLink = document.getElementById("forgot-password");

// Get the submit button inside the forgotten password modal
var submitButton = document.getElementById("submit");

// Get the success modal
var successModal = document.getElementById("success-modal");

// Function to open the modal when the link is clicked
forgotPasswordLink.onclick = function() {
    forgottenModal.style.display = "block";
}

// Function to close the modal when the close button is clicked
forgottenModal.querySelector(".close").onclick = function() {
    forgottenModal.style.display = "none";
}

// Function to close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == forgottenModal) {
        forgottenModal.style.display = "none";
    }
}

// Function to handle submission of the forgotten password form
submitButton.onclick = function() {
    // Check if code input is empty
    var codeInput = document.getElementById("code-input").value;
    if (codeInput.trim() === "") {
        alert("Please enter the code sent to your email.");
        return false;
    }
    // Check if new password fields match
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (newPassword !== confirmPassword) {
        alert("New password fields do not match.");
        return false;
    }
    // Show the success modal if everything is valid
    successModal.style.display = "block";
}

// Function to close the success modal when the close button is clicked
successModal.querySelector(".close").onclick = function() {
    successModal.style.display = "none";
}

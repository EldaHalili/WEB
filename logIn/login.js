// Get the modal element
var modal = document.getElementById('forgotten');

// Get the button that opens the modal
var forgotPasswordBtn = document.getElementById('forgot-password');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
forgotPasswordBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to validate and submit the form
function submitForm() {
    var code = document.querySelector('#forgotten input[type="text"]').value;
    var newPassword = document.getElementById('new-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // You can add your validation logic here

    // Example: Check if both passwords match
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass, you can submit the form
    // Your form submission code here
    // Example: document.getElementById("yourFormId").submit();
}

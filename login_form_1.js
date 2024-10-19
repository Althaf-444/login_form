$(document).ready(function () {
    // Event handler for form submission
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();  // Prevent form submission by default

        let isValid = true;

        // Clear previous error messages and borders
        $('.error').text(''); 
        $('input').css('border', '');  // Remove any previous red borders

        // Email validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
        if (email === '') {
            $('#emailError').text('Email is required.');
            $('#email').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        } else if (!emailRegex.test(email)) {
            $('#emailError').text('Invalid email format.');
            $('#email').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        }

        // Password validation
        const password = $('#password').val();
        if (password === '') {
            $('#passwordError').text('Password is required.');
            $('#password').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        } else if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            $('#password').css({
                "border": "2px solid red",
                "border-top": "none"
            });  // Add border-top: none
            isValid = false;
        }

        // You can add further actions here based on the validity of the form
    });

    // Clear errors and borders on input
    $('#email, #password').on('input', function () {
        $(this).css('border', '');  // Reset border on input change
        $(this).next('.error').text('');
    });

    // Toggle password visibility
    $('#showPassword').on('change', function () {
        const passwordField = $('#password');
        if ($(this).is(':checked')) {
            passwordField.attr('type', 'text'); // Show password
        } else {
            passwordField.attr('type', 'password'); // Hide password
        }
    });
});
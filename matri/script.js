// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the form element
    const form = document.getElementById('biodataForm');

    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Validate the form
        const isValid = validateForm();

        if (isValid) {
            // If the form is valid, show a success message
            // In a real application, you would submit the form data to a server here
            // e.g., using fetch()
            alert('Form submitted successfully!');
            
            // Optionally, you can reset the form
            // form.reset(); 
            
            // Or allow the form to actually submit to a server endpoint
            // event.target.submit();
        } else {
            // If the form is invalid, log a message (optional)
            console.log('Form has validation errors.');
        }
    });

    /**
     * Validates all form fields.
     * @returns {boolean} - True if the form is valid, false otherwise.
     */
    function validateForm() {
        // Start by assuming the form is valid
        let isValid = true;

        // Clear all previous error messages and input error styles
        clearAllErrors();

        // --- Field-by-Field Validation ---

        // 1. Full Name (Required, Text)
        if (!validateRequired('fullName', 'fullNameError', 'Full Name is required.')) {
            isValid = false;
        }

        // 2. Gender (Required, Select)
        if (!validateRequired('gender', 'genderError', 'Please select your gender.')) {
            isValid = false;
        }
        
        // 3. Date of Birth (Required, Date)
        if (!validateRequired('dob', 'dobError', 'Date of Birth is required.')) {
            isValid = false;
        }

        // 4. Marital Status (Required, Select)
        if (!validateRequired('maritalStatus', 'maritalStatusError', 'Please select your marital status.')) {
            isValid = false;
        }
        
        // 5. Phone (Required, Text)
        if (!validateRequired('phone', 'phoneError', 'Phone Number is required.')) {
            isValid = false;
        }
        
        // 6. Email (Required, Specific Format)
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (emailInput.value.trim() === '') {
            showError('email', 'emailError', 'Email Address is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError('email', 'emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        // 7. Address (Required, Textarea)
        if (!validateRequired('address', 'addressError', 'Address is required.')) {
            isValid = false;
        }

        // 8. Height (Required, Number)
        if (!validateRequired('height', 'heightError', 'Height is required.')) {
            isValid = false;
        }

        // 9. Education (Required, Text)
        if (!validateRequired('education', 'educationError', 'Education details are required.')) {
            isValid = false;
        }

        // 10. Occupation (Required, Text)
        if (!validateRequired('occupation', 'occupationError', 'Occupation is required.')) {
            isValid = false;
        }

        // 11. Father's Name (Required, Text)
        if (!validateRequired('fatherName', 'fatherNameError', "Father's Name is required.")) {
            isValid = false;
        }

        // 12. Mother's Name (Required, Text)
        if (!validateRequired('motherName', 'motherNameError', "Mother's Name is required.")) {
            isValid = false;
        }
        
        // 13. Photo (Required, File)
        const photoInput = document.getElementById('photo');
        if (photoInput.files.length === 0) {
            showError('photo', 'photoError', 'Please upload a photo.');
            isValid = false;
        }

        // --- End of Validations ---

        return isValid;
    }

    /**
     * A helper function to validate a required field.
     * @param {string} inputId - The ID of the input element.
     * @param {string} errorId - The ID of the error message span.
     ** @param {string} message - The error message to display.
     * @returns {boolean} - True if valid, false if empty.
     */
    function validateRequired(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        if (input.value.trim() === '') {
            showError(inputId, errorId, message);
            return false;
        }
        return true;
    }

    /**
     * A helper function to validate email format.
     * @param {string} email - The email string to test.
     * @returns {boolean} - True if the email format is valid.
     */
    function isValidEmail(email) {
        // A simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    /**
     * Displays an error message and adds error styling.
     * @param {string} inputId - The ID of the input element to style.
     * @param {string} errorId - The ID of the span to show the message in.
     * @param {string} message - The error message.
     */
    function showError(inputId, errorId, message) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorId);
        
        if (inputElement) {
            inputElement.classList.add('input-error');
        }
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    /**
     * Clears all error messages and error styles from the form.
     */
    function clearAllErrors() {
        // Remove .input-error class from all inputs
        const errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach((input) => {
            input.classList.remove('input-error');
        });

        // Clear text from all error-message spans
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((span) => {
            span.textContent = '';
        });
    }

});

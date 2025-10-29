// Get the display element
const display = document.getElementById('display');

/**
 * Appends the given value (number or operator) to the display.
 */
function appendToDisplay(value) {
    display.value += value;
}

/**
 * Clears the display.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Calculates the expression in the display.
 */
function calculateResult() {
    try {
        // Use the eval() function to evaluate the math expression
        // Note: eval() can be a security risk in complex applications,
        // but it's simple and fine for this basic calculator.
        const result = eval(display.value);
        
        // Display the result
        display.value = result;
    } catch (error) {
        // If there's an error (e.g., "5++2"), display 'Error'
        display.value = 'Error';
    }
}
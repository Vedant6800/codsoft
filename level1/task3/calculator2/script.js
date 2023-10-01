document.addEventListener('DOMContentLoaded', function () {
    let displayValue = '';

    // Function to append characters to the display
    function appendToDisplay(char) {
        displayValue += char;
        updateDisplay();
    }

    // Function to clear the display
    function clearDisplay() {
        displayValue = '';
        updateDisplay();
    }

    // Function to calculate the result
    function calculateResult() {
        try {
            displayValue = eval(displayValue).toString();
            updateDisplay();
        } catch (error) {
            displayValue = 'Error';
            updateDisplay();
        }
    }

    // Function to update the display
    function updateDisplay() {
        document.getElementById('display').value = displayValue;
    }

    // Attach click event listeners to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;
            if (buttonText === '=') {
                calculateResult();
            } else if (buttonText === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });

    // Prevent the 'Enter' key from submitting the form
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});

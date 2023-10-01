let displayValue = '0';
let isDarkMode = false;

function toggleTheme() {
    console.log('Toggle theme function called');
    isDarkMode = !isDarkMode;
    console.log('isDarkMode:', isDarkMode);
    const body = document.body;
    const calculator = document.querySelector('.calculator');
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    
    if (isDarkMode) {
        console.log('Switching to dark theme');
        
        body.classList.add('dark-mode');
        calculator.classList.add('dark-mode');
        display.classList.add('dark-mode');
        buttons.forEach((button) => {
            button.classList.add('dark-mode');
        });
    } else {
        console.log('Switching to light theme');
        body.classList.remove('dark-mode');
        calculator.classList.remove('dark-mode');
        display.classList.remove('dark-mode');
        buttons.forEach((button) => {
            button.classList.remove('dark-mode');
        });
    }
}

// Rest of your calculator functions
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(char) {
    if (displayValue === '0' && char !== '0') {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

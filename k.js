const readline = require('readline'); // Import the readline module for reading input from the command line

// Create an interface for reading input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to prompt the user for a number and validate the input
function getNumber(promptMessage, callback) {
    rl.question(promptMessage, (input) => {
        const num = Number(input); // Convert the input to a number
        if (isNaN(num)) { // Check if the input is a valid number
            console.log("Invalid input. Please enter a valid number.");
            getNumber(promptMessage, callback); // Prompt again if the input is invalid
        } else {
            callback(num); // Pass the valid number to the callback function
        }
    });
}

// Function to perform arithmetic operations and display the results
function performOperations(num1, num2) {
    console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
    if (num2 !== 0) {
        console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
    } else {
        console.log("Division: Division by zero is not allowed.");
    }
}

// Get the first number from the user
getNumber("Enter the first number: ", (num1) => {
    // Get the second number from the user
    getNumber("Enter the second number: ", (num2) => {
        performOperations(num1, num2); // Perform and display the arithmetic operations
        rl.close(); // Close the readline interface
    });
});




const readline = require('readline'); // Import the readline module for reading input from the command line

const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); // Create an interface for reading input

function getNumber(promptMessage, callback) {
    rl.question(promptMessage, input => { // Prompt the user with the given message
        const num = Number(input); // Convert the user input to a number
        if (isNaN(num)) { // Check if the input is not a valid number
            console.log("Invalid input. Please enter a valid number."); // Display error message for invalid input
            getNumber(promptMessage, callback); // Prompt again for input
        } else {
            callback(num); // Pass the valid number to the callback function
        }
    });
}

rl.question("Enter the first number: ", num1 => { // Prompt user to enter the first number
    getNumber("Enter the second number: ", num2 => { // Prompt user to enter the second number
        // Perform arithmetic operations and display results
        console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
        console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
        console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
        // Check if num2 is not zero to avoid division by zero
        console.log(num2 !== 0 ? `Division: ${num1} / ${num2} = ${num1 / num2}` : "Division: Division by zero is not allowed.");
        rl.close(); // Close the readline interface
    });
});


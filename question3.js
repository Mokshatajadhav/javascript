const readline = require('readline'); // Import the readline module for reading input from the command line
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); // Create an interface for reading input

rl.question("Enter a number: ", (input) => { // Prompt the user to enter a number
    const num = parseFloat(input); // Convert the user input to a floating-point number

    if (isNaN(num)) { // Check if the input is not a number
        console.log("Invalid input. Please enter a valid number."); // Display an error message for invalid input
    } else if (num > 0) { // Check if the number is greater than zero
        console.log("The number is positive."); // Display message if the number is positive
    } else if (num < 0) { // Check if the number is less than zero
        console.log("The number is negative."); // Display message if the number is negative
    } else { // If the number is neither positive nor negative, it must be zero
        console.log("The number is zero."); // Display message if the number is zero
    }

    rl.close(); // Close the readline interface after processing the input
});



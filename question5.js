const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Prompt the user to enter a numeric grade
rl.question("Enter the numeric grade (0-100): ", input => {
    const numericGrade = parseFloat(input); // Convert input to a number

    // Check if the input is not a number or is out of valid range
    if (isNaN(numericGrade) || numericGrade < 0 || numericGrade > 100) {
        console.log("Invalid input. Please enter a numeric grade between 0 and 100.");
    } else {
        // Determine the letter grade based on the numeric grade
        const letterGrade = 
            numericGrade >= 90 ? "A" :
            numericGrade >= 80 ? "B" :
            numericGrade >= 70 ? "C" :
            numericGrade >= 60 ? "D" : "F";

        // Display the calculated letter grade
        console.log(`Letter grade: ${letterGrade}`);
    }

    rl.close(); // Close the readline interface
});




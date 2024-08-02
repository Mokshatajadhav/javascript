// Iterate through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        continue; // Skip the rest of the loop for odd numbers
    }
    // Log even numbers to the console
    console.log(i);
}
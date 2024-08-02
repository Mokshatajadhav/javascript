
//Question1:-
//Function to capitalize the first letter of a string
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to capitalize each string in an array
function capitalizeArray(arr) {
    // Create a new array to store capitalized strings
    let capitalizedArray = [];

    // Iterate through each string in the input array
    for (let i = 0; i < arr.length; i++) {
        // Capitalize the current string and add it to the new array
        let capitalizedString = capitalizeString(arr[i]);
        capitalizedArray.push(capitalizedString);
    }

    // Return the new array with capitalized strings
    return capitalizedArray;
}

// Example usage:
let inputArray = ["apple", "banana", "orange"];
let capitalizeResult = capitalizeArray(inputArray);
console.log(capitalizeResult); // Output: ["Apple", "Banana, "Orange"]


//Question2:-

function findSecondLargest(arr) {
    // Check if the array has at least two elements
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    // Initialize two variables to keep track of the largest and second largest values
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than the first largest
        if (arr[i] > firstLargest) {
            // Update second largest to be the previous largest
            secondLargest = firstLargest;
            // Update first largest to the current element
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            // If the current element is greater than second largest and not equal to first largest
            // Update second largest to the current element
            secondLargest = arr[i];
        }
    }

    // Check if second largest was updated from its initial value
    if (secondLargest === -Infinity) {
        return "No second largest element found";
    } else {
        // Return the second largest element
        return secondLargest;
    }
}

// Example usage
console.log(findSecondLargest([4, 6, 7, 9, 8])); // Output: 8



//Question 3:-
// Function to extract values by key from an array of objects
function extractValuesByKey(arr, key) {
    // Initialize an empty array to store the results
    let res = [];

    // Iterate through each object in the array
    arr.forEach(obj => {
        // To check if object has specified key
        if (obj.hasOwnProperty(key)) {
            // Push the value corresponding to the key 
            res.push(obj[key]);
        } else {
            
            // Push undefined to the result array
            res.push(undefined);

        }
    });

    // Returns array of extracted values
    return res;
}

// Example usage:
const data = [
    { id: 1, name: 'Alan', age: 31 },
    { id: 2, name: 'Scott', age: 26 },
    { id: 3, name: 'Charls', age: 40 }
];

// To extract values by key 'name'
const names = extractValuesByKey(data, 'name');
console.log(names); // Output: ['Alan', 'Scott', 'Charls']

// To extract values by key 'age'
const ages = extractValuesByKey(data, 'age');
console.log(ages); // Output: [31, 26, 40]

// If key is not present in an object, it will return undefined 
const emails = extractValuesByKey(data, 'email');
console.log(emails); // Output: [undefined, undefined, undefined]


//Question 4:-
//Function to calculate factorial of a number

function factorial(n) {
    // If n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Calculate factorial by multiplying n with each number less than it down to 1
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

// Function to calculate factorial of elements in an array
function factorialArray(arr) {
    // Initialize an empty array to store  results
    let result = [];

    // Iterate through each element in the input array
    arr.forEach(element => {
        // Calculate factorial of the current element and push to result array
        result.push(factorial(element));
    });

    // Return the array of factorial results
    return result;
}

// Example usage:
const inputArr = [1, 2, 3, 4, 5];
// Calculate factorial for each element in the array
const factResults = factorialArray(inputArr);
console.log(factResults); // Output: [1, 2, 6, 24, 120]


//Question 5:-
// Function to find intersection of two arrays
function findIntersection(arr1, arr2) {
    // Initialize an empty array to store intersection elements
    let intersection = [];

    // Loops through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // Checks if the current element is also in arr2 and not already in intersection array
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            // Adds the element to intersection array
            intersection.push(arr1[i]);
        }
    }

    // Return the array of intersection
    return intersection;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Find intersection of array1 and array2
const intersectionArray = findIntersection(array1, array2);
console.log(intersectionArray); // Output: [3, 4, 5]      
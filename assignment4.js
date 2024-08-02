// Question 1: Function to Get Keys and Values of an Object
function getKeysAndValues(obj) {
    return Object.entries(obj);
  }
  
  // Example usage for Question 1
  let person = { name: "John", age: 30 };
  console.log(getKeysAndValues(person)); // Output: [["name", "John"], ["age", 30]]
  
  
  // Question 2: Function to Convert a String to Title Case
  function toTitleCase(str) {
    return str
      .split(" ") // Split the string by spaces into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first character of each word
      .join(" "); // Join the words back into a single string
  }
  
  // Example usage for Question 2
  console.log(toTitleCase("hello world")); // Output: Hello World
  
  
  // Question 3: Function to Check if an Object is Empty
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }
  
  // Example usage for Question 3
  console.log(isEmptyObject({})); // Output: true
  console.log(isEmptyObject({ name: "John" })); // Output: false
  
  
  // Question 4: Function to Count the Number of Occurrences of Each Character in a String
  function charCount(str) {
    let count = {};
    for (let char of str) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  }
  
  // Example usage for Question 4
  console.log(charCount("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }
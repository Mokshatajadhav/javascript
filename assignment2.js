// / Question 1: Multiplication Table Generator
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    process.stdout.write(${i} * ${j} = ${i * j}\t);
  }
  console.log();
}

// Question 2: Sum of Numbers in an Array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(The sum of the numbers is: ${sum});

// Question 3: Palindrome Checker
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("LEVEL")); // true
console.log(isPalindrome("Hello")); // false

// Question 4: Fibonacci Sequence Generator
function generateFibonacci(n) {
  let fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence.slice(0, n);
}

console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Question 5: Block Scope with Let and Const
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}

console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
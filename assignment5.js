// Question 1: Function Returning a Closure to Add a Specific Number
function createAdder(number) {
    // Return a function that takes an argument and adds the specified number to it.
    return function(x) {
      return x + number;
    };
  }
  
  // Example usage for Question 1
  const add5 = createAdder(5);
  console.log(add5(10)); // Outputs: 15
  
  const add10 = createAdder(10);
  console.log(add10(10)); // Outputs: 20
  
  console.log('---------------------------');
  
  // Question 2: Function Using Closure to Track How Many Times It Has Been Called
  function createCallTracker() {
    let callCount = 0;
  
    // Return a function that increments and logs the call count.
    return function() {
      callCount++;
      console.log(`Function has been called ${callCount} times`);

    };
  }
  
  // Example usage for Question 2
  const trackCall = createCallTracker();
  trackCall(); // Outputs: Function has been called 1 times
  trackCall(); // Outputs: Function has been called 2 times
  
  console.log('---------------------------');
  
  // Question 3: Prototype Method to Calculate the Area of a Rectangle
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  
  // Add a method to the prototype to calculate the area of the rectangle.
  Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
  };
  
  // Example usage for Question 3
  const rect = new Rectangle(10, 20);
  console.log(rect.calculateArea()); // Outputs: 200
  
  console.log('---------------------------');
  
  // Question 4: Function to Create an Object and Add Methods Using Prototype for Circle
  function Circle(radius) {
    this.radius = radius;
  }
  
  // Add a method to the prototype to calculate the perimeter of the circle.
  Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
  };
  
  // Add a method to the prototype to calculate the area of the circle.
  Circle.prototype.calculateArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
  
  // Example usage for Question 4
  const circle = new Circle(10);
  console.log(circle.calculatePerimeter()); // Outputs: 62.83185307179586
  console.log(circle.calculateArea());      // Outputs: 314.1592653589793
  
  console.log('---------------------------');
  
  // Question 5: Function Returning a Set of Functions to Manipulate a Private Counter
  function createCounter() {
    let count = 0;
  
    // Return an object with methods to interact with the counter.
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      reset: function() {
        count = 0;
      },
      getValue: function() {
        return count;
      }
    };
  }
  
  // Example usage for Question 5
  const counter = createCounter();
  
  counter.increment();
  console.log(counter.getValue()); // Outputs: 1
  
  counter.increment();
  console.log(counter.getValue()); // Outputs: 2
  
  counter.decrement();
  console.log(counter.getValue()); // Outputs: 1
  
  counter.reset();
  console.log(counter.getValue()); // Outputs: 0
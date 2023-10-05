// Start
// Chapters35-38. (FUNCTION)
// 1. Write a function that displays current date & time in your
// browser.
// Answer
function displayCurrentDateTime() {
    var currentDate = new Date();
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
    var dateTimeString = date + ' ' + time;
    var paragraph = document.createElement('p');
    paragraph.textContent = dateTimeString;
    document.body.appendChild(paragraph);
}
displayCurrentDateTime();
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// Answer
function greetUser(firstName, lastName) {
    var fullName = `${firstName} ${lastName}`;
    console.log(`Hello, ${fullName}!`);
  }
  var firstName = prompt("Enter your first name");
  var lastName = prompt("Enter your Last name");
  greetUser(firstName, lastName);
//   3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// Answer
function addNumbers() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return NaN; 
  }
  var sum = num1 + num2;
  return sum;
}
var result = addNumbers();
alert("The sum of the two numbers is: " + result);
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// Answer
function calculate(num1, num2, operator) {
  var result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        return "Division by zero is not allowed.";
      }
      result = num1 / num2;
      break;
    default:
      return "Invalid operator. Please use +, -, *, or /.";
  }

  return result;
}
var num1 = +prompt("Enter your first num.");
var num2 = +prompt("Enter your Second num.");
var operator = prompt("Enter your operator");
var result = calculate(num1, num2, operator);
document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
// 5. Write a function that squares its argument.
// Answer
function square(number) {
  return number * number;
}
var num = +prompt("Enter your num.");
var squared = square(num);
console.log(`The square of ${num} is ${squared}`);
// 6. Write a function that computes factorial of a number.
// Answer
// I Have Not Understand This Question???
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// Answer
function countNumbers(start, end) {
  if (start <= end) {
    for (var i = start; i <= end; i++) {
      document.write(i + '<br>');
    }
  } else {
    document.write('Start number should be less than or equal to the end number.');
  }
}
countNumbers(1, 10);
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// Answer
// I Have Not Understand This Question???
// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// Answer
// i. Arguments as value
function calculateRectangleArea(width, height) {
  return width * height;
}
const area1 = calculateRectangleArea(5, 8); 
console.log(area1); 

// ii. Arguments as variables
function calculateRectangleArea(width, height) {
  return width * height;
}

const width = 5;
const height = 8;
const area2 = calculateRectangleArea(width, height);
console.log(area2); 
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// Answer
// I Have Not UnderStand This Question??
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// Answer 
// T Have Not UnderStand This Question??
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// Answer
// I Have Not UnderStand This Question??
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// Answer
// I Have Not UnderStand THis Question??
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// Answer
// I Have Not UnderStand This Question??
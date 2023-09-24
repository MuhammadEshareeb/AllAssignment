// START
// Chapters 9-11.(USER INPUT & CONDITIONAL STATEMENT)
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// Answer
var cityName = prompt("Enter a city name: ");
if (cityName === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + cityName);
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// Answer
var gender = prompt("Enter your gender (Male or Female): ");
if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Answer
var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, Green): ");
switch (signalColor) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid input or color not recognized");
}
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// Answer
var remainingFuel = prompt("Enter the remaining fuel in liters:");
if (remainingFuel < 0.25) {
  console.log("Please refill the fuel in your car");
} else {
  console.log("You have enough fuel.");
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Answer for a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Answer for b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// Answer for c.
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// Answer for d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// Answer for e.
if (true) {
    alert("True");
  }
  if (false) {
    alert("False");
  }  
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// Answer for f.
if("car" < "cat"){
    alert("car is smaller than cat");
  }
//   6. Write a program to take input the marks obtained in three
//   subjects & total marks. Compute & show the resulting
//   percentage on your page. Take percentage & compute
//   grade as per following table:  
// Answer
var calculateGradePercentage =("")
    if (percentage === 80) {
        alert("A-one")
    } else{
        alert("Excllent")
    }
    if (percentage === 70) {
        alert("A")
    } else{
        alert("Good")
    }
    if (percentage === 60) {
        alert("B")
    } else{
        alert("You Need To Improve")
    }
    if (percentage === 60 ) {
        alert("Fail")
    } else{
        alert("Sorry")
    }
 // Show the total marks, marks obtained, percentage, grade &
 // remarks like:
 // Calculate the total marks
    var totalMarks = 300;
 // Calculate the total marks obtained
    var totalObtainedMarks = 219;
  // Calculate the percentage
    var percentage = 73;
 // Calculate the grade
    var grade =("B");
 // Display the Remarks
  var remarks = ("You Need TO Improve");
//   7. Guess game:
//   Store a secret number (ranging from 1 to 10) in a variable.
//   Prompt user to guess the secret number.
//   a. If user guesses the same number, show “Bingo! Correct
//   answer”.
//   b. If the guessed number +1 is the secret number, show
//   “Close enough to the correct answer”.
// Answer
var secretNumber = Math.floor(Math.random() * 10) + 1;
// Prompt the user to guess the secret number
const userGuess =prompt("Guess the secret number (between 1 and 10):");
// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, incorrect guess. The secret number was " + secretNumber);
}
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3...
// Answer
var userInput = prompt("Enter a number:");
// Convert the input to a number
var number = parseInt(userInput);
// Check if the number is divisible by 3
if (number % 3 === 0) {
  console.log(`${number} is divisible by 3.`);
} else {
  console.log(`${number} is not divisible by 3.`);
}
// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// Answer
var userInput = prompt("Enter a number:");
var number = parseInt(userInput);
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// Answer
var userInput = prompt("Enter the temperature in degrees Celsius:");
var temperature = parseFloat(userInput);
if (temperature > 40) {
  console.log("It is too hot outside.");
} else if (temperature > 30) {
  console.log("The Weather today is Normal.");
} else if (temperature > 20) {
  console.log("Today Weather is cool.");
} else if (temperature > 10) {
  console.log("OMG! Today weather is so Cool.");
} else {
  console.log("It's freezing outside!");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Answer
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operator = prompt("Enter the operation (+, -, *, /, %):");
let result;
// Check the operator and perform the corresponding operation
if (operator === "+") {
  result = firstNumber + secondNumber;
} else if (operator === "-") {
  result = firstNumber - secondNumber;
} else if (operator === "*") {
  result = firstNumber * secondNumber;
} else if (operator === "/") {
  if (secondNumber === 0) {
    result = "Cannot divide by zero";
  } else {
    result = firstNumber / secondNumber;
  }
} else if (operator === "%") {
  if (secondNumber === 0) {
    result = "Cannot calculate modulus with zero";
  } else {
    result = firstNumber % secondNumber;
  }
} else {
  result = "Invalid operator";
}
console.log(`Result: ${result}`);

// ========== THE END ==========


// START
// chapters12-13.(IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS)
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// Answer
var checkInputType =("")
    if (typeof input === 'string' && input.length === 1) {
      var charCode = input.charCodeAt(0);
      if (charCode >= 48 && charCode <= 57) {
        console.log("Input is a number");
      } else if (charCode >= 65 && charCode <= 90) {
        console.log("Input is an uppercase letter");
      } else if (charCode >= 97 && charCode <= 122) {
        console.log("Input is a lowercase letter");
      } else {
        console.log("Input is not a number, uppercase letter, or lowercase letter");
      }
    } else {
      console.log("Invalid input. Please enter a single character.");
    }
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// Answer
var compareIntegers =("num1, num2") 
    if (num1 === num2) {
      console.log("The two integers are equal.");
    } else if (num1 > num2) {
      console.log("The larger integer is:", num1);
    } else {
      console.log("The larger integer is:", num2);
    }
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
//   Answer
var userInput = prompt("Enter a number:");
// Check if the user input is a valid number
if (!isNaN(userInput)) {
  if (userInput > 0) {
    console.log("The number is positive.");
  } else if (userInput < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
//   Answer
var isVowel = ("char") 
if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    console.log("True");
  } else {
    console.log("Fales");
  }
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
//   Answer
// Step 1: Store the correct password in a variable
var correctPassword = "mySecretPassword";
 // Change this to your desired correct password
// Step 2: Ask the user to enter their password
var userPassword = prompt("Please enter your password:");
// Step 3: Validate the entered password
if (!userPassword) {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// Answer
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// =========== THE END ==========





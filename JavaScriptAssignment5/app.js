// START
// Chapter 21 (Changing Case)
// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.
// Answer
// var allLower = userInput.toLowerCase();
// 2. Convert the string represented by x to lower-case and assign
// the result to the same variable.
// Answervar 
x = "SomeString";
x = x.toLowerCase();
// 3. Convert the string represented by y to upper-case and assign
// the result to the same variable.
// Answer
var y = "SomeString";
y = y.toUpperCase();
// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.
// Answer
var originalString = "SomeString";
var lowerCaseString = originalString.toLowerCase();
// 5. Convert the string represented by an array element to lower-
// case and assign it to a variable that hasn't been declared
// beforehand.
// Answer
var myArray = ["Hello", "World"];
var elementIndex = 0; 
var lowerCaseElement = myArray[elementIndex].toLowerCase();
// 6. Display in an alert the upper-case version of the string
// represented by a variable.
// Answer
var myString = "Hello, World!";
var upperCaseString = myString.toUpperCase();
alert(upperCaseString);
// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation
// is the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.
// Answer
var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
console.log(capitalizedCityName);
// ===========END==========

// START
// Chapter 22 - 25 (Strings)
// 1. "captain" has been assigned to variable “sameWords”. You
// want to slice "ap" out of it.
// Answer
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);
console.log(slicedPart); 
// 2. The number of characters in the string will be assigned to the
// variable.
// Answer
var someString = "example";
var numberOfCharacters = someString.length;
console.log(numberOfCharacters); 
// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it
// to the variable seg, which hasn't been declared beforehand.
// Answer
var animal = "elephant";
var seg = animal.slice(1, 5); // This will slice characters at indices 1 to 4
console.log(seg); 
// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.
// Answer
var someString = "example";
var numberOfCharacters = someString.length;
var secondVariable = numberOfCharacters; // Assigning the number of characters to a second variable
console.log(secondVariable); 
// 5. In a first statement measure how many characters there are in
// a string represented by a variable. In a second statement slice
// all but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.
// Answer
var originalString = "example";
var characterCount = originalString.length; // Measure the number of characters
var slicedString = originalString.slice(1, -3); // Slice all but the first character and last 3 characters
console.log(characterCount); // This will log the number of characters (7 in this case) to the console
console.log(slicedString); // This will log the sliced string ("xam") to the console
// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?
// Answer
// True ;
// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?
// Note: Try the above both examples by yourself.
// Answer
"The value of indx will be 3";
// 8. Find the index of the first character of the last instance of "go"
// in the string represented by the variable text and assign the
// number to the variable indx, which hasn't been declared
// beforehand.
// Answer
var indx = text.lastIndexOf("go");
// 9. Code the first line of an if statement that tests whether a
// segment with an index represented by indexNum exists in a
// string.
// Answer
if (typeof str[indexNum] !== 'undefined') {
    yes
} else {
     no
}
// 10. In this string "abcde", what character is at index 2? (Use
// charAt)
// Answer
var str = "abcde";
var charAtIndex2 = str.charAt(2); 
// 11. Find the 10th character in the string represented by text
// and assign it to the variable cha, which hasn't been declared
// beforehand.
// Answer
var cha = text.charAt(9); 
// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.
// Answer
var x = str.charAt(str.length - 1);
// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.
// Answer
var cha = input.charAt(4); 
// 14. Code the first line of an if statement that tests whether
// the 3rd character of a string represented by a variable is a
// particular character.
// Answer
if (str.charAt(2) === 'your_character_here') {
    // The 3rd character is the specified character
} else {
    // The 3rd character is not the specified character
}
// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to
// an element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which
// hasn't been declared beforehand.
// Answer
var str = "your_string_here";
var charArray = [];
for (var i = 0; i < str.length; i++) {
    charArray.push(str.charAt(i));
}
var newStr = str.replace("1", "one");
// 16. In a string represented by str replace the first instance of
// "1" with "one" and assign the revised string to newStr, which
// hasn't been declared beforehand.
// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");
// Answer
var x = "abcabcabc";
var y = x.replaceAll("a", "z"); 
// ==================END=====================

// START
// Chapter 26 (Rounding Numbers)
// 1. Form a statement that rounds a number to the nearest integer.
// Answer
var roundedNumber = Math.round(yourNumber);
// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// Answer
var roundNum = Math.ceil(origNum);
// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.
// Answer
var roundNum = Math.floor(origNum);
// 4. Round a number represented by a variable and assign the
// result to a second variable that hasn't been declared
// beforehand.
// Answer
var yourNumber = 3.14159; // Replace with your actual number
var roundedResult = Math.round(yourNumber);
// 5. Round .5 to 0 and assign it to a variable that hasn't been
// declared beforehand.
// Answer
var roundedValue = Math.round(0.5);
// ====================END=================

// START
// Chapter 27 (Random Numbers)
// 1. Convert a random number generated by JavaScript to a number
// in the range 1 to 50
// Answer
// Generate a random number between 1 and 50
var randomNum = Math.floor(Math.random() * 50) + 1;
console.log(randomNum);
// 2. Generate a random number and assign it to a variable that
// hasn't been declared beforehand.
// Answer
// Assign a random number to a variable without prior declaration
var randomVariable = Math.random();
console.log(randomVariable);
// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.
// Answer
// Simulate a dice roll with values 1 to 6
var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a ${diceRoll}`);
// 4. You have to create a toss (head/tail) in JavaScript with the use
// of pseudo-random number.
// Answer
// Simulate a coin toss (heads or tails)
var coinToss = Math.random() < 0.5 ? 'Heads' : 'Tails';
console.log(`The coin landed on ${coinToss}`);
// =============END==============

// START
// Chapter 28, 29 (Converting Strings)
// 1. How do you convert a string to an integer in JavaScript?
// Answer
var stringNumber = "42"; 
var integerNumber = parseInt(stringNumber, 10);
console.log(integerNumber); 
// 2. Write a JavaScript function to convert the string "123" to an
// integer.
// Answer
// I Have Not Understand This Question??
// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
// Answer
var decimalString = "3.14";
var floatNumber = parseFloat(decimalString);
console.log(floatNumber); 
// 4. How can you check if a string can be successfully converted to
// an integer or decimal in JavaScript before performing the
// conversion?
// Answer
// I Have Not Understand This Question??
// 5. How can you convert a number to a string in JavaScript?
// Answer
var number = 42;
var stringNumber = number + "";
console.log(stringNumber); 
// 6. Write a JavaScript function to convert the number 42 to a
// string.
// Answer
// I Have Not Understand This Question??
// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?
// Answer
var decimalString = "3.14";
var integerNumber = parseInt(decimalString, 10);
console.log(integerNumber); 
// ===============END==============

// START
// Chapter 30 (Controlling the length of decimals)
//1. Code a statement that rounds a number represented by num to
//4 places, converts it to a string, and assigns it to newNum, which
//hasn't been declared beforehand.
// Answer
var num = 123.456789; 
var newNum = num.toFixed(4).toString();
//2. In a single statement round a number represented by a variable
//to 2 places, convert it to a string, convert it back to a number,
//and assign it to the same variable.
// Answer
var num = 12.3456; // Replace this with your number
num = parseFloat(num.toFixed(2).toString());
//3. Code the first line of an if statement that tests whether the
//number represented by num, rounded to 2 digits and converted
//to a string, has more than 4 characters in it.
// Answer
if (num.toFixed(2).toString().length > 4) {}
//4. Assign a number with many decimal places to a variable.
//Code an alert that displays the number rounded to 2 decimal
//places and converted to a string.
// Answer
var numWithDecimals = 123.456789; 
var roundedNumAsString = numWithDecimals.toFixed(2).toString();
alert(roundedNumAsString);
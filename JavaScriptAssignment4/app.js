// START
// Chapters 17-20.(ARRAYS AND LOOP)
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// Answer
var emptyMultiArray = [];
// Adding arrays to create a 2D array
emptyMultiArray.push([]);
emptyMultiArray.push([]);
emptyMultiArray[0].push(1);
emptyMultiArray[0].push(2);
emptyMultiArray[1].push(3);
emptyMultiArray[1].push(4);
console.log(emptyMultiArray);
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// Answer
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
//   3. Write a program to print numeric counting from 1 to 10.
// Answer
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//   4. Write a program to print multiplication table of any
//   number using for loop. Table number & length should be
//   taken as an input from user.  
// Answer
// Get the number and length from the user
var  tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
var  tableLength = parseInt(prompt("Enter the length of the multiplication table:"));
if (!isNaN(tableNumber) && !isNaN(tableLength)) {
  // Print the multiplication table
  console.log(`Multiplication table for ${tableNumber} with length ${tableLength}:`);
  for (var i = 1; i <= tableLength; i++) {
    var result = tableNumber * i;
    console.log(`${tableNumber} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
// Answer
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log("Printing items using a for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// Answer
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
console.log("a. Counting:");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log("\nb. Reverse counting:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
console.log("\nc. Even:");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
console.log("\nd. Odd:");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("\ne. Series:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// Answer
// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search for:");
// Convert the user input to lowercase (for case-insensitive search)
var searchTerm = userInput.toLowerCase();
// Use the Array includes() method to check if the item is in the array
if (A.includes(searchTerm)) {
  console.log(`"${userInput}" is found in the list.`);
} else {
  console.log(`"${userInput}" is not found in the list.`);
}
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
// Answer
// Define the array
var a = [24, 53, 78, 91, 12];
var max = a[0]; 
for (var i = 1; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i]; 
  }
}
console.log("The largest number in the array is: " + max);
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// Answer
// Define the array
var b = [24, 53, 78, 91, 12];
var min = b[0]; 
for (var i = 1; i < b.length; i++) {
  if (b[i] < min) {
    min = b[i];
  }
}
console.log("The smallest number in the array is: " + min);
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
// Answer
// Iterate from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i); 
    }
  }
  
//   =========== END ==========
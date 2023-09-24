// START
// chapters14-16.(ARRAYS)
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// Answer
var studentNames = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
// Answer
var studentNames = new Array();
// 3. Declare and initialize a strings array.
// Answer
var stringsArray = ["apple", "banana", "cherry"];
// 4. Declare and initialize a numbers array.
// Answer
var numbersArray = [1, 2, 3, 4, 5];
// 5. Declare and initialize a boolean array.
// Answer
var booleanArray = [true, false, true, false];
// 6. Declare and initialize a mixed array.
// Answer
var mixedArray = ["apple", 123, true, "banana", 456, false];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// Answer
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Education Qualifications in Pakistan</h1>");
qualifications.forEach(qualification => {
    document.write("<li>" + qualification + "</li>");
});
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// Answer
var studentNames = ["Student 1", "Student 2", "Student 3"];
var studentScores = [320, 230, 480]; 
var studentPercentages = studentScores.map(score => (score / 500) * 100);
for (var i = 0; i < studentNames.length; i++) {
  console.log(`${studentNames[i]} scored ${studentScores[i]} out of 500, which is ${studentPercentages[i]}%.`);
}
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// Answer
// Initialize the array with color names
var colors = ["Red", "Green", "Blue"];
// Display the array elements
console.log("Initial Array:", colors);
// a. Add a color to the beginning of the array
var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
console.log("Array after adding at the beginning:", colors);
// b. Add a color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
console.log("Array after adding at the end:", colors);
// c. Add two more colors to the beginning of the array
colors.unshift("Yellow", "Orange");
console.log("Array after adding two colors at the beginning:", colors);
// d. Delete the first color in the array
colors.shift();
console.log("Array after deleting the first color:", colors);
// e. Delete the last color in the array
colors.pop();
console.log("Array after deleting the last color:", colors);
// f. Add a color at a specific position/index
var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
var colorToAddAtIndex = prompt("Enter a color to add at that index:");
if (indexToAddColor >= 0 && indexToAddColor <= colors.length) {
    colors.splice(indexToAddColor, 0, colorToAddAtIndex);
}
console.log("Array after adding a color at a specific index:", colors);
// g. Remove color(s) from a specific position/index
var indexToDeleteFrom = parseInt(prompt("Enter the index to delete color(s) from:"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
if (indexToDeleteFrom >= 0 && indexToDeleteFrom < colors.length && numberOfColorsToDelete > 0) {
    colors.splice(indexToDeleteFrom, numberOfColorsToDelete);
}
console.log("Array after deleting color(s) from a specific index:", colors);
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// Answer
var studentScores = [320, 230, 480, 120];
// Sort the array in ascending order
var orderedStudentScores = studentScores.sort((a, b) => a - b);
// Convert the sorted array to a comma-separated string
var sortedScoresString = orderedStudentScores.join(', ');
// Display the sorted scores
console.log("Ordered Student Scores:", sortedScoresString);
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// Answer
// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// Create an empty array to store selected cities
var selectedCities = [];
// Copy three elements from the cities array to selectedCities
for (var i = 0; i < 4; i++) {
  if (i < cities.length) {
    selectedCities.push(cities[i]);
  }
}
// Print the selected cities
console.log("Selected Cities:", selectedCities);
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// Answer
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString);
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// Answer
// I HAVE NOT UNDERSTANAD THIS QUESTION??
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
// Answer
// I HAVE NOT UNDERSTANAD THIS QUESTION??
// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:
// Answer
  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
  var dropdownHtml = '<select id="manufacturerSelect">';
  for (var i = 0; i < manufacturers.length; i++) {
      dropdownHtml += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
  }
  dropdownHtml += '</select>';
  document.write("<h1>Phone Manufacturers:</h1>");
  document.write(dropdownHtml);

  // ========== END ==============
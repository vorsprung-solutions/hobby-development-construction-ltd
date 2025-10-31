
// Create a new Date object
var currentDate = new Date();

// Get the current month (0-based, where January is 0 and December is 11)
var currentMonthIndex = currentDate.getMonth();

// Array of month names
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Get the current month name
var currentMonthName = monthNames[currentMonthIndex];

// Output the result
console.log("Current month: " + currentMonthName);

// index.js - Lab 8: Anon Functions & Callbacks 
// Author: Priscella Dolang
// Date: 11/5/23

// Creating Addition Function
// General Code Outline for entire document credited to:
// Wes Modes - Canvas Page Lab 8  

function adding(x) {
    var results = 5 + x
    return results;
}

// Testing Addition Function 
console.log("What is 13 + 5? ", adding(13));
console.log("What is -30 + 5? ", adding(-30));

// Create an array with integers 
numberArray = [40, -3, 82, 21, -6, 375]
console.log("My array ", numberArray);

var resultOne = numberArray.map(adding)
// Should return [45, 2, 87, 26, -1, 380] 
console.log("Testing Addition: ", resultOne);

var resultTwo = numberArray.map(function(subtract){
    return subtract - 5;
})
// Should return [35, -8, -77, 16, -11, 370]
console.log("Subtracting 5 from array: ", resultTwo);

// Anonymous function + another callback function 
setTimeout(function() {
    console.log("This is a message from Priscella- HI!");
}, 4000); 
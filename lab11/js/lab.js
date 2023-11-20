// index.js - Lab 11: JavaScript Events and Forms
// Author: Priscella Dolang
// Date: 11/19/23


// Credit to Wes Modes: Canvas Page for Lab 11

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    // Convert string into an array and back again to sort it 
    return inputString.split('').sort().join('');
}

// Click listener for name button
$("#submit-name").click(function() {
    // Get value of input field 
    const userName = $("#user-name").val();
    // Sorting 
    userNameSorted = sortString(userName);
    // Append a new div to our output div
    $("#output").append('<div class="text"><p>Your name: ' + userNameSorted + '</p></div>');
});

// Bonus Task 2 

// Click listener for color button 
$("#submit-color").click(function () {
    const userColor = $("#fav-color").val();
    $("#output").append('<div class="color"><p>Your favorite color: ' + userColor + '</p></div>');
});

// Click listener for birthday button
$("#submit-birth").click(function () {
    const userBirthDay = $("#birth-day").val();
    $("#output").append('<div class="date"><p>Your birthday: ' + userBirthDay + '</p></div>');
});

// Click listener for number button 
$("#submit-number").click(function () {
    const userNumber = $("#fav-number").val();
    $("#output").append('<div class="number"><p>Your favorite number: ' + userNumber + '</p></div>');
});
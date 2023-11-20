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

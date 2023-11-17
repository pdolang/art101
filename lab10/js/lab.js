// index.js - Lab 10: JavaScript for the Web
// Author: Priscella Dolang
// Date: 11/16/23


// Credit to Wes Modes: Canvas Page for Lab 10 

// Function to create random text 
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Loren Ipsum text 
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generates random Loren Ipsum text 
    return text.slice(randStart, randStart + randLen);
}

// Event listener for button from HTML 
$("#make-convo").click(function(){
    // Getting new fake dialogue 
    const newText = generateRandomText();
    // Appending the new div to our output div in our HTML file 
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
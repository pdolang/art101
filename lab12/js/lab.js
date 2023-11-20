// index.js - Lab 12: Conditionals
// Author: Priscella Dolang
// Date: 11/23/23


// Credit to Wes Modes: Canvas Page for Lab 12

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// Dependent on length 
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    // Conditionals for sorting requirements
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else if (mod == 3) {
        return "Hufflepuff"
    }
}

// Getting the value of user input and running it through sortingHat()
// Will return a statement with the user's sorted house result 
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})


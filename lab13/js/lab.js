// index.js - Lab 13: Loops
// Author: Priscella Dolang
// Date: 11/26/23


// Credit to Wes Modes: Canvas Page for Lab 13 & https://wmodes.github.io/art101/lab13/index.html
// Credit to ChatGPT for some of the jQuery selectors 

var maxFactors = 4;

var outputEl = $("#output");

// Get the values from the webpage and write them in an object
function getFactorObj() {
    var factorObj = {};
    for (var factor=0; factor<maxFactors; factor++) {
        var numId = "num" + factor;
        var textId = "text" + factor;
        var numValue = $("#" + numId).val();
        var textValue = $("#" +textId).val();
        console.log(factor + ") num:", numValue, "text:", textValue);
        // If either value is blank, do not use it 
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

function outputToPage(str) {
    var newEl = $("<p>").html(str);
    outputEl.append(newEl);
}

// Given a number and an object that looks like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// Loops over the numbers and outputs the number and the matching text for factors

function fizzBuzzBoom(maxNums, factorObj) {
    // Iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
        // Reset output string
        var outputStr = "";
        // Iterate over the factors we got from the HTML
        for (var factor in factorObj) {
            // Check to see if this num is a multiple of factor
            if (num % factor == 0) {
                // If yes, then add the text to the output string
                outputStr += factorObj[factor];
            }
        }
        // Now if we have words in outputStr, format it like this " - Fizz!"
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}

// Error Code when not all values needed are inputted 
function reportError(str) {
    // outputEl.html = "<div class='error'>" + str + "</div>";
    outputEl.html("<div class='error>" + str + "</div");
}

// Click listener 
$("#submit").click(function() {
    var max = $("#max").val();
    console.log("max:", max)
    if (! max) {
        reportError("Please provide a maximum");
        return;
    }
    var factorObj = getFactorObj();
    console.log("factorObj:", factorObj);
    if (Object.keys(factorObj).length === 0) {
        reportError("Please provide at least one factor and text");
        return;
    }
    // Clear error if there is one
    // outputEl.html = "";
    outputEl.html("");
    fizzBuzzBoom(max, factorObj);
    outputEl.addClass("cols");
});

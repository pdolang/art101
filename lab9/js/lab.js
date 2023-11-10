// index.js - Lab 9: Libraries & jQuery 
// Author: Priscella Dolang
// Date: 11/9/23

// Using document.ready to make sure code runs after website loads 
$(document).ready(function () {
    // Creating buttons in each section 
    $(".challenge").append("<button class='white-button'>Click This Button</button>");
    $(".problems").append("<button class='blue-button'>Click This Button</button>");
    $(".reflection").append("<button class='yellow-button'>Click This Button</button>");
    $(".results").append("<button class='black-button'>Click This Button</button>");

    // Color changing button for Challenge section
    $(".white-button").click(function() {
        $(".challenge").toggleClass("challengespecial");
    })

    // Color changing button for Problems section 
    $(".blue-button").click(function () {
        $(".problems").toggleClass("problemsspecial");
    })

    // Color Changing button for Reflection section 
    $(".yellow-button").click(function () {
        $(".reflection").toggleClass("reflectionspecial");
    })

    // Color Changing button for Results section 
    $(".black-button").click(function () {
        $(".results").toggleClass("resultsspecial");
    })

    // Bonus Task 
    $("#content").prepend("<button class='bonus-button'>Fun Button</button>");

    $(".bonus-button").click(function () {
        $("button").toggleClass("bonusbutton");
    })
    
})
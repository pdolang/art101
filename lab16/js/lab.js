// index.js - Lab 16: JSON and APIs
// Author: Priscella Dolang
// Date: 12/7/23

// Credit to Wes Modes Canvas Page for Lab 16
// Credit to https://stackoverflow.com/questions/27678052/usage-of-the-backtick-character-in-javascript 
// for understanding the purpose of backticks in javascript 
// Credit to https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
// for explaining how to display API data onto the website

function fetchComic() {
    // API link with the current comic
    const url = "https://xkcd.com/info.0.json";

    // AJAX method we learned in previous lab 
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        // If data retrival is successful 
        success: function(comicData) {
            // Creating variables for data types to display on the HTML website 
            const title = comicData.title;
            const imageUrl = comicData.img;
            const altText = comicData.alt;

            // Selecting the comic-display element using jQuery
            const comicDisplay = $("#comic-display");
            // Adding the data from the comic and embedding it into HTML using jQuery
            comicDisplay.html(`<h2>${title}</h2><br><img src="${imageUrl}" alt="${altText}"><p>${altText}</p>`);
        },
        // If data retrival is unsuccessful 
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error fetching XKCD comic", textStatus, errorThrown);
        }
    });
}

// Allows the comic to be already on the page once it is loaded / no need for a button 
$(document).ready(function() {
    fetchComic();
});

// index.js - Lab 15: AJAX
// Author: Priscella Dolang
// Date: 12/3/23

// Credit to Wes Modes Canvas Page for Lab 15
$("#activate").click(function() {
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://dog.ceo/api/breeds/image/random",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        // All the action goes in here
        success: function(data) {
            // Do stuff
            // API has "image" property - message only showed in console 
            var image = data.message;
            // Update src attribute with img element with id "dogImage"
            $("#dogImage").attr("src", image);
            console.log(data);
        },
        // What do we do if the api call fails
        error: function(jqXHR, textStatus, errorThrown) {
            // Do stuff
            console.log("Error: ", textStatus, errorThrown)
        }
    });
});

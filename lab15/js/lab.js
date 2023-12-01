// index.js - Lab 15: AJAX
// Author: Priscella Dolang
// Date: 12/3/23

// Credit to Wes Modes Canvas Page for Lab 15

$.ajax({
    // The URL for the request (from the api docs)
    url: "",
    // The data to send (will be converted to a query string)
    data: {
        // Here is where any data required by the api 
        // goes (check the api docs)
        id:
        api_key: ""
    };
    // Whether this is a POST or GET request
    type: "",
    // The type of data we expect back
    dataType: "",
    // What do we do when the api call is successful
    // All the action goes in here
    success: function(data) {
        // Do stuff
        console.log(data);
    },
    // What do we do if the api call fails
    error: function(jqXHR, textStatus, errorThrown) {
        // Do stuff
        console.log("Error: ", textStatus, errorThrown)
    }
})
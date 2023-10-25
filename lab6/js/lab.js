// index.js - Lab 6: Arrays & Objects
// Author: Priscella Dolang
// Date: 10/25/23

// Define Variables
myTransport = ["BCycle Electric Bike", " Metro Bus", " Walking", " Carpool"];

// Object for Vehicle That I Don't Owned Because Insurance is Expensive
myMainRide = {
  make: "Toyota",
  model: "Camry",
  color: "Dark Green",
  year: 2013,
  age: function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Methods for My 1 Hour Commute to Campus: ", myTransport, "</br>");
// How to write an object to the document - code from Canvas page Lab 6 (Wes Modes)
document.writeln("My Imaginary Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
    
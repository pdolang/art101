// index.js - Lab 10: JavaScript for the Web
// Author: Priscella Dolang
// Date: 11/11/23

window.onload = function () {
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl)

    var new1El = document.createElement("p");

    new1El.innerHTML = "This text will be red.";
    new1El.id = "new-one";

    var new2El = document.createElement("p");
    new1El.id = "new-two";

    new2El.innerHTML = "This text will be purple.";

    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    new1El.style.color = "red";

    new2El.style.color = "purple";

    outputEl.className = "changed";
}
// index.js - Lab 7: Functions 
// Author: Priscella Dolang
// Date: 11/2/23

// Creating a function to compare the strings and sort them alphabetically regardless of case 
// Credit to Stack Overflow - How Do You Sort Letters in JavaScript with Capital & Lowercase Letters Combined? 
function caseSensitive(stringA, stringB) {
    return stringA.toLowerCase().localeCompare(stringB.toLowerCase());
}

// Creating a function to get user input and sort their name 
// Credit to Wes Modes on ART101 Canvas Page for Lab 7
function sortingUserName() {
    // Creating a variable to get user input 
    var userName = window.prompt("Hello. What is your name?");
    console.log("userName = ", userName);
    // Splitting string into array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // Sorting array
    var nameSortArray = nameArray.sort();
    console.log("nameSortArray = ", nameSortArray);
    // Using function - caseSensitive to sort through the string regardless of case 
    var caseSens = nameSortArray.sort(caseSensitive);
    console.log("caseSens = ", caseSens);
    // Joining array into a string
    var nameSorted = caseSens.join('');
    console.log("nameSorted = ", nameSorted);
    // Returning the sorted name 
    return nameSorted; 
}

// Output
document.writeln("I fixed your name: ",
    sortingUserName(), "</br>");
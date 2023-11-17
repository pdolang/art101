// in-class experiment 11/15/23

$("#my-button").click(function () {
    console.log("button clicked!");
    var name = prompt("what is your name?");
    console.log("prompt returned: " + name);
    newText = "hello" + name + "!";
    $("#title").html(newText);
});
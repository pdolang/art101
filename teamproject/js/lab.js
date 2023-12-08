

document.addEventListener("DOMContentLoaded", function () {
    const colorChangeBtn = document.getElementById("colorChangeBtn");

    colorChangeBtn.addEventListener("click", changeColors);

    function changeColors() {
        const body = document.body;
        const h1 = document.querySelector("h1");

        // Example color values, replace with your desired colors
        const backgroundColor = getRandomColor();
        const textColor = getRandomColor();
        const headingColor = getRandomColor();

        // Update CSS styles
        body.style.backgroundColor = backgroundColor;
        body.style.color = textColor;
        h1.style.color = headingColor;
    }

    function getRandomColor() {
        // Generate a random hex color code
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});

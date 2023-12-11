// JavaScript for Final Project 

// Opening Screen
$(function() {
    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button'),
        welcomeGif = welcomeSection.find('.welcome-gif');

    setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 500);

    enterButton.on('click', function(e) {
        e.preventDefault();

        // Hide the loading text and "Enter" button immediately when "Enter" is clicked
        welcomeSection.addClass('show-gif');
        welcomeSection.find('.fly-in-text li, .enter-button').hide(); // Hide the loading text and "Enter" button

        // Fade in the GIF
        welcomeGif.hide().fadeIn(750); // Adjust the duration (in milliseconds) as needed

        // Wait for the GIF to finish playing (adjust the time accordingly)
        setTimeout(function() {
            // Fade out the GIF, fade out the loading screen, and show the rest of the webpage
            welcomeGif.fadeOut(1000); // Adjust the duration (in milliseconds) as needed
            welcomeSection.removeClass('show-gif');
            welcomeSection.fadeOut(1000, function() {
                // Optional: This callback function will be executed after fadeOut is complete
                welcomeSection.hide();
            });
        }, 2500); // Example: 5000 milliseconds (5 seconds) for the GIF duration
    })
});

// Function for Sidebar Tabs
const tabs = document.querySelectorAll('[data-tab-value]')
        const tabInfos = document.querySelectorAll('[data-tab-info]')
 
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document
        .querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
        tabInfo.classList.remove('active')
        })
        target.classList.add('active');
    })
})

function scrollTimeline(direction) {
    const timeline = document.getElementById('timeline-container');
    const tweets = document.querySelectorAll('.tweet');
    const tweetWidth = tweets[0].offsetWidth + 20; // Including margin

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= tweets.length) {
        currentIndex = tweets.length - 1;
    }

    const newPosition = -currentIndex * tweetWidth;
    timeline.style.transform = translateX('${newPosition}px');
}

// Dark Mode Function
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function for API profile picture
const memesContainer = $("#memes-container");
const changepfp = $("#changepfp");

let memes = [];
let currentMemeIndex = 0;

fetchMemes();

changepfp.click(changeMeme);

function fetchMemes() {
    $.ajax({
        url: "https://api.imgflip.com/get_memes",
        method: "GET",
        dataType: "json",
        success: function(data) {
            memes = data.data.memes;
            displayMeme(memes[currentMemeIndex]);
        },
        error: function(error) {
            console.error("Error fetching memes:", error);
        }
    });
}

function displayMeme(meme) {
    memesContainer.empty();

    const memeElement = $("<div>").addClass("meme");
    const imgElement = $("<img>").attr("src", meme.url).attr("alt", meme.name);

    memeElement.append(imgElement);
    memesContainer.append(memeElement);
}

function changeMeme() {
    currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    displayMeme(memes[currentMemeIndex]);
}

// Tweets Tab 
$("#save-button").on("click", function() {
    saveNote();
});

function saveNote() {
    // Get the input value
    var note = $("#note-input").val().trim();

    if (note === "") {
      alert("Please enter a note.");
      return;
    }

    // Get the ul element to display the notes
    var notesList = $("#notes-list");

    // Create a new li element with the note text
    var li = $("<li>").text(note);

    // Append the li element to the ul
    notesList.append(li);

    // Clear the input field
    $("#note-input").val("");
}

// Elon Musk Tab
$('.image-container img').hide();

$('button').on('click', function() {
    const option = $(this).data('option');
    $('.image-container img').hide();
    $('#' + option).show();
});
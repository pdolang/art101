// script.js

const tweets = [
    {
        user: 'Kanye West',
        image: 'img/yetweet1.jpg',
    },
    {
        user: 'Ye',
        image: 'img/yetweet2.jpg',
    },
    {
        user: 'Ye',
        image: 'img/elontweet1.png',
    },
    {
        user: 'Ye',
        image: 'img/gretavtate.png',
    },
    // Add more tweets as needed
];

let currentTweetIndex = 0;

function showNextTweet() {
    const tweetElement = document.getElementById('tweet');
    const nextTweet = tweets[currentTweetIndex];

    tweetElement.innerHTML = `

        <div class="tweet-content">
            <!-- Display the tweet image with width and height styles -->
            <img src="${nextTweet.image}" alt="Tweet Image" style="width: 100%; height: auto;">
        </div>
    `;

    currentTweetIndex = (currentTweetIndex + 1) % tweets.length;
}
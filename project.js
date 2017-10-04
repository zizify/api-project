'use strict';

const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const STORE = {
    itemsPopulated: false,
    items: {},
};

function getDataFromYoutube(searchTerm, callback) { 
    const query = {
        part: 'snippet',
        key: 'AIzaSyBTYOGG9oxUU2Ij2c-x7sTOS3wTgoHk298',
        q: `${searchTerm} `
        per_page: 10,
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function render() { 
    // check if STORE contains items to show
    // call another function to create HTML
}

function generateHTML() {
    // create and pass dynamic HTML
}

function displayResults() {
    // add items to DOM
}

function submitListener() {
    // listen to submit button
}

$(submitListener);
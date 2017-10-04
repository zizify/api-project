'use strict';

const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const STORE = {
    
    items: [],
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
    if (STORE.items.length > 0) {
       displayResults();

}
}

function generateHTML(items) {
    // create and pass dynamic HTML
    return `
    <div>
      <img src='${items.snippet.thumbnails.medium.url}'>
      </div>`
      console.log(items);
    }


function generateCollection() {
      // generate a collection of strings
          const results = STORE.items.map((item)=>{
             generateHTML(a)
    });
    $('.js-search-results').html(results);
}

function displayResults() {
    // add items to DOM
    const dynamicHTML = generateCollection();
    $('.js-search-results').html(dynamicHTML);
}

function submitListener() {
    // listen to submit button
}

$(submitListener);
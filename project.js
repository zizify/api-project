'use strict';

const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

const STORE = {
  items: [],
};

function getDataFromYoutube(searchTerm) { 
  const query = {
    part: 'snippet',
    key: 'AIzaSyBTYOGG9oxUU2Ij2c-x7sTOS3wTgoHk298',
    q: `${searchTerm} `
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, function(data) {
		STORE.items = data.items;
		console.log(STORE.items);
		render();
	});
}

function render() { 
  // check if STORE contains items to show
  // call another function to create HTML
  if (STORE.items.length > 0) {
    displayResults();
  }
}

function generateHTML(item) {
	// create and pass dynamic HTML
	console.log(item);
	console.log(item.id.videoId);
  return `
		<div class="thumbnail-container">
			<a href="https://youtube.com/watch?v=${item.id.videoId}">
				<img src='${item.snippet.thumbnails.medium.url}'>
			</a>
			<p><a href="https://youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a></p>
      </div>`;
}

function generateCollection() {
  // generate a collection of strings
  const results = STORE.items.map(generateHTML);
	console.log(results);
  return results.join('');
}

function displayResults() {
  // add items to DOM
	const dynamicHTML = generateCollection();
	console.log(dynamicHTML);
  $('.js-search-results').html(dynamicHTML);
}

function submitListener() {
  $('.js-search-form').on('submit', function(e) {
		e.preventDefault;

    const searchTarget = $(e.currentTarget).find('.js-query');
    const search = searchTarget.val();

    searchTarget.val('');

    getDataFromYoutube(search);
  });
}

$(submitListener);
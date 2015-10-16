$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyBXlO-ld1Qsas4EDAyFYqoTSwTpDloAOHI',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data);
  });
}

function showResults(results){
  console.log(results);
  var html = "";
  $.each(results.items, function(index,value){
    html += '<p>' + value.snippet.title + '</p>' + "<img src='" + value.snippet.thumbnails.default.url + "'>";
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}


//creat varibles for search term, Number of record,..
//data-name

var numRec = document.getElementById("number")
var start = document.getElementById("number")
var end = document.getElementById("number")
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "540d28fa74c0460b90258ab8b1561336",
  'q': searchTerm,
  'fq': numRec,
  'begin_date': start,
  'end_date': end
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
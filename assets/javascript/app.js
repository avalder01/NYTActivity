//Kevin comment:
//here are my id's for the blanks: 
//#search-term
//#num-to-retrieve
//#start-year
//#end-year

//creat varibles for search term, Number of record,..
//data-name

var searchTerm = document.getElementById("#search-term")
console.log(searchTerm);
var numRec = document.getElementById("#num-to-retrieve")
var start = document.getElementById("#start-year")
var end = document.getElementById("")
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
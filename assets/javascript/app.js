//Kevin comment:
//here are my id's for the blanks: 
//#search-term
//#num-to-retrieve
//#start-year
//#end-year

//creat varibles for search term, Number of record,..
//data-name
var searchTerm = $("#search-term").attr("data-name")
var numRec = $(this).attr("data-name")
var start = $(this).attr("data-name")
var end = $(this).attr("data-name")
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
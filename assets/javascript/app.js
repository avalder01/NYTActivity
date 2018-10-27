//Kevin comment:
//here are my id's for the blanks: 
//#search-term
//#num-to-retrieve
//#start-year
//#end-year

//creat varibles for search term, Number of record,..
//data-name
var today = new Date(); 
var mm = today.getMonth()+1; 
var dd = today.getDate();

var mmString;
var ddString;

if(mm<10){
    mmString='0'+mm.toString();
}

if(dd<10){
    ddString='0'+dd.toString();
}

 
console.log(mm);
console.log(dd);

window.onload = function() {

    
     $("#submit").click(submitF);
     $("#delete").click(deleteF);
  };

function deleteF(){
   $("#articles-here").empty();
}


function submitF(){
var searchTerm = $("#search-term").val()
console.log(searchTerm);
var numRec = $("#num-to-retrieve").val()
console.log(numRec);
var startyear = $("#start-year").val()
var endyear  = $("#end-year").val()
var start;
var end;

if(startyear.length==4){
    start = startyear+"0101"
}else{
    start ='';
}

if(endyear.length==4){
    if(endyear <= 2017){
        end = endyear + '1231'
    }else{
        end = endyear + mmString + ddString;
    }
    
}else{
    end = '';
}


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

if (start.length==4){
    url += '?' + $.param({
        'api-key': "540d28fa74c0460b90258ab8b1561336",
        'q': searchTerm,
        'fq': numRec,
        'begin_date': start,
        'end_date': end
      });
      console.log(url);
}else{
    url += '?' + $.param({
        'api-key': "540d28fa74c0460b90258ab8b1561336",
        'q': searchTerm,
        'fq': numRec
    });
}


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    //creat array called headline, holding the healines
     var headlineHoder = [];
     for(i=0;i<numRec;i++){
         headlineHoder.push(result.response.docs[i].headline.main);
         var headlineDiv = $("<a>").text(result.response.docs[i].headline.main);
         headlineDiv.attr("href",result.response.docs[i].web_url);
         headlineDiv.append("<br>");
         headlineDiv.css("padding-top","10px");
         console.log(result.response.docs[i].web_url);
         $("#articles-here").append(headlineDiv);
     }
     
     $("#articles-here").css("padding-top","20px")
  
})

}


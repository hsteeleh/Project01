
    $("#buttonSubmit1").on("click", function(event) {
        console.log("Hello");
        event.preventDefault();

    var searchTerm = $("#bandSearch").val().trim();
    console.log(searchTerm);
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=" + searchTerm + "&apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCkKQYWEduGovbgAozkqKaSxVHIIwTvBTA",
    authDomain: "globalgrooves-46794.firebaseapp.com",
    databaseURL: "https://globalgrooves-46794.firebaseio.com",
    projectId: "globalgrooves-46794",
    storageBucket: "globalgrooves-46794.appspot.com",
    messagingSenderId: "591575571425"
  };
  firebase.initializeApp(config);

//Variable to reference Firebase
var dataRef = firebase.database();

 // Initial Values
    var eventName = "";
    var venue = "";
    var date = "";
    var time = "";
    var lowPrice = "";
    var highPrice = "";
    var tickets = "";
    
    // Capture Button Click
    $("#buttonSubmit2").on("click", function(event) {
      event.preventDefault();


var locationTerm = $("#locationSearch").val().trim();

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&city=" + locationTerm + "&apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";
async:true,
 
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    
    for(var i=0; i<=9 ; i++){

    eventName = response._embedded.events[i].name;
    venue = response._embedded.events[i]._embedded.venues[0].name;
    date = response._embedded.events[i].dates.start.localDate;
    time = response._embedded.events[i].dates.start.localTime;
    lowPrice = response._embedded.events[i].priceRanges[0].min;
    highPrice = response._embedded.events[i].priceRanges[0].max;
    tickets = response._embedded.events[i].url;
    createRow(response[i]);
   
    }
    
});
});
   
    function createRow(data) {
    var tRow = $("<tr>");
    
//call the appropriate elements from the Ticketmaster API   

    var eventNameTd = $("<td>").text(eventName);
    var venueTd = $("<td>").text(venue);
    var startTd = $("<td>").text(date);
    var timeTd = $("<td>").text(time);
    var priceMinTd = $("<td>").text(lowPrice);
    var priceMaxTd = $("<td>").text(highPrice);
    var link = $("<a />", { href: tickets, target: "_blank" , text: 'TICKETS' });
    var urlTd = $("<td>").append(link);
   

    tRow.append(eventNameTd);
    tRow.append(venueTd);
    tRow.append(startTd);
    tRow.append(timeTd);
    tRow.append(priceMinTd);
    tRow.append(priceMaxTd);
    tRow.append(urlTd);
    
    
    $("tbody").append(tRow);
    };
    

    

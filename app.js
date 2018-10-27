var eventLong = 35.902280;
var eventLat = -79.032270;
var eventDate;
var myLatLng;
var marker;
var map;



$("#buttonSubmit1").on("click", function(event) {
    console.log("Hello");
    event.preventDefault();

    var searchTerm = $("#bandSearch").val().trim();
    console.log(searchTerm);
    var queryURL = "https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?size=1&countryCode=US&classificationName-music&keyword=" + searchTerm + "&apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        var eventName = response._embedded.events[0]._embedded.venues[0].name;
        console.log(eventName);
        //console.log(response._embedded.events[0]._embedded.venues[0].location.longitude);
        eventLong = response._embedded.events[0]._embedded.venues[0].location.longitude;
        eventLat = response._embedded.events[0]._embedded.venues[0].location.latitude;
        //eventDate = response._embedded.events[0]._embedded.venues[0].location.latitude;
        console.log(eventLong);
        console.log(eventLat);
        if(response) {
            google.maps.event.trigger(map, 'resize');
           
        } 
                var queryURL2 = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyABpwx1UCYz-5RWbpDeYXFGQsT3YSdKanw&callback=initMap"
        
            $.ajax({
                  url: queryURL2,
                  method: "GET"
                }).then(function(response) {
                    console.log(response);
                    console.log(queryURL2);
                    var latLng = new google.maps.LatLng(eventLat, eventLong); //Makes a latlng for the new event
                 
map.panTo(latLng);
                
                
                // this is panning to the new event, look into panning to over both events
                //look into pan, setCenter, zoom to get the area you want, markers: --
            });
        });
    });
        
   


function initMap() {
    console.log("init map long " + eventLong, "& init map lat " + eventLat)
    myLatLng = {
        lat: Number(eventLong), 
        lng: Number(eventLat)
    };

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Party Starts Here!'
    });
    
    
};



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
//

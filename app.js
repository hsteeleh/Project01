
    $("#buttonSubmit1").on("click", function(event) {
        console.log("Hello");
        event.preventDefault();

    var searchTerm = $("#search").val().trim();
    console.log(searchTerm);

    /*
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + searchTerm + "apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
    });*/
})


$("#buttonSubmit2").on("click", function(event) {
    console.log("Hello again");
    event.preventDefault();
    
var locationTerm = $("#search2").val().trim();
console.log(locationTerm);
var keyword = $(this).attr(locationTerm);
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?" + keyword + "apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response);
});
})

var createRow = function(data) {
    var tRow = $("<tr>");
//call the appropriate elements from the Ticketmaster API
    var nameTd = $("<td>").text(data.embedded.events.name);
    var venueTd = $("<td>").text(data.events.embedded.venue.name);
    var startTd = $("<td>").text(data.events.dates.start.localDate);
    var timeTd = $("<td>").text(data.events.dates.start.localTime);
    var priceMinTd = $("<td>").text(data.events.priceRanges.min);
    var priceMaxTd = $("<td>").text(data.events.priceRanges.max);
    var urlTd = $("<td>").text(data.embedded.events.url);
    
      
    tRow.append(eventTd, venueTd, startTd, timeTd, priceMinTd, priceMaxTd, urlTd);
    $("tbody").append(tRow);
  };

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
    })
})


$("#buttonSubmit2").on("click", function(event) {
    console.log("Hello again");
    event.preventDefault();
    
var locationTerm = $("#locationSearch").val().trim();
console.log(locationTerm);
//var keyword = $(this).attr(locationTerm);
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&countrycode=US&city=" + locationTerm + "&apikey=S5TWixQyqfn94jkCLIpopi3KFDxPPLxa";
async:true,
  /*dataType:"json",
  success:function(json) {
              console.log(json);
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }*/
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
        console.log(response);
    var eventName = response._embedded.events[0].name;
        console.log(eventName);
    createRow(response);
})
})

/*
    function createRow(data) {
    var tRow = $("<tr>");
//call the appropriate elements from the Ticketmaster API
    var nameEvent = $("<td>").text(response._embedded.events[0].name);
    console.log(nameEvent);
   
    var venueTd = $("<td>").text(response.events.embedded.venue.name);
    var startTd = $("<td>").text(response.events.dates.start.localDate);
    var timeTd = $("<td>").text(response.events.dates.start.localTime);
    var priceMinTd = $("<td>").text(response.events.priceRanges.min);
    var priceMaxTd = $("<td>").text(response.events.priceRanges.max);
    var urlTd = $("<td>").text(response.embedded.events.url);

    tRow.append(eventName);
    $("tbody").append(tRow);
    */




  
  
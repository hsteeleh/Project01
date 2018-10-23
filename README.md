# Project01

<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Testing da Tracker</title>
  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <!-- Firebase Reference -->
  <script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
  <!-- Moment.js Reference -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
  <style>
  </style>
</head>

<body>
    <div class="jumbotron">
        <div>
          <h1 id="jumbotitle">Global Grooves</h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h1 id="containerTitle">Where are you, what do you want to do?</h1>
            </div>

            
            <div class="col-md-3">
              <!--
                <label class="radio-inline"><input type="radio" name="chooseByBand">Band</label>
                <label class="radio-inline"><input type="radio" name="chooseByCity">City</label>
                <label class="radio-inline"><input type="radio" name="chooseByState">State</label>      
-->
                 <form>
                    <div class="form-group">
                        <label for="search">I'm searching for...</label>
                        <input type="search" class="form-control" id="search" placeholder="Enter your search term">
                    </div>
                    <button type="submit" class="btn btn-primary" id="button">Submit</button>
                </form>
              </div>

              <div class="col-md-6">
                  <input id="pac-input" class="controls" type="text"
                  placeholder="Enter a location">
          
                  <div id="map"></div>
                  <div id="infowindow-content">
                  <span id="place-name"  class="title"></span><br>
                  Place ID <span id="place-id"></span><br>
                  <span id="place-address"></span>
                  </div>
              
                  <script>
            // This sample uses the Place Autocomplete widget to allow the user to search
            // for and select a place. The sample then displays an info window containing
            // the place ID and other information about the place that the user has
            // selected.
            // This example requires the Places library. Include the libraries=places
            // parameter when you first load the API. For example:
            // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
                    function initMap() {
                    var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -33.8688, lng: 151.2195},
                    zoom: 13
                    });
              
                    var input = document.getElementById('pac-input');
                    var autocomplete = new google.maps.places.Autocomplete(input);
                    autocomplete.bindTo('bounds', map);
                    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
                    var infowindow = new google.maps.InfoWindow();
                    var infowindowContent = document.getElementById('infowindow-content');
                    infowindow.setContent(infowindowContent);
                    var marker = new google.maps.Marker({
                    map: map
                    });
              
                    marker.addListener('click', function() {
                    infowindow.open(map, marker);
                    });
              
                  autocomplete.addListener('place_changed', function() {
                  infowindow.close();
                  var place = autocomplete.getPlace();
                  if (!place.geometry) {
                  return;
                  }
                  
                  if (place.geometry.viewport) {
                  map.fitBounds(place.geometry.viewport);
                  } else {
                  map.setCenter(place.geometry.location);
                  map.setZoom(17);
                  }
                // Set the position of the marker using the place ID and location.
                marker.setPlace({
                  placeId: place.place_id,
                  location: place.geometry.location
                });
                marker.setVisible(true);
                infowindowContent.children['place-name'].textContent = place.name;
                infowindowContent.children['place-id'].textContent = place.place_id;
                infowindowContent.children['place-address'].textContent =
                    place.formatted_address;
                infowindow.open(map, marker);
              });
            }
              </script>
          
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_X7udChvMby96HAj5TKcoaJzU-e53RlE&libraries=places&callback=initMap"
              async defer>
          </script>
          </div>
<!--
<div class="form-group">
                        <label for="city">City</label>
                        <input type="city" class="form-control" id="city" placeholder="Enter your city or destination">
                  </div>
                    <div class="form-group">
                          <label for="stateProvince">State</label>
                          <input type="stateProvince" class="form-control" id="stateProvince" placeholder="Enter your state or destination">
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <input type="country" class="form-control" id="country" placeholder="Enter your country or destination">
                  </div>
-->

                <!--
              <div id="map">
                <script>
                    function initMap() {
                      var myLatLng = {lat: -25.363, lng: 131.044};
                      var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: myLatLng
                      });
               
                      var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: 'Hello World!'
                      });
                    }
                  </script>
                  <script async defer
                  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_X7udChvMby96HAj5TKcoaJzU-e53RlE&callback=initMap">
                  </script>
                </div>
                -->
            </div>
        </div>
    </div>

    <!--
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h1 id="containerTitle">Tickets, directions, and other good stuff</h1>
            </div>
        </div>
    </div>
-->

  <script src="app.js">
  </script>

</body>
</html>
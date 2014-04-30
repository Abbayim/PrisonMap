var prisonmap = {};
prisonmap['alderson'] = {
  center: new google.maps.LatLng(37.726114, -80.667839),
  population: 1184
};
citymap['aliceville'] = {
  center: new google.maps.LatLng(33.176178, -88.192969),
  population: 1406
};
citymap['allenwood'] = {
  center: new google.maps.LatLng(41.127841, -76.915167),
  population: 3695
};
citymap['ashland'] = {
  center: new google.maps.LatLng(38.433861, -82.714647),
  population: 1528
};
citymap['atlanta'] = {
  center: new google.maps.LatLng(33.715402, -84.370961),
  population: 2525
};
citymap['atwater'] = {
  center: new google.maps.LatLng(37.385971, -120.558757),
  population: 1643
};
citymap['allenwood'] = {
  center: new google.maps.LatLng(41.127841, -76.915167),
  population: 3695
};
citymap['allenwood'] = {
  center: new google.maps.LatLng(41.127841, -76.915167),
  population: 3695
};
var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(37.09024, -95.712891),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the population by a factor of 20.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: citymap[city].population / 20,
      draggable: true,
      geodesic: true
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
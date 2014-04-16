var req = $.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR58.json',
        dataType: 'jsonp',
        type: "GET"
});

req.done(displayEntries);

function displayEntries(data) {
  var stations = data.location.nearby_weather_stations.pws.station;
  console.log(data);
  console.log(stations);  
  for (var i=0; i < stations.length; i++) {
    var station = stations[i];
    
    console.log(station.neighborhood);
  }
  // path to info is:
  // data.location.nearby_weather_stations.pws.station
//   var $locationContainer = $('<div />', {id: 'location'});
  
//   for (var i=0; i < data.location.length; i++) {
//    console.log(data.location[i].nearby_weather_stations.pws.station.neighborhood);
//    var h2 = '<h2>' + data.location[i].nearby_weather_stations.pws.station.neighborhood + '</h2>';
//     $locationContainer.append(h2);
//   }
  
//   $('#content').append($locationContainer);
}

$.when($.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR58.json',
        dataType: 'jsonp',
        type: "GET"
}), $.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR142.json',
        dataType: 'jsonp',
        type: "GET"
}), $.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR128.json',
        dataType: 'jsonp',
        type: "GET"
}), $.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR34.json',
        dataType: 'jsonp',
        type: "GET"
}), $.ajax({
        url: 'http://api.wunderground.com/api/419ec08f527a6f9b/geolookup/q/pws:KCASANFR111.json',
        dataType: 'jsonp',
        type: "GET"
})).done(function(r1, r2, r3, r4, r5) {
  console.log(r1, r2, r3, r4, r5);
});
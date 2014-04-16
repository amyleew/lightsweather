var map = L.map('map').setView([37.77, -122.46], 13, {zoomControl: false});

// disable zoom handlers
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// disable tap handler, if present.
if (map.tap) map.tap.disable();


// pull in mapbox design
L.tileLayer('http://{s}.tiles.mapbox.com/v3/mslee.hke585p2/{z}/{x}/{y}.png', {
			maxZoom: 18
		}).addTo(map);


// pull in all Wunderground API data

// start with variables for titles, lat and long
var titles = ['', "Ocean Beach", "Outer Richmond", "The Richmond", "Inner Sunset", "Golden Gate Heights", "West Portal", "Cole Valley", "The Presidio", "Twin Peaks", "Pacific Heights", "Telegraph Hill", "The Financial District", "SOMA", "Mission Bay", "The Castro", "The Mission", "Mission / Bernal", "Noe Valley", "Glen Park"],
    lats = ['', "37.775108", "37.778687", "37.782398", "37.76498", "37.752174", "37.742828", "37.760796", "37.801765", "37.748829", "37.789127", "37.804367", "37.793579", "37.773285", "37.774124", "37.759239","37.759354", "37.747826", "37.745663", "37.733135", "37.733135"],
    longs = ['', "-122.510185", "-122.449608", "-122.45076", "-122.453499", "-122.441307", "-122.40757", "-122.39933", "-122.417725", "-122.396362", "-122.43042", "-122.415085", "-122.415062", "-122.430214", "-122.437584" ],
    req = $.when($.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR99.json',
       dataType: 'jsonp', type: "GET"
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR97.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR128.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR156.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR46.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR130.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR110.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR148.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR34.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR166.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR169.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR102.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR58.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR53.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KPCASANF2.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR259.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR180.json',
       dataType: 'jsonp', type: "GET"  
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR98.json',
       dataType: 'jsonp', type: "GET"
    }), $.ajax({
       url: 'http://api.wunderground.com/api/419ec08f527a6f9b/hourly/q/pws:KCASANFR111.json',
       dataType: 'jsonp', type: "GET"
    }));


        
  
  req.done(function(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19){
    var data = _.union(r1[0].hourly_forecast, r2[0].hourly_forecast, r3[0].hourly_forecast, r4[0].hourly_forecast, r5[0].hourly_forecast, r6[0].hourly_forecast, r7[0].hourly_forecast, r8[0].hourly_forecast, r9[0].hourly_forecast, r10[0].hourly_forecast, r11[0].hourly_forecast, r12[0].hourly_forecast, r13[0].hourly_forecast, r14[0].hourly_forecast, r15[0].hourly_forecast, r16[0].hourly_forecast, r17[0].hourly_forecast, r18[0].hourly_forecast, r19[0].hourly_forecast),
        $forecasts = $('<div />', {id: 'forecasts'}),
        $zoutput = $('<div />', {id: 'label'}),
        locations = [],
        latitudes = [],
        longitudes = [];
        
    
    for (var i=1; i < 20; i++) {
      var results = 'r'+i,
          resultsObj = eval(results);
      
      // push in title array values
      resultsObj[0].location = titles[i];
      locations.push(resultsObj[0]);
      
      // push in latitude, longitude array values
      latitudes.push(lats[i]);
      longitudes.push(longs[i]);
    }
    
    
    for (var k=0; k < locations.length; k++) {
      var location = locations[k],
          latitude = latitudes[k],
          longitude = longitudes[k],
          $item = $('<div />', {id: 'location-' + k, class: 'location-item'}),
          title = '<h2>' + location.location + '</h2>',
          title1 = location.location;

      $item.append(title);
      $item.append(latitude);
      $item.append(longitude);
      
      
      for (var j=0; j < location.hourly_forecast.length; j++) {
        var $fItem = $('<div />', {class: 'forecast forecast-' + j}),
          fTime = '<h3 class="time">' + location.hourly_forecast[j].FCTTIME.civil + '&#58; &nbsp;</h3>',
          fTemp = '<h3 class="temp">' + location.hourly_forecast[j].temp.english + '&deg;</h3>',
          fFeels = '<h3 class="feels">feels like ' + location.hourly_forecast[j].feelslike.english + '&deg; <br/></h3>',
          fTitle = '<h3 class="condition">' + location.hourly_forecast[j].condition + ' </h3>',  
          fIcon = '<img class="icon" src="' + location.hourly_forecast[j].icon_url + '">';
        
        // $fItem.append(fTime, fTemp, fTitle);
        $fItem.append(fTime, fFeels, fIcon);
        $item.append($fItem);
        
      
      $forecasts.append($item);
      //console.log($fItem);
        console.log($item);
        
            
      
      switch (title1) {
        case "Ocean Beach":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          //L.marker([latitude, longitude]).addTo(map).bindPopup($item);
          break;
        case "Outer Richmond":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "The Richmond":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Inner Sunset":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Golden Gate Heights":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "West Portal":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Cole Valley":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "The Presidio":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Twin Peaks":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Pacific Heights":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Telegraph Hill":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "The Financial District":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "SOMA":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Mission Bay":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "The Castro":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "The Mission":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
          //  "Mission / Bernal", "Noe Valley", "Glen Park"],
        case "Mission / Bernal":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Noe Valley":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
        case "Glen Park":
          L.marker([latitude, longitude]).addTo(map).bindPopup(title+fTime+fFeels+fIcon);
          console.log(title+fTime+fFeels+fIcon);
          break;
      }
      }
      
    }

    
// Add Times into dropdown and such   
      var $allTimes = $('<select />', {id: 'zoutput'}, {name: 'zoutput'});    
      for (var j=0; j < location.hourly_forecast.length; j++) {
        var $fItem = $('<div />', {class: 'forecast-' + j}),
            $indivTime = $('<option />'),
            fyesTime = location.hourly_forecast[j].FCTTIME.civil;
               
        $indivTime.append(fyesTime);
        $allTimes.append($indivTime);

      }
      $zoutput.append($allTimes);    
    
    $('#weather').append($forecasts);
    $('#sliderSizer').append($zoutput); 

    
    // Add Slider    
    $(function() {
    var select = $( "#zoutput" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( "#zoutput" ).slider({
      min: 1,
      max: 19,
      range: "min",
      value: select[ 0 ].selectedIndex + 1,
      slide: function( event, ui ) {
        select[ 0 ].selectedIndex = ui.value - 1;

        var value = ui.value - 1,
            forecastSelect = '.forecast-' + value,
            $forecasts = $('#forecasts').find('.forecast');
        $forecasts.hide();
        $(forecastSelect).show();
      }
    });
      
  $( "#zoutput" ).change(function() {
    slider.slider( "value", this.selectedIndex + 1 ); 
    // somehow the class change happens here
      var forecastSelect = '.forecast-' + this.selectedIndex,
          $forecasts = $('#forecasts').find('.forecast');
      $forecasts.hide();
      $(forecastSelect).show();
    });
  }); 
    
    
});


 
    


  
var titles = ['', "Ocean Beach", "Outer Richmond", "The Richmond", "Inner Sunset", "Golden Gate Heights", "West Portal", "Cole Valley", "The Presidio", "Twin Peaks", "Pacific Heights", "Telegraph Hill", "The Financial District", "SOMA", "Mission Bay", "The Castro", "The Mission", "Mission / Bernal", "Noe Valley", "Glen Park"],
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
        locations = [];
    
    for (var i=1; i < 20; i++) {
      var results = 'r'+i,
          resultsObj = eval(results);
      
      resultsObj[0].location = titles[i];
      locations.push(resultsObj[0]);
    }
    
    
    for (var i=0; i < locations.length; i++) {
      var location = locations[i],
          $item = $('<div />', {id: 'location-' + i, class: 'location-item'}),
          title = '<h2>' + location.location + '</h2>';

      $item.append(title);
     
      for (var j=0; j < location.hourly_forecast.length; j++) {
        var $fItem = $('<div />', {class: 'forecast-' + j}),
          fTime = '<h3 class="time">' + location.hourly_forecast[j].FCTTIME.civil + '&#58; &nbsp;</h3>',
          fTemp = '<h3 class="temp">' + location.hourly_forecast[j].temp.english + '&deg;</h3>',
          fFeels = '<h3 class="feels">feels like ' + location.hourly_forecast[j].feelslike.english + '&deg; <br/></h3>',
          fTitle = '<h3 class="condition">' + location.hourly_forecast[j].condition + ' </h3>',  
          fIcon = '<img class="icon" src="' + location.hourly_forecast[j].icon_url + '">';
        
        $fItem.append(fTime, fFeels, fIcon);
        $item.append($fItem);
        
      }  
      $forecasts.append($item);
    }
        
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
      }
    });
      
  $( "#zoutput" ).change(function() {
      slider.slider( "value", this.selectedIndex + 1 ); 
    });
        }); 
    
      });


 
    


  
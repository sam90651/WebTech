function getWeather() {
      var location = $('#city').val();

      $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function(data) {
        /* Check that a place was found (we'll just grab the first) */
        if (data.query.results === null) {
          alert("Location not found: " + location + "!");

        }
        
    
        $('.jumbotron').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
          data.query.results.channel.item.description);
        $('#forecast').html(forecast);
        $('.container').show();

      }
      );
}
      // function addForecast(forecast) {

      //   return '<div class="col-lg-6">' +
      //     '<h4>' + forecast.day + ' ' + forecast.date + '</h4>' +
      //     '<p>' + forecast.text + ' with lows of ' + forecast.low + ' and highs of ' + forecast.high + '</p>' +
      //     '</div>';
      // }
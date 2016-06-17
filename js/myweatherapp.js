
$(document).ready(function() {
  
  
  //Method to capitalize first letter of string
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  } 

 var zip = "19107";

  function displayWeather(zip) {

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=727a5604f354627fdfe427a918d37005&units=imperial", function(data) {
      console.log(data);
      var currentTemp = Math.round(data.main.temp);
      var name = data.name;
      var lowTemp = Math.round(data.main.temp_min);
      var highTemp = Math.round(data.main.temp_max);
      var conditions = data.weather[0].description;
      var conditionImg = data.weather[0].icon;
      $('#city-name').html(name);
      $('#temp').html(currentTemp);
      $('#high-temp').html(highTemp);
      $('#low-temp').html(lowTemp);
      $('#conditions').html(conditions.capitalize());
      $('#weather-icon').attr('src', "http://openweathermap.org/img/w/" + conditionImg + ".png");  

    });
  }

  $('#new-zip').on("click", function() {
    zip = $('#zip').val();
    displayWeather(zip);
    return false;
  })


  displayWeather(zip);
})
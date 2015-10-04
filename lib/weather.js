var rp = require('request-promise');

module.exports = {
  byZip: getWeather
};

function getWeather(zipCode) {
  // make request to open weather api - http://openweathermap.org/current
  return rp('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=imperial')
      .then(function(body) {
        var response = JSON.parse(body);

        var message = [
          response.name + ' Weather',
          '-',response.weather[0].description,'-',
          'Now:' + Math.floor(response.main.temp),
          'High: ' + Math.floor(response.main.temp_max),
          'Low: ' + Math.floor(response.main.temp_min)
        ].join(' ');

        return message;
      });
}
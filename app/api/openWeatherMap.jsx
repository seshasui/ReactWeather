var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4cfb32bb8971ae42e04afc6e82a7f6f6&units=imperial';
//4cfb32bb8971ae42e04afc6e82a7f6f6
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      return res.data.main.temp;
    }, function(res){
      throw new Error(res.response.data.message);

    });
  }
}

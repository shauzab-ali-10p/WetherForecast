app.factory('weather', function($http) {
	var baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var forecast = function(location) {
		var myUrl = baseUrl + "lat=" + location.lati + "&lon=" + location.longi;
		return $http({method:"GET", url:myUrl}).then(function(result){
			var data = result.data;
        	var place = data.name + ", " + data.sys.country;
			var key = ['Sunrise', 'Sunset', 'Temperature', 'Pressure', 'Humidity', 'Min Temperature', 'Max Temperature']; 
			var val = [data.sys.sunrise, data.sys.sunset, data.main.temp, data.main.pressure, data.main.humidity, data.main.temp_min, data.main.temp_max];
			forecastResult = 
			{
				plac: place, 
				keys : key,
				vals : val 
			}
			console.log(forecastResult);
			return forecastResult;
        });
    };
    return { forecast: forecast };
});
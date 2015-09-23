app.controller("myWetherCtrl", function ($scope) {
	var forecastCallBack = function(data){
		console.log(data);
		$scope.place = data.name + ", " + data.sys.country;
		
		var key = ['Sunrise', 'Sunset', 'Temperature', 'Pressure', 'Humidity', 'Min Temperature', 'Max Temperature']; 
		var val = [data.sys.sunrise, data.sys.sunset, data.main.temp, data.main.pressure, data.main.humidity, data.main.temp_min, data.main.temp_max]; 

		$scope.keys = key;
		$scope.vals = val;
	};
	$scope.fetch = function(location) {
		var url = "http://api.openweathermap.org/data/2.5/weather?";
		url += "lat=" + location.lati + "&lon=" + location.longi;
		console.log(url);
		$.ajax({
			url: url,
			dataType: 'JSONP',
			jsonpCallback: 'callback',
			type: 'GET',
			success: forecastCallBack});	
	};
});
app.controller("myWetherCtrl", function ($scope, $http) {
	$scope.fetch = function(location) {
		var url = "http://api.openweathermap.org/data/2.5/weather?";
		url += "lat=" + location.lati + "&lon=" + location.longi;
		console.log(url);
		$http.get(url)
			.success(function(data) {
				console.log(data);
				$scope.place = data.name + ", " + data.sys.country;
				var key = ['Sunrise', 'Sunset', 'Temperature', 'Pressure', 'Humidity', 'Min Temperature', 'Max Temperature']; 
				var val = [data.sys.sunrise, data.sys.sunset, data.main.temp, data.main.pressure, data.main.humidity, data.main.temp_min, data.main.temp_max]; 
				$scope.keys = key;
				$scope.vals = val;
			})
			.error(function(data, status) {
  				console.error('Repos error', status, data);
			})
			.finally(function() {
  				console.log("finally finished");
			});
	};
});
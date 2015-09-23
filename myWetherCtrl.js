app.controller("myWetherCtrl", function ($scope) {
	$scope.fetch = function(location) {

		var url = "http://api.openweathermap.org/data/2.5/weather?";
		url += "lat=" + location.lati + "&lon=" + location.longi;
		console.log(url);
		$.ajax({
			url: url,
			dataType: 'JSONP',
			jsonpCallback: 'callback',
			type: 'GET',
			success: $scope.forecastCallBack});	

	};
	$scope.forecastCallBack = function(data){
		console.log(data);
		$scope.place = data.name + ", " + data.sys.country;
		$scope.sunrise = data.sys.sunrise;
		$scope.sunset = data.sys.sunset;
		$scope.temp = data.main.temp;
		$scope.pressure = data.main.pressure;
		$scope.humidity = data.main.humidity;
		$scope.temp_min= data.main.temp_min;
		$scope.temp_max= data.main.temp_max;
	};
});
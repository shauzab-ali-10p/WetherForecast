app.controller("myWetherCtrl", function ($scope, weather) {
	$scope.fetch = function(location) {

		var result = weather.forecast(location).
		then(function(result) {  // this is only run after $http completes
       		$scope.place = result.plac;
			$scope.keys = result.keys;
			$scope.vals = result.vals;
       	});
	};
});
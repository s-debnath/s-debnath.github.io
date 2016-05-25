// Controller for home view
angular
.module("RaceApp")
.controller("HomeController", ["$scope", "RaceServices", "$location", function ($scope, RaceServices, $location) {
	//Uses the RaceServices to check if races have started
	$scope.racesStarted = RaceServices.hasRacesStarted();
	$scope.message = "Hello";

	//Uses the RaceServices to find race
	$scope.moveToCurrentRace = function () {
		$scope.curRaceNum = RaceServices.getRaceNum();
		$location.url("/race/"+$scope.curRaceNum);
	}

}]);

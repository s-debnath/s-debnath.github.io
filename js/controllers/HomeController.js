// Controller for home view
angular
.module("RaceApp")
.controller("HomeController", ["$scope", "RaceToHomeService", "$location", function ($scope, RaceToHomeService, $location) {
	//Uses the RaceToHomeService to check if races have started
	$scope.racesStarted = RaceToHomeService.hasRacesStarted();
	$scope.message = "Hello";

	//Uses the RaceToHomeService to find race
	$scope.moveToCurrentRace = function () {
		$scope.curRaceNum = RaceToHomeService.getRaceNum();
		$location.url("/race/"+$scope.curRaceNum);
	}

}]);

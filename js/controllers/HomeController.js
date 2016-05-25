// Controller for home view
angular
.module("RaceApp")
.controller("HomeController", ["$scope", "RaceServices", "$location", function ($scope, RaceServices, $location) {
	//Uses the RaceServices to check if races have started
	$scope.curRaceNum = RaceServices.getRaceNum();
	$scope.racesStarted = ($scope.curRaceNum > 0);

}]);

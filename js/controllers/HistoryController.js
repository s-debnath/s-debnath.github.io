// Controller for race view
angular
.module("RaceApp")
.controller("HistoryController", ["$scope", "RaceServices", function ($scope, RaceServices) {
	//Uses the RaceServices to check if races have started
	$scope.curRaceNum = RaceServices.getRaceNum();
	$scope.racesStarted = ($scope.curRaceNum > 0);
	$scope.races = [{}];
	$scope.races = RaceServices.getRaces();

}]);

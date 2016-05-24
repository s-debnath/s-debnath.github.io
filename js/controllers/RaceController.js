// Controller for race view
angular
.module("RaceApp")
.controller("RaceController", ["$scope", "$routeParams", "RaceToHomeService", function ($scope, $routeParams, RaceToHomeService) {
	//Sets the current race number
	$scope.raceNum = Number($routeParams.raceId) + 1;
	$scope.startingTickets = [];
	$scope.totalMoney;
	$scope.horses = [];

	for (i = 0; i < 6; i++){
		$scope.horses[i] = {horseNum: i+1};
	}

	//Uses the RaceToHomeService and RaceToHistService to save relevent
	$scope.submitRace = function () {
		RaceToHomeService.incrementRace();
	}


}]);

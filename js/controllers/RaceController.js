// Controller for race view
angular
.module("RaceApp")
.controller("RaceController", ["$scope", "$routeParams", "RaceServices", function ($scope, $routeParams, RaceServices) {
	//Sets the current race number since the world unfortunately doesn't run on 0-based indexing
	$scope.raceNum = Number($routeParams.raceId) + 1;
	$scope.horses = [];

	//Loops and sets the num attiribute of each horse
	for (i = 0; i < 6; i++){
		$scope.horses[i] = {num: i+1,
		validInput: true,
		ticketsSold: 0};
	}

	//Checks race validity
	function checkValidity() {
		//Assumes all horses are valid unless discovered otherwise
		$scope.allValid = true;

		//Loops through and checks validity of each horse
		for (i = 0; i < 6; i++){

			//Boolean check if appropirate fields are filled
			$scope.horses[i].validInput = (!($scope.horses[i].startingTickets === null) && !($scope.horses[i].endingTickets === null));

			if ($scope.horses[i].validInput){
				$scope.horses[i].ticketsSold = $scope.horses[i].startingTickets - $scope.horses[i].endingTickets;

				//Boolean check for negative tickets sold
				$scope.horses[i].validInput = ($scope.horses[i].ticketsSold >= 0);
			}

			if (!$scope.horses[i].validInput){
				$scope.allValid = false;
			}

			console.log($scope.horses[i]);
		}
	};

	//Calculates the total money and winning price for each horse
	function calculateRace() {
		$scope.totalMoney = 0;

		//Finds the total money in the pool
		for (i = 0; i < 6; i++){
			$scope.totalMoney += $scope.horses[i].ticketsSold * Number($scope.betValue);
		}

		//Calculates the winning price by dividing the total pool by the ticketsSold
		for (i = 0; i < 6; i++){
			if ($scope.horses[i].ticketsSold > 0){
				$scope.horses[i].winningPrice = $scope.totalMoney/$scope.horses[i].ticketsSold;
			} else {
				$scope.horses[i].winningPrice = 0;
			}
		}
	};

	//Submits the relevent information
	function submitRace() {
		//Must submit before increment because the currentRaceNum is being used as an index in the service
		RaceServices.submitRace($scope.horses, $scope.totalMoney);
		RaceServices.incrementRace();
	};

	//Runs other functions to submit the race
	$scope.validateAndSubmit = function () {
		checkValidity();
		if ($scope.allValid){
			calculateRace();
			submitRace();
		}
	}

}]);

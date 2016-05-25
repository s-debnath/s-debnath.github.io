// Controller for race view
angular
.module("RaceApp")
.controller("RaceController", ["$scope", "$routeParams", "RaceServices", function ($scope, $routeParams, RaceServices) {
	//Sets the current race number
	$scope.raceNum = $routeParams.raceId + 1;
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
			$scope.horses[i].validInput = (isFinite($scope.horses[i].startingTickets) && isFinite($scope.horses[i].endingTickets));

			console.log(	$scope.horses[i].validInput);

			if ($scope.horses[i].validInput){
				$scope.horses[i].ticketsSold = $scope.horses[i].startingTickets - $scope.horses[i].endingTickets;

				$scope.horses[i].validInput = ($scope.horses[i].ticketsSold >= 0);
			}

			if (!$scope.horses[i].validInput){
				$scope.allValid = false;
			}
		}
	};

	//Calculates the total money and winning price for each horse
	function calculateRace() {
		$scope.totalMoney = 0;

		for (i = 0; i < 6; i++){
			$scope.totalMoney += $scope.horses[i].ticketsSold * Number($scope.betValue);
		}

		console.log($scope.totalMoney);

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
		RaceServices.incrementRace();
	};

	$scope.validateAndSubmit = function () {
		checkValidity();
		if ($scope.allValid){
			calculateRace();
			submitRace();
		}
	}

}]);

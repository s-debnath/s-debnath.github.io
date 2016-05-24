//Configuring the module with $routeProvider
angular.module("RaceApp").config(["$routeProvider", function ($routeProvider) {
	//Different routes possible
	$routeProvider
	.when("/home", {
		templateUrl: "views/home.html",
		controller: "HomeController"
	})
	.when("/race/:raceId", {
		templateUrl: "views/race.html",
		controller: "RaceController"
	})
	.when("/history", {
		templateUrl: "views/history.html",
		controller: "HistoryController"
	})
	.otherwise({
		redirectTo: "/home"
	});
}]);

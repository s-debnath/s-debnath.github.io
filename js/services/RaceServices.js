angular
.module("RaceApp")
.service("RaceServices", function () {
	this.currentRaceNum = 0;
	this.racesStarted = false;

	this.incrementRace = function () {
		this.currentRaceNum++;
		this.racesStarted = true;
	};

	this.getRaceNum = function () {
		return this.currentRaceNum;
	}

	this.hasRacesStarted = function () {
		return this.racesStarted;
	}
});

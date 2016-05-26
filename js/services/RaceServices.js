angular
.module("RaceApp")
.service("RaceServices", function () {
	this.curRaceNum = 0;
	this.racesStarted = false;
	this.races = [{}];

	this.incrementRace = function () {
		this.curRaceNum++;
		this.racesStarted = true;
	};

	this.getRaceNum = function () {
		return this.curRaceNum;
	}

	this.hasRacesStarted = function () {
		return this.racesStarted;
	}

	this.submitRace = function (horses, totalMoney) {
		this.races[this.curRaceNum] = [{}];
		this.races[this.curRaceNum].num = this.curRaceNum + 1;
		this.races[this.curRaceNum].horses = horses;
		this.races[this.curRaceNum].totalMoney = totalMoney;
	}

	this.getRaces = function () {
		return this.races;
	}
});

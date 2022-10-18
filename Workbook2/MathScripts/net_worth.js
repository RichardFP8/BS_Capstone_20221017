"use strict";
//Finding the asset variables first

var income = 300;
var roi = (500/12);
var side = 150;
var assets = income + roi + side;

//Finding where you owe
var owe = 25;
var rent = 300;
var utilities = 200;
var debt = owe + rent + utilities;

var netWorth = assets - debt;

console.log(assets);

console.log(debt);

console.log("Your net worth is " + netWorth);
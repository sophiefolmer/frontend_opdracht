/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("text");

function filterContent() {
	var buttonWit = document.querySelector(".buttonwit");
	var buttonRoze = document.querySelector(".buttonroze");
	var buttonRood = document.querySelector(".buttonrood");

	buttonWit.addEventListener('click', weg);
	buttonRoze.addEventListener('click', showRoze);
	buttonRood.addEventListener('click', showRood);
}

function weg() {
	var wit = document.getElementsByClassName(".blazerimgwit").innerHTML = "";
}


function showWhite() {
	var alleBlazers = document.querySelectorAll('.blazercontainer > article');
	var witteBlazers = document.querySelectorAll('.blazerimgwit');
	for (var i = 0; i < alleBlazers.length; i++) {
		alleBlazers[i].style.display = "none";
	}
	for (var i = 0; i < witteBlazers.length; i++) {
		witteBlazers[i].style.display = "block";
	}
}

function showRoze() {
	var alleBlazers = document.querySelectorAll('.blazercontainer > article');
	var rozeBlazers = document.querySelectorAll('.blazerimgroze');

	for (var i = 0; i < alleBlazers.length; i++) {
		alleBlazers[i].style.display = "none";
	}

	for (var i = 0; i < rozeBlazers.length; i++) {
		rozeBlazers[i].style.display = "block";
	}
}

function showRood() {
	var alleBlazers = document.querySelectorAll('.blazercontainer > article');
	var rodeBlazers = document.querySelectorAll('.blazerimgrood');
	for (var i = 0; i < alleBlazers.length; i++) {
		alleBlazers[i].style.display = "none";
	}
	for (var i = 0; i < rodeBlazersBlazers.length; i++) {
		rodeBlazersBlazers[i].style.display = "block";
	}
}

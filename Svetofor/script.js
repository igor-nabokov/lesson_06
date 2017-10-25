var green, red, yellow;

function clear(){
	green.style.backgroundColor = "white";
	red.style.backgroundColor = "white";
	yellow.style.backgroundColor = "white";
}

window.addEventListener("load", function(){
	clear();
	yellow.style.backgroundColor = "yellow";
});

window.addEventListener("beforeunload", function(){
	clear();
	green.style.backgroundColor = "green";
});

document.addEventListener("DOMContentLoaded", function(){
	green = document.getElementById("green_color");
	red = document.getElementById("red_color");
	yellow = document.getElementById("yellow_color");
	clear();
	red.style.backgroundColor = "red";
});


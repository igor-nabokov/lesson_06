var speed = 0;

window.onload = function (){
	var div = document.getElementById("semargl");
	function move() {
		div.style.left = div.offsetLeft + speed + "px";
		if (div.offsetLeft < window.innerWidth - 200) {
			setTimeout(move, 10);
		}
	}
	setTimeout(move, 10);
};

function setIgor() {
	speed = 1;
}

function setKsenja() {
	speed = 2;
}
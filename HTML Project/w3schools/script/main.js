var body = document.getElementById('body');
var j = 1;
function changeBackground() {
	j = j > 2 ? 0 : j;
	console.log(j);
	if (j === 1) {
		body.style.backgroundImage = 'url("./assets/shirokurokami.jpg")';
	} else if (j === 2) {
		body.style.backgroundImage = 'url("./assets/Zeta.png")';
	} else {
		body.style.backgroundImage = 'url("./assets/hoshimachi.jpg")';
	}
	j++;
};
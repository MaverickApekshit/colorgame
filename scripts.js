var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clikedColor = this.style.backgroundColor;

		//compare color to pickedColor
		if(clikedColor === pickedColor) {
			alert("Correct!");
		} else {
			alert("WRONG!!!");
		}
	});
}
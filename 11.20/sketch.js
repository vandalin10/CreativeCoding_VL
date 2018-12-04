var canvas;
var input;
var button;

var inputText;
var font;

function setup() {

	canvas = createCanvas(500,500);
	canvas.position(100,100);

	input = createInput("What is your name?");
	input.position(250,150);
	input.style('width','200px');

	button = createButton("Submit");
	button.position(325,175);
	button.mousePressed(updateText);

	para = createP(inputText);
	para.position(50,250);
	para.style('text-transform','lowercase');
	para.style('text-decoration','line-through');
	para.style('color','#42d9f4');
	para.style('text-indent','15.0%');
	
	  // put setup code here
}

function draw() {

	background(100);
  // put drawing code here
}

function updateText(){

	inputText = input.value();
	console.log(inputText);
	input.value("");
	para.html(inputText);

}

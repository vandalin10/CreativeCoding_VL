var myBall;
var myBall2;
var myBall3;


function setup() {

	createCanvas(500,500);

	var myColor = color(255,100,10);
	var myColor2 = color(200,50,80);
	var myColor3 = color(100,200,70);

	myBall = new Ball(250,100,2,4,30,myColor);
	myBall2 = new Ball(50,300,3,7,70,myColor2);
	myBall3 = new Ball(120,200,9,5,100,myColor3);
  // put setup code here
}

function draw() {

	background(200);

	myBall.animate();
	myBall2.animate();
	myBall3.animate();

	myBall.displayBall();
	myBall2.displayBall();
	myBall3.displayBall();
  // put drawing code here
}

//drawing of the Ball Class
function Ball(xVal,yVal,velXVal,velYVal,size,thisColor){

	this.x = xVal;
	this.y = yVal;
	this.xvel = velXVal;
	this.yvel = velYVal;
	this.size = size;
	this.color = thisColor;

	this.animate = function(){

		this.x += this.xvel;
		this.y += this.yvel;

		if(this.x <= 0 || this.x >= width){
			this.xvel *= -1;

		}
		if(this.y <= 0 || this.y >= height){
			this.yvel *= -1;

		}

	}

	this.displayBall = function(){

		fill(this.color);
		ellipse(this.x,this.y,this.size,this.size);
	}

};
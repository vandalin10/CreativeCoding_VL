var myBall;
var myBall2;
var myBall3;
var myBall4;
var myBall5;
var myBall6;
var myBall7;

var mySound;
var mySound2;


function preload(){

	mySound = loadSound("assets/Wind.mp3")
	mySound2 = loadSound("assets/WaterDrop.mp3");
	mySound3 = loadSound("assets/Thunder.mp3");
} 


function setup() {

	createCanvas(500,500);
	//mySound.play();

	var myColor = color(200,50,10);
	var myColor2 = color(100,80,70);
	var myColor3 = color(75,200,50);
	var myColor4 = color(150,150,200);
	var myColor5 = color(250,50,0);
	var myColor6 = color(255,0,0);
	var myColor7 = color(0,255,0);

	myBall = new Ball(250,100,5,4,80,myColor);
	myBall2 = new Ball(300,70,6,5,40,myColor2);
	myBall3 = new Ball(275,100,4,7,75,myColor3);
	myBall4 = new Ball(350,120,8,3,30,myColor4);
	myBall5 = new Ball(400,100,9,5,60,myColor5);
	myBall6 = new Ball(375,150,10,5,55,myColor6);
	myBall7 = new Ball (400,200,2,9,70,myColor7);

}

function draw() {

	background(200);

	myBall.animate();
	myBall.display();

	myBall2.animate();
	myBall2.display();

	myBall3.animate();
	myBall3.display();

	myBall4.animate();
	myBall4.display();

	myBall5.animate();
	myBall5.display();

	myBall6.animate();
	myBall6.display();

	myBall7.animate();
	myBall7.display();
}

function Ball(xVal,yVal,velXVal,velYVal,size,thisColor){

	this.x = xVal;
	this.y = yVal;
	this.xvel = velXVal;
	this.yvel = velYVal;
	this.size = size;
	this.color = thisColor;

	this.animate = function(){

		this.x += this.xvel
		this.y += this.yvel;

		if(this.x <= 0 || this.x >= width){
			this.xvel *= -1;
			mySound2.play();
		}
		if(this.y <= 0 || this.y >= height){
			this.yvel *= -1;
			mySound3.play();
		}
	}

	this.display = function(){

		fill(this.color)
		ellipse(this.x,this.y,this.size,this.size);
	}
		
};






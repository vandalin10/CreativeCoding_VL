var stateIndex = 0;
var nextButton;
var replayButton;

var mouseX;
var mouseY;
var backPosX = 935;
var backPosY = 735;
var backSize = 50;
var pillsX = 250;
var pillsY = 180;
var penX = 440;
var penY = 450;

var Drizzle;
var Sobbing;

var raindrops = [];

var meeting;
var crying;
var crying2;
var pills;
var kidTV;
var murTV;
var statue;
var statue2;
var pen;
var police;
var handcuffed;




function preload(){
	Drizzle = loadSound("assets/Drizzle.wav");
	Sobbing = loadSound("assets/Sobbing.wav");


	meeting = loadImage("assets/meeting.png"); //scene0
	crying = loadImage("assets/crying.png"); //scene 1
	crying2 = loadImage("assets/crying2.png");
	pills = loadImage("assets/pills.png");
	kidTV = loadImage("assets/kidnapped.png"); //scene2
	murTV = loadImage("assets/murder.png"); //scene4
	statue = loadImage("assets/statue.png"); //scene5
	statue2 = loadImage("assets/statue2.png");
	pen = loadImage("assets/pen.png");
	police = loadImage("assets/police.png"); //scene6
	handcuffed = loadImage("assets/handcuffed.jpg") //scene7

	nextButton = loadImage("assets/next.png");
	replayButton = loadImage("assets/replay.png");

}

function setup() {

	createCanvas(1000,800);
	Drizzle.play();
  // put setup code here
}

var beforedead = false;
function draw() {

	console.log(mouseX, mouseY);
	background(169);
	text(stateIndex,50,50)
	switch(stateIndex){
		case 0:
			outsideScene();
			break;
		case 1:
			killingScene();
			break;
		case 2:
			deadScene();
			break;
		case 3:
			timeScene();
			break;
		case 4:
			murdererScene();
			break;
		case 5:
			almostScene();
			break;
		case 6:
			accuseScene();
			break;
		case 7:
			caughtScene();
			break;

		default:
			break;
	}
}

function outsideScene(){

	
	let f = frameCount/120; //creating the animation 
	for (var i=0; i<random(5); i++) { //quantity of the drizzles
		raindrops.push(new rain());
	}
	for (let drops of raindrops) {
		drops.update(f); 
		drops.display(); 
	}


	image(meeting,0,0,width,height);
	image(nextButton,backPosX,backPosY,backSize,backSize);

	if(mouseX>730 && mouseX<880 && mouseY>300 && mouseY<650){ //girl
		fill(0);
		textSize(20);
		text("Sophie L, attending Blank Elementary",600,300);
		}
}

function killingScene(){

	Drizzle.stop();

	// text(beforedead,50,50)

	if(beforedead == false){
		image(crying,0,150,1000,700);
		image(pills,pillsX,pillsY,75,50);

		if(mouseX>265 && mouseX<325 && mouseY>180 && mouseY<220){ //pills
			fill(0);
			textSize(20);
			text("Sleeping pills",230,150);
		}

		if(mouseX>800 && mouseX<980 && mouseY>350 && mouseY<670){ //crying girl
			fill(0);
			textSize(20);
			text("So annoying, silence her!",750,320);
		}

	}
	// console.log("heyy")

	if(beforedead == true){
		// console.log(beforedead);

		image(crying2,0,150,1000,700);
		image(nextButton,backPosX,backPosY,backSize,backSize);
		Sobbing.stop();

		if(mouseX>860 && mouseX<980 && mouseY>400 && mouseY<670){ //crying girl
			fill(0);
			textSize(20);
			text("...is she dead?",850,380);
		}
	}
}
//if pills are on top of crying girl, img crying2 will appear


function deadScene(){
	// background(0)
	image(kidTV,0,0,width,height);
	image(nextButton,backPosX,backPosY,backSize,backSize);

}

function timeScene(){

	textSize(50);
	fill(0);
	textAlign(CENTER,CENTER);
	text("25 years later...", width/2, height/2);
	image(nextButton,backPosX,backPosY,backSize,backSize);
}

function murdererScene(){

	image(murTV,0,0,width,height);
	image(nextButton,backPosX,backPosY,backSize,backSize);
}

function almostScene(){


	if(beforedead == false){
		image(statue,0,0,width,height);
		image(pen,penX,penY,100,100);

		if(mouseX>300 && mouseX<700 && mouseY>0 && mouseY<335){ //calender
			fill(0);
			textSize(20);
			text("Mark the day you are free again!",500,40);
		}
		if(mouseX>440 && mouseX<540 && mouseY>460 && mouseY<540){ //pen
			fill(0);
			textSize(20);
			text("Pen",440,500);
		}
	}

	if(beforedead == true){
		image(statue2,0,0,width,height);
		image(nextButton,backPosX,backPosY,backSize,backSize);
	}
}

function accuseScene(){

	image(police,0,0,width,height);
	image(nextButton,backPosX,backPosY,backSize,backSize);

	if(mouseX>180 && mouseX<800 && mouseY>100 && mouseY<600){ //arrest
		fill(0);
		textSize(28);
		text("You are under arrest for the murder of Sophie L",550,700);
		}
}

function caughtScene(){

	image(handcuffed,-100,0,1200,800);
	image(replayButton,backPosX,backPosY,backSize,backSize);

	if(mouseX>180 && mouseX<800 && mouseY>100 && mouseY<600){ //arrest
		fill(0);
		textSize(28);
		text("You have the right to remain silent",550,650);
		text("Anything you say can and will be used against you", 550,675);
		}
}



 //end of draw function
var sceneJustChanged = false
function mousePressed(){

	if(stateIndex == 0){ //standing in the rain
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 1;
			sceneJustChanged=true
			Sobbing.play();
		}
	}

	else if(stateIndex == 1){ //captured kid crying

		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 2;
		}
	}

	else if(stateIndex == 2){

		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 3;
		}
	}

	else if(stateIndex == 3){
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 4;
		}
	}

	else if(stateIndex == 4){
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 5;
			beforedead = false
			sceneJustChanged = true;
		}
	}

	else if(stateIndex == 5){
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 6;
		}
	}

	else if(stateIndex == 6){
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 7;
		}
	}

	else if(stateIndex == 7){
		if(mouseX>935 && mouseX<970 && mouseY>730 && mouseY<770){
			stateIndex = 0;
		}
	}


} //end of mouseClicked function 

function mouseDragged(){
	if(stateIndex == 1 && !sceneJustChanged){
		pillsX = mouseX
		pillsY = mouseY;
	}

	if(stateIndex == 5 && !sceneJustChanged){
		penX = mouseX;
		penY = mouseY;
	}

}//end of mouseDragged function

function mouseReleased(){

	if (sceneJustChanged){
		sceneJustChanged = false
	}
	else{
		beforedead = true;
	}

	//console.log(beforedead);
}

function rain(){

  this.posX = 0;
  this.posY = random(-100,0);
  this.initialangle = random(0,5);
  this.size = random(2,4);
  this.size2 = 8
  this.color = color(200,200,255);

  this.radius = sqrt(random(pow(width/2,2)));

  this.update = function(time) {
    let w = 0.03; //deviation of the snow
    let angle = w*time + this.initialangle;
    this.posX = width/2 + this.radius*sin(angle);
    this.posY += pow(this.size, 0.5);
  }

  this.display = function() {
  	fill(this.color);
  	stroke(255);
    ellipse(this.posX, this.posY, this.size, this.size2);
  }

};


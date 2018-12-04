//position of main ball
var x = 100;
var y = 450;

var sceneIndex = 1;
var actions = 0


//help from TA Che Yu Wu
function keyPressed(){

	if (sceneIndex == 1){
		if (keyCode == 32){
			actions++
		}
	}
		if (actions == 2 && sceneIndex == 1){
			actions = 0
			sceneIndex++
		}

}

function setup() {
	createCanvas(1200,500);
	background(169);
}


function draw(){
//only want black ball to move left and right
//arrow code taken from p5js.org, https://editor.p5js.org/2sman/sketches/rkGp1alib
	if (keyIsPressed && keyCode == LEFT_ARROW){
			x = x-10;
		}
	else if (keyIsPressed && keyCode == RIGHT_ARROW){
			x = x+10;
		}



	if (sceneIndex == 1){
		sceneDraw1();
	}
	else if (sceneIndex == 2){
		if (x>width){ //goes to next scene when ball goes out of frame
			sceneIndex++
			x=0
			//console.log("scene changed")
		}
		sceneDraw2();
	}
	else if (sceneIndex == 3){
		if (x>width){
			sceneIndex++
			x=0
			//console.log("scene changed")
		}
		sceneDraw3();
	}
	else if (sceneIndex == 4){
		if (x>width){
			sceneIndex++
			x=0
			//console.log("scene changed")
		}
		sceneDraw4();
	}
	else if (sceneIndex == 5){
		if (x>width){
			sceneIndex++
			x=0
			//console.log("scene changed")
		}
		sceneDraw5();
	}
	else if (sceneIndex == 6){
		if (x>width){
			sceneIndex=1 //loop back to beginning
			x=0
			//console.log("scene changed")
		}
		sceneDraw6();
	}	
	
}

function sceneDraw1(){

	//scene 1 (in bed dreaming)
	//bed frame
	background(169);
	noStroke();
	fill(215);
	rect(400,100,400,400);
	//pillow
	noStroke();
	fill(240);
	rect(450,130,300,150);
	//main character
	fill(0);
	ellipse(600,300,200,200);
	//blanket
	noStroke();
	fill(240);
	rect(430,320,340,200);

	//dream bubbles
	fill(255)
	ellipse(800,200,30,30);
	ellipse(870,150,40,40);
	ellipse(1050,50,250,250);

	}


function sceneDraw2(){
	//scene 2 (bedroom)
	background(169);
	//bed
	noStroke();
	fill(200);
	rect(0,150,20,450);
	rect(0,350,350,20);
	rect(350,350,20,200);

	//door
	noStroke();
	fill(150);
	rect(1000,100,200,400);
	//door handle
	fill(0);
	rect(1175,290,15,50);

	//main ball
	fill(0);
	ellipse(x,y,50,50); 
}
function sceneDraw3(){
	//scene 3 (walking past buildings)
	background(135,200,255);
	//houses
	noStroke();
	fill(221,160,221); //purple pink
	rect(0,100,150,400);
	fill(30,144,250); //dark blue
	rect(150,200,150,300);
	fill(255,160,122); //salmon orange
	rect(300,150,150,400);
	fill(255,105,180); //hot pink 
	rect(450,75,150,425);
	fill(132,112,255); //purple blue
	rect(600,220,150,300);
	fill(205,92,92); //red
	rect(750,260,150,300);
	fill(60,179,113); //forest green
	rect(900,100,150,400);
	fill(138,43,226); //dark purple
	rect(1050,200,150,300);

	//main ball
	fill(0);
	ellipse(x,y,50,50); 

}

function sceneDraw4(){
	//scene 4 (walking past ppl in groups)
	background(65,105,205);
	//couples
	noStroke();
	fill(0,0,255); //blue ball
	ellipse(270,240,50,50); 
	fill(255,105,180); //pink ball
	ellipse(270,300,50,50);
	//group of three
	fill(147,112,219); //purple ball
	ellipse(500,250,50,50);
	fill(0,0,200); //blue
	ellipse(550,200,50,50);
	fill(200,100,180); //pink
	ellipse(600,250,50,50);
	//group of two 
	fill(150,50,255); //purple
	ellipse(800,310,50,50);
	fill(200,100,150); //pink
	ellipse(800,370,50,50);
	//group of four
	fill(0,0,200); //blue
	ellipse(1050,100,50,50);
	fill(250,100,150); //pink
	ellipse(1110,150,50,50);
	fill(150,80,200); //purple
	ellipse(1050,180,50,50);
	fill(200,50,80); //red
	ellipse(1110,220,50,50);
	//group of two
	ellipse(100,100,50,50);
	fill(150,110,200);
	ellipse(100,160,50,50);

	//main ball
	fill(0);
	ellipse(x,y,50,50); 

}

function sceneDraw5(){
	//scene 5 (walking home past buildings)
	background(106,90,205);
	//houses
	noStroke();
	fill(221,160,221); //purple pink
	rect(0,100,150,400);
	fill(30,144,250); //dark blue
	rect(150,200,150,300);
	fill(255,160,122); //salmon orange
	rect(300,150,150,400);
	fill(255,105,180); //hot pink 
	rect(450,75,150,425);
	fill(132,112,255); //purple blue
	rect(600,220,150,300);
	fill(205,92,92); //red
	rect(750,260,150,300);
	fill(60,179,113); //forest green
	rect(900,100,150,400);
	fill(138,43,226); //dark purple
	rect(1050,200,150,300);

	//main ball
	fill(0);
	ellipse(x,y,50,50); 

}

function sceneDraw6(){
	//scene 6 (walking towards bed)
	background(169);
	//bed
	noStroke();
	fill(200);
	rect(1180,150,20,450);
	rect(850,350,350,20);
	rect(850,350,20,200);

	//door
	noStroke();
	fill(150);
	rect(0,100,200,400);
	//door handle
	fill(0);
	rect(20,290,15,50);

	//main ball
	fill(0);
	ellipse(x,y,50,50); 

}






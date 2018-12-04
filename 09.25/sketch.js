function setup() {
	createCanvas(600,500);
}

function draw() {

}

function mouseMoved(){
	noStroke();
	if(mouseX < (width/2)){
		fill(0,155,0);
		//green
		rect(300,0,100,500);
	}
	else if (mouseY < height/2){
		fill(255,128,0);
		//orange
		rect(0,0,300,250);
	}
	else{
		fill(51,51,255);
		//blue
		rect(0,250,300,250);
	}
}
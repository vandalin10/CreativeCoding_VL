function setup() {

	createCanvas(800,500);
	background(200);

  // put setup code here
}

function draw() {

	push();
	translate(200,200);
	rotate(PI/4);
	//diamond shape
	fill(200,0,0);
	rect(0,0,50,50);
	pop();

	push();
	translate(420,250);
	rotate(PI);
	fill(150,0,0);
	rect(0,0,50,50);
	pop();

	push();
	translate(600,350);
	//translate down more›
	rotate(PI);
	fill(100,0,0);
	rect(0,0,50,50);
	pop();

  // put drawing code here
}


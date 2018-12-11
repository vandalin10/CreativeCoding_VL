var canvas;
var sound1;
var sound2;
var raindrops = []; 
var beforeImage;
var afterImage;


function preload(){

  sound1 = loadSound("assets/Drizzle.wav");
  sound2 = loadSound("assets/Thunder.mp3");
  beforeImage = loadImage("assets/cover.png");
  afterImage = loadImage("assets/uncover.png");
  
}


function setup() {

  sound1.play()
  canvas = createCanvas(1000,800); 
  canvas.position(100,0);
  fill(225);
  noStroke();

}

var bf = false
function draw() {

  background(100);
  imageMode(CENTER);

  let f = frameCount/60;
  for (var i=0; i<random(5); i++) {
    raindrops.push(new rain());
  }
  for (let drops of raindrops) {
    drops.update(f); 
    drops.display(); 
  }

  if (bf==false){
	fill(255)
  	image(beforeImage,450,475,800,850);
  }
  if (bf==true){
  	fill(255)
  	image(afterImage,450,475,800,1050);
  }
}

function rain(){

  this.posX = 0;
  this.posY = random(-100,0);
  this.initialangle = random(0,5);
  this.size = random(2,5);

  this.radius = sqrt(random(pow(width/2,2)));

  this.update = function(time) {
    let w = 0.03; 
    let angle = w*time + this.initialangle;
    this.posX = width/2 + this.radius*sin(angle);
    this.posY += pow(this.size, 0.5);
  }

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  }

};

function mousePressed(){
	//mouse inside face
	fill(255);
	bf = true
	sound2.play();

}

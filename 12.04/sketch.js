var canvas;
var image;
let raindrops = []; 

function setup() {
  canvas = createCanvas(600, 600);
  canvas.position(100,100);
  fill(225);
  noStroke();

  image = createImg("https://i.pinimg.com/originals/05/bf/28/05bf28aa59d735df8ba014046f06d6e4.jpg");
  image.position(250,200);
  image.size(300,500);
}

function draw() {
  background(100);
  let f = frameCount/60;

  for (var i=0; i<random(5); i++) {
    raindrops.push(new rain());
  }

  for (let drops of raindrops) {
    drops.update(f); 
    drops.display(); 
  }
}

function rain() {

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

function mouseMoved(){

	//umbrella moving part
}





int squaresize;
float red;
float orange;
float yellow;
float green;
float blue;
float purple;

boolean redMode = false;
boolean orangeMode = false;
boolean yellowMode = false;
boolean greenMode = false;
boolean blueMode = false;
boolean purpleMode = false;

color fillColor;

void setup(){
  size(500,500);
  background (190); 
  textSize(20);
  
  text("Press 'r' for red, 'o' for orange, 'y' for yellow", 30,40);
  fill(0,200,300);
  text("'g' for green,'b' for blue and 'p' for purple",40,70);
  fill(0,200,300);
  
  //println("Press 'r' for red, 'o' for orange, 'y' for yellow, 'g' for green,");
  //println("'b' for blue and 'p' for purple");
}

void draw(){
}

void keyPressed(){ 
 
  if(key == 'r'){
    redMode = true;
    orangeMode = false;
    yellowMode = false;
    greenMode = false;
    blueMode = false;
    purpleMode = false;
  }
  else if (key == 'o'){
    redMode = false;
    orangeMode = true;
    yellowMode = false;
    greenMode = false;
    blueMode = false;
    purpleMode = false;
  }
  else if (key == 'y'){
    redMode = false;
    orangeMode = false;
    yellowMode = true;
    greenMode = false;
    blueMode = false;
    purpleMode = false;
  }
  else if (key == 'g'){
    redMode = false;
    orangeMode = false;
    yellowMode = false;
    greenMode = true;
    blueMode = false;
    purpleMode = false;
  }
  else if (key == 'b'){
    redMode = false;
    orangeMode = false;
    yellowMode = false;
    greenMode = false;
    blueMode = true;
    purpleMode = false;
  }
  else if (key == 'p'){
    redMode = false;
    orangeMode = false;
    yellowMode = false;
    greenMode = false;
    blueMode = false;
    purpleMode = true;
  }
  else{
    background(190);
    println("Redo!");
  }
}

void mouseDragged(){
  float squaresize = random(1,10);
  
  if(redMode == true){
    red = random(0,255);
    fillColor = color(red,0,0);
  }
  else if (orangeMode == true){
    orange = random(100,165);
    fillColor = color(255,orange,0);
  }
  else if (yellowMode == true){
    yellow = random(200,255);
    fillColor = color(255,yellow,0);
  }
  else if (greenMode == true){
    green = random(0,255);
    fillColor = color(0,green,0);
  }
  else if (blueMode == true){
    blue = random(0,255);
    fillColor = color(0,0,blue);
  }
  else if (purpleMode == true){
    purple = random(75,255);
    fillColor = color(100,70,purple);
  }
  
  
  fill(fillColor);
  rect(mouseX,mouseY,squaresize,squaresize);
}

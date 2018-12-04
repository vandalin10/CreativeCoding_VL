size(400,450); //window size

//base-face
//peach color
fill(255,218,185);
noStroke();
rect(100,90,200,200);

//bring sides of face and neck down so hair hides behind

//black hair
//black color
fill(0,0,0);
stroke(1);
//right hair-bangs
rect(175,44,30,50);
rect(205,50,30,60);
rect(235,60,30,85);
rect(265,80,30,100);
rect(295,130,20,150);
rect(305,150,20,160);
rect(280,150,30,180);
rect(280,150,40,290);

rect(100,290,200,150);

//even out right top bangs 
triangle(176,42,235,50,200,80);
triangle(235,50,265,60,240,100);
triangle(265,60,300,85,260,120);
triangle(300,85,340,200,270,100);

//even out right bottom bangs
triangle(175,95,205,110,230,80);
triangle(205,110,235,145,240,100);
triangle(235,145,300,250,270,100);

//left hair bangs
rect(145,64,30,30);
rect(115,62,30,50);
rect(85,95,30,55);
rect(75,110,20,140);
rect(75,200,28,240);

//even out left top bangs
triangle(175,43,118,60,200,80);
triangle(120,60,85,95,180,80);
triangle(85,95,75,120,140,80);

//even out left bottom bangs
triangle(175,95,145,112,110,70);
triangle(140,105,110,160,80,120);
triangle(110,160,80,320,75,120);

//eyebrowss
rect(130,165,45,5);
rect(225,165,45,5);

//eyessss
fill(255,255,255);
ellipse(152,200,40,12);
ellipse(247,200,40,12);

//eye pupil 
fill(0,0,0);
ellipse(152,200,12,12);
ellipse(247,200,12,12);

//glasses
noFill();
//thicker frames
strokeWeight(2); 
rect(120,185,65,30);
rect(215,185,65,30);
//middle connecting frame 
line(185,200,215,200);
//side frame
line(120,185,85,140);

//nose
noStroke();
//brown peach color
fill(238,203,173);
rect(194,230,12,41);
triangle(184,281,216,281,200,250);

//peach color
fill(255,218,185);
//mid section of face
rect(175,275,50,70);

//lips
//indian red
fill(205,92,92);
rect(185,305,33,5);
//curved edge
triangle(180,305,185,305,185,310);
triangle(218,305,218,310,223,305);
//upper lips
triangle(180,305,196.5,300,204.75,305);
triangle(223,305,206.5,300,198.25,305);

//peach color
fill(255,218,185);
//sides of face
triangle(103,287,175,287,175,345);
triangle(300,287,225,287,225,345);

//neck
rect(170,335,60,45);

//hair touchup
strokeWeight(2);
fill(0,0,0);
triangle(310,280,280,280,270,310);
triangle(105,250,90,300,130,320);

var myData;
var url;

var baseUrl;
var apiKey;

var inputCity;
var inputButton;



function setup() {

	createCanvas(400,400);

	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	var cityID = "4277241"; //from a table in the documentation
	apiKey = "407fa9b356aebcee449f439c079c444f"; //update this with your API key!

	url = baseUrl + "id=" + cityID + "&APPID=" + apiKey;
	console.log(url);

    inputCity = createInput("CityID");
    inputCity.position(50, 250);
    inputCity.style('width', '150px');
    
    inputButton = createButton("Search");
    inputButton.position(100,300);
    inputButton.mousePressed(data);

}

function draw() {

	background(200);

}

function data(){

	var result1 = inputCity.value(); 
	inputCity.value(""); 

	var result2 = inputButton.value(); 
	inputButton.value(""); 
}
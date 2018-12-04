var myData;
var url;

var baseUrl;
var cityID;
var apiKey;

function setup() {

	createCanvas(600,600);

	baseUrl = "https://holidayapi.com/countries"
	cityID = "cn"
	apikey = "85eba43c-9ca7-4a38-8684-849f97d1322b"

	url = baseUrl + "id=" + cityID + "&AAPID=" + apiKey;
	console.log(url); 

}

function draw() {

	background(100);

}

function gotData(myData){ //callback function from loadJSON

	console.log(myData);
}

function mouseClicked(){

	myData = loadJSON(url, gotData);

}

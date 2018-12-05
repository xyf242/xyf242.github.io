//https://r6.tracker.network/



var canvas;
var slider;

var firstOption;
var secondOption;
var thirdOption;

var operatorSelect;

var playing = false;

//audio
var music1;

//images
var image1;
var image2;
var image3;
var mine;

//operators' images
var doc;
var doc1;
var doc2;
var rook;
var rook1;
var rook2;

//operators' video
var docV;
var rookV;
var video;
var twitch;

var button;



function preload(){
	//json
	//loadJSON("operators.json", getOperators);
	//loadJSON("js/city2.json", getCityDescription);

	//audio
	music1 = loadSound("audio2/bgm.mp3");

	//images
	image1 = loadImage("images2/1.jpg");
	image2 = loadImage("images2/2.jpg");
	image3 = loadImage("images2/3.jpg");
	mine = loadImage("images2/stats.png");

	//operators' images
	doc = loadImage("images2/doc.png");
	doc1 = loadImage("images2/doc1.png");
	doc2 = loadImage("images2/doc2.png");
	rook = loadImage("images2/rook.png");
	rook1 = loadImage("images2/rook1.png");
	rook2 = loadImage("images2/rook2.png");
	fuze = loadImage("images2/fuze.png");
	fuze1 = loadImage("images2/fuze1.png");
	fuze2 = loadImage("images2/fuze2.png");
	bandit = loadImage("images2/bandit.png");
	bandit1 = loadImage("images2/bandit1.png");
	bandit2 = loadImage("images2/bandit2.png");

} 




function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	//slider = createSlider(0, 1, 0.5, 0.01);
	//slider.position(0, 250);


	beginning();
}

function beginning(){
	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	music1.play();
	//music1.volume(1);
	
	image(image1, 0, 200, image1.width*1, image1.height*1);
	image(image3, 300, 700, image1.width*1, image1.height*1);
	//image(image2, 50, 0, image2.width/2, image2.height/2);

	greeting = createP("Rainbow Six Siege");
	greeting.position(0, 0);
	createElement("br");

	greeting2 = createP("Tom Clancy's Rainbow Six Siege is a tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage defusing a bomb, and taking control of a capture point. The title has no campaign but features a series of short missions that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the White Masks, a terrorist group that threatens the safety of the world. ");
	greeting2.position(600, 200);

	firstOption = createElement('h1', "Operators");
	firstOption.position(50, 100);
	secondOption = createElement('h1', "Stats");
	secondOption.position(300, 100);
	//thirdOption = createElement('h1', "Back");
	//thirdOption.position(550, 100);
	firstOption.mousePressed(Operators);
	secondOption.mousePressed(stats);
	//thirdOption.mousePressed(back);
	

	twitch = createVideo("videos2/twitch.mp4");
	twitch.position(1100, 700);
	twitch.loop();

	rect(0,100,windowWidth,80);
	

}

function Operators(){
	if (video) {
    	video.hide();
  	} 
  	//music1.stop();

	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	twitch.hide();
	//video.pause();
	//greeting.mousePressed(beginning());
	
	title = createElement('h2', "");
	title.position(600, 600);

	greeting2.hide();
	//slider.hide();

	//operatorSelect = createSelect();
	//operatorSelect.position(100,220);
	//operatorSelect.option("Doc");

	//button = createButton('');

	image(doc, 0, 200, doc.width/2, doc.height/2);
	name1 = createElement('h2', "Doc");
	name1.position(180, 550);
	name1.mousePressed(Doc);

	image(rook, 400, 200, rook.width/2, rook.height/2);
	name2 = createElement('h2', "Rook");
	name2.position(550, 550);
	name2.mousePressed(Rook);

	image(fuze, 800, 200, rook.width/2, rook.height/2);
	name3 = createElement('h2', "Fuze");
	name3.position(950, 550);
	name3.mousePressed(Fuze);

	image(bandit, 1200, 200, rook.width/2, rook.height/2);
	name4 = createElement('h2', "Bandit");
	name4.position(1350, 550);
	name4.mousePressed(Bandit);

	//greeting.mousePressed(beginning());

}

function stats(){
	if (video) {
    	video.hide();
  	}

	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	twitch.hide();
	greeting2.hide();
	name1.hide();
	name2.hide();
	name3.hide();
	name4.hide();

	image(mine, 200, 200);

}


//function back(){
	//thirdOption.mousePressed(beginning());
//}



function Doc(){
	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	name1.hide();
	name2.hide();
	name3.hide();
	name4.hide();

	
	video = createVideo("videos2/doc.mp4");
	video.position(100, 300);
	video.loop();
	//button = createButton('play');
	//button.mousePressed(Vid);

	image(doc1, 500, 215, doc1.width/1.4, doc1.height/1.2);
	image(doc2, 500, 520, doc2.width/1.4, doc2.height/1.4);
}



function Rook(){

	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	name1.hide();
	name2.hide();
	name3.hide();
	name4.hide();
	video = createVideo("videos2/rook.mp4");
	video.position(100, 300);
	video.loop();
	image(rook1, 500, 215, doc1.width/1.4, doc1.height/1.2);
	image(rook2, 500, 520, doc2.width/1.4, doc2.height/1.4);
}

function Fuze(){

	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	name1.hide();
	name2.hide();
	name3.hide();
	name4.hide();

	
	video = createVideo("videos2/fuze.mp4");
	video.position(100, 300);
	video.loop();
	//button = createButton('play');
	//button.mousePressed(Vid);
	image(fuze1, 500, 215, doc1.width/1.4, doc1.height/1.2);
	image(fuze2, 500, 520, doc2.width/1.4, doc2.height/1.4);
}

function Bandit(){
	

	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	name1.hide();
	name2.hide();
	name3.hide();
	name4.hide();

	
	video = createVideo("videos2/bandit.mp4");
	video.position(100, 300);
	video.loop();
	//button = createButton('play');
	//button.mousePressed(Vid);
	image(bandit1, 500, 215, doc1.width/1.4, doc1.height/1.2);
	image(bandit2, 500, 520, doc2.width/1.4, doc2.height/1.4);
}



function draw(){
	//music1.volume(slider.value());


}

function Vid() {
	if (playing) {
    	docV.pause();
    	button.html('play');
  	} 
  	else {
    	docV.loop();
    	button.html('pause');
    }
    playing = !playing;
}


function beginning2(){
	background(50, 50, 50);
	rect(0,100,windowWidth,80);
	//music1.play();
	//music1.volume(1);
	
	image(image1, 0, 200, image1.width*1, image1.height*1);
	image(image3, 300, 700, image1.width*1, image1.height*1);
	//image(image2, 50, 0, image2.width/2, image2.height/2);

	greeting = createP("Rainbow Six Siege");
	greeting.position(0, 0);
	createElement("br");

	greeting2 = createP("Tom Clancy's Rainbow Six Siege is a tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015. The game puts heavy emphasis on environmental destruction and cooperation between players. Each player assumes control of an attacker or a defender in different gameplay modes such as rescuing a hostage defusing a bomb, and taking control of a capture point. The title has no campaign but features a series of short missions that can be played solo. These missions have a loose narrative, focusing on recruits going through training to prepare them for future encounters with the White Masks, a terrorist group that threatens the safety of the world. ");
	greeting2.position(600, 200);

	firstOption = createElement('h1', "Operators");
	firstOption.position(50, 100);
	secondOption = createElement('h1', "Stats");
	secondOption.position(300, 100);
	firstOption.mousePressed(Operators);
	secondOption.mousePressed(stats);

	twitch = createVideo("videos2/twitch.mp4");
	twitch.position(1100, 700);
	twitch.loop();

	rect(0,100,windowWidth,80);
	

}



function WindowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
	
}
var canvas;

var video;
var playButton;
var vidPlaying = true;

var vidSelect1;
var vidSelect2;

//images
var image1;
var image2;

//videos
var videos1 = ['d1', 'd2'];
var videos2 = ['Chicago', 'NewYork', 'Moscow', 'Hangzhou'];


function preload(){
    image1 = loadImage('images/3.jpg');
    image2 = loadImage('images/2.jpg');
}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');

    video = createVideo(['']);
    video.hide();

    beginning();
}


function beginning(){
    //background(image2);
    greeting = createP("Welcome!");
    greeting.position(0, 0);
    createElement("br");

    firstOption = createElement('h2', "drivers license test");
    firstOption.position(10, 200);
    secondOption = createElement('h2', "traveling");
    secondOption.position(10, 300);

    firstOption.mousePressed(driving);
    secondOption.mousePressed(traveling);
}

function driving(){
    greeting.hide();
    if (vidSelect2){
        vidSelect2.hide();
    }

    background(image2);
    vidSelect1 = createSelect();
    vidSelect1.position(10, 10);
    for (i = 0; i < videos1.length; i++) {
        vidSelect1.option(videos1[i]);
    }
    vidSelect1.changed(changeVid1);

    playButton = createButton('play');
    playButton.mousePressed(playVid);
    playButton.position(10, 35);
}

function traveling(){
    greeting.hide();
    if (vidSelect1){
        vidSelect1.hide();
    }

    background(image1);
    vidSelect2 = createSelect();
    vidSelect2.position(10, 10);
    for (i = 0; i < videos2.length; i++) {
        vidSelect2.option(videos2[i]);
    }
    vidSelect2.changed(changeVid2);

    playButton = createButton('play');
    playButton.mousePressed(playVid);
    playButton.position(10, 35);
}

function changeVid1(){
    video.attribute('src', 'videos/' + vidSelect1.value() + '.mp4');
    video.position(150, 300);
    video.show();
}

function changeVid2(){
    video.attribute('src', 'videos/' + vidSelect2.value() + '.mp4');
    video.position(150, 300);
    video.show();
}


function playVid(){
    if(vidPlaying == true){
        video.pause();
        playButton.html('play');
    }
    else{
        video.play();
        video.loop().time(10);
        video.volume(.5);
        video.speed(1);
        playButton.html('pause');
    }
    vidPlaying = !vidPlaying;
}


function draw(){
    //image(image1, 0, 0, windowWidth, windowHeight);

    video.position(200, 0);


}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
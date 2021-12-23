var boy,bgimg,boyimg,track,trackImg
function preload(){
bgimg=loadImage("bg.jpg")
trackImg=loadImage("track.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
bg=createSprite(windowWidth/2, windowHeight/3);
//bg.addImage("track",bgimg)
track=createSprite(windowWidth/3, windowHeight/2);
track.addImage("track",trackImg)
track.velocityY=1

boy=createSprite(500,500,50,50);

}

function draw() {
 background (0)

if (track.y>400){
track.y=300



}

if(keydown("LEFT_ARROW")){
    boy.x=boy.x-3
}
 drawSprites()


 
}
var trackimage,track,boyimage,boy
function preload(){
  //pre-load images
  trackimage=loadImage('path.png')

  boyimage=loadAnimation('runner-1.png','runner-2.png')
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
  track.addImage(trackimage)
  boy=createSprite(200,350)
  boy.addAnimation('boy',boyimage)
  boy.scale=0.1
  track.velocityY=6
}

function draw() {
  background(0);
  if (track.y>400){
    track.y= height/2
  }
drawSprites()
}

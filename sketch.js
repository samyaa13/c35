var balloon, background;

function setup() {
  database = firebase.database();
  createCanvas(800,400);
 balloon = createSprite(100, 400, 20, 20);
}

function draw() {
  background(255,255,255);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y -10;;
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y +10;;
  }
  drawSprites();
}

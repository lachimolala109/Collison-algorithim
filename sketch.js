
var object2, object1;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
 
 
  object1 = createSprite(800, 400,80,30);
  object1.shapeColor = "green";

  object2 = createSprite(100, 100, 50, 50);
  object2.shapeColor = "green";
  
  rect1 = createSprite(200, 400,50,50);
  rect1.shapeColor = "pink"; 
 
  rect2 = createSprite(200, 200,50,50);
  rect2.shapeColor = "white"; 
  
  rect1.velocityY = -5
  rect2.velocityY = 5
  
}

function draw() {
  background(0,0,0);  
 // rect1.x = World.mouseX;
 // rect1.y = World.mouseY;

  if(isTouching(rect1,rect2)){
    rect1.shapeColor = "purple";
    rect2.shapeColor = "purple";
  }
  
  else {
    rect1.shapeColor = "pink";
  
    rect2.shapeColor = "white";
  }
 isTouching(rect1,rect2)
  bounceOff(rect1,rect2)
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX*(-1)
      object2.velocityX = object2.velocityX*(-1)
    }
    if (object1.y - object2.y < object2.width/2 + object1.width/2
      && object2.y - object1.y < object2.width/2 + object1.width/2){
        object1.velocityY = object1.velocityY*(-1)
        object2.velocityY = object2.velocityY*(-1)
      }
}




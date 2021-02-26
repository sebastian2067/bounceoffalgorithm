var fixedRect, movingRect
var object1, object2, object3, object4

function setup() {
  createCanvas(800,400);
  

 fixedRect = createSprite(200,200,50,50);
fixedRect.shapeColor = "green"
 movingRect = createSprite(400,300,80,50);
 movingRect.shapeColor = 'blue'

object1 = createSprite(200,300,50,50);
object1.shapeColor = "green"
object2 = createSprite(300,200,50,50);
object2.shapeColor = "green"
object3 = createSprite(400,200,50,50);
object3.shapeColor = "green"
object4 = createSprite(500,200,50,50);
object4.shapeColor = "green"

movingRect.velocityX = -3
fixedRect.velocityX = +3
object1.velocityX = +3
}

function draw() {
  background(255,255,255);  


bounceOff(object1,movingRect)

//else{
  //fixedRect.shapeColor = "green"
  //movingRect.shapeColor = "blue"
//}





console.log(movingRect.x)
  drawSprites();
}

function bounceOff(gameObject1,gameObject2){
 


  if(gameObject1.x-gameObject2.x < (gameObject1.width + gameObject2.width)/2 && gameObject2.x-gameObject1.x < (gameObject2.width + gameObject1.width)/2)
{

  gameObject2.shapeColor = "red"
  gameObject1.shapeColor = "red"

 gameObject1.velocityX = gameObject1.velocityX * (-1);  
 gameObject2.velocityX = gameObject2.velocityX * (-1);
}
if(gameObject1.y-gameObject2.y <(gameObject1.height + gameObject2.height)/2 && gameObject2.y-gameObject1.y < (gameObject2.height + gameObject1.height)/2){

  gameObject1.velocityY = gameObject1.velocityY * (-1);
  gameObject2.velocityY = gameObject2.velocityY * (-1);

}
}
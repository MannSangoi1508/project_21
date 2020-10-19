var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  weight=random(30,52);
  thickness=random(22,83);
  speed=random(223,321);

  bullet= createSprite(50, 200, 50, 5);
  bullet.shapeColor=color("white");
  bullet.velocityX= speed;
  
  wall= createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  
 
}

function draw() {
  background(0); 
  
  
  if(hasCollided(wall,bullet))
  {
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if (damage<10){
    wall.shapeColor=color(0,255,0);
  }

  
}
  drawSprites();
}
function hasCollided(bullet1,wall1){
bulletRightEdge=bullet1.x+bullet1.width;
wallLeftEdge=wall1.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;
}
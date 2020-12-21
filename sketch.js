var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
 
  thickness = random(29,83);
  speed = random(10,89);
  weight = random(30,52);

  bullet = createSprite(200,200,12,8);
  bullet.velocityX = 10;

  wall = createSprite(1200,200,9,400);

  
}

function draw() {
  background("black");
  
if (hasCollided(bullet, wall)) 
{
  bullet.velocityX = 0;
  var damage=0.5 * speed * speed / (thickness*thickness*thickness);

  if (damage>10) 
  {
    wall.shapeColor=color(255,0,0);
  }

  if (damage<10) 
  {
    wall.shapeColor=color(0,255,0);
  }
}

    
  
  hasCollided();
  drawSprites();
}


 function hasCollided(lbullet, lwall)
  {
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge) {
   return true
 }  
  return false;
 }






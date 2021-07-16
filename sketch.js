var car, wall, speed, weight, def;
function setup() {
  createCanvas(800,400);
  car = createSprite(300, 200, 50, 50);
  wall = createSprite(750, 200, 20,200);
  speed = random(50,90);
  weight = random(400, 1500)
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    def = (0.5*weight*speed*speed)/22500;
    if(def<100)
    {
      car.shapeColor = "green";
    }
    else if(def >100 && def< 180)
    {
      car.shapeColor = "yellow";
    }
    else(def> 180)
    {
      car.shapeColor = "red" ;
    }
  }
  drawSprites();
}
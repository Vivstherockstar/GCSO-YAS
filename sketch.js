var deformation
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(30,220)
  weight=random(400,1550)
  console.log("speed " + speed)
  console.log("weight " + weight)
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = 80,80,80;

}

function draw() {
  background(255,255,255);  
  car.velocityX  = speed;
  if(isTouching(car,wall)){
    car.velocityX = 0;
    
  }
  
  if(isTouching(car,wall)){
    deformation = 0.5 * weight * speed * speed / 22500
if(deformation > 180){
 car.shapeColor = "red";
}
else(deformation > 80 && deformation < 180 ); {
car.shapeColor = "yellow";
}

if(deformation < 80 ){
  car.shapeColor = "green";
}


 }

  drawSprites();
}
 
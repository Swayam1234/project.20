var car,wall;
var weight,speed;
var button;


function setup() {
  createCanvas(800,400);
  button = createSprite(400,350,100,100);
  button.shapeColor = "blue";
  
  car = createSprite(200, 200, 50, 20);
  car.shapeColor = "255,255,255";
  speed= random(50,100);
  wall = createSprite(750,200,20,400);
  wall.shapeColor = "brown";
  weight = random(500,1500);

}

function draw() {
  background(0); 

text("Press here >>>>>",250,350);
if(mousePressedOver(button)&&car.x <201 ){
  car.velocityX = speed;
}

if(wall.x-car.x <(wall.width+car.width)/2) {
  var deformation = (0.5*weight*speed*speed)/22500;
  car.velocityX = 0;

  console.log("deformation");

  if(deformation <100){
    car.shapeColor = "green";
    text("PERFECT",200,200);
    
  }
  if(deformation >180){
    car.shapeColor = "red";
    text("NEED TO SLOW DOWN",200,200);
  }
  if(deformation >100 && deformation<180){
    car.shapeColor = "yellow";
    text("GOOD",200,200);
  }
}
  drawSprites();
}

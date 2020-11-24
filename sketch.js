var bullet,wall,thickness
var speed,weight




function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

}

function preload(){
  wall=createSprite(1200,200,thickness,height/2)
  bullet=createSprite(50,200,50,5)


  
  wall.shapeColour=80,80,80
}

function draw() {
  background("black");  
  bullet.velocityX=speed
  console.log(speed)
  console.log(weight)
  console.log(thickness)

 if (wall.x-bullet.x<(bullet.width+wall.width)/2){

   bullet.velocityX=0;

   var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (deformation>10) {
     bullet.shapeColor=color(255,0,0)}

     

      if (deformation<10){

        bullet.shapeColor=color(0,225,0)}}

  


  drawSprites();
}



var ship, ship_moving
var sea
var sea
function preload(){

}

function setup(){
  createCanvas(400,400);
  ship=createSprite(100,200,30,30)
  sea=createSprite(200,200,20,20)
  sea.addAnimation("sea.png")


}

function draw() {
  background("blue");
 sea.velocityx=-20
 console.log
 ship.collide(sea)
 if(sea.x<0){
   sea.x = sea.width/2
 }
}
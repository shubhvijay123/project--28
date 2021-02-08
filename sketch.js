
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,90,30);
  mango2=new mango(998,190,32)
  mango3=new mango(1088,175,35)
  mango4=new mango(998,95,29)  
  mango5=new mango(928,215,35)
  mango6=new mango(1178,205,35)
   
  stone1=new Stone(235,420,20)
  
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  
  constraint1=new Constraints(stone1.body,{x:240,y:419})


}

function draw() {

  background(230);
  //Add code for displaying text here!
	Engine.update(engine);
 
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  image(boy ,200,340,200,300);
  stone1.display();
  constraint1.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  constraint1.fly();
}
function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    constraint1.attach(stone1.body,{x:240,y:420})
  }

}
function detectCollision(lstone,lmango){
  
 
  stoneBodyPosition=lstone.body.position 
  mangoBodyPosition=lmango.body.position

  var distance=dist( stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lstone.r+lmango.r){
    Matter.Body.setStatic(imango.body,false)
  }

  

}




























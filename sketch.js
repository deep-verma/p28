
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

	mango1=new mango(1100,100,30);
    mango2=new mango(1000,100,30);
	mango3=new mango(1100,50,30);
	mango4=new mango(1500,100,30);
	mango5=new mango(1100,80,30);
	stoneObj = new stone(235,420,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	launcherObj = new Launcher(stoneObj.body,{x:235,y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  launcherObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseRealeased(){
	launcherObj.fly();
	
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		launcherObj.attach(stoneObj.body);
	}
}

function detectCollision(lstone,lmango){
	mPosition = lmango.body.position;
	sPosition = lstone.body.position;
    var distance = dist(sPosition.x,sPosition.y,mPosition.x,mPosition.y);
	if(distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
   	
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,150,30);
	mango3 = new Mango(1200,135,30);
	mango4 = new Mango(1125,175,30);
	mango5 = new Mango(950,225,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	stoneObj = new Stone(235,415,50,35);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}

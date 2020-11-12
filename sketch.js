
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,options,engine,world;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new paper(200,400,8);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  engine.update(engine);
  paper.dispay();
  
  drawSprites();
 
}




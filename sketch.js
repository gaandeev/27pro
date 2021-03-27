
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,rope;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=createSprite(200,500,20,20);
	bobObject2=createSprite(200,500,20,20);
	bobObject3=createSprite(200,500,20,20);
	bobObject4=createSprite(200,500,20,20);
	bobObject5=createSprite(200,500,20,20);
	rope= new Rope(210,500,1,380);
	
	roof= new Roof(400,100,500,50);


	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();
  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var	options={
	isStatic:true
}
ground1=Bodies.rectangle(400,550,800,20,options)
World.add(world,ground1)
console.log(ground1)
	//Create the Bodies Here.
	hammer1=new Hammer (200,200,20,50)
	stone1=new Stone (200,200,20,50)
rubber1=new Rubber(300,50,50)
sand1=new Sand (300,50,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 hammer1.display();
 rubber1.display();
 stone1.display();
 sand1.display();
rect(ground1.position.x,ground1.position.y,800,20)
}


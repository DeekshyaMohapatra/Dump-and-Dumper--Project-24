
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var catcher1,catcher2,catcher3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 paper = new Paper(300,100,this.radius);
 ground = new Ground(800,480,1600,20);
 catcher1 = new Catcher(1100,460,190,20);
 catcher2 = new Catcher(1000,410,20,120);
 catcher3 = new Catcher(1200,410,20,120);
 
	Engine.run(engine);

}


function draw() {
  //rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();
  catcher1.display();
  catcher2.display();
  catcher3.display();
 

  drawSprites();
} 

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-75})
	}
}




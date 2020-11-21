const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var MyEngine,MyWorld,Ground
var ball;

function setup() {
  createCanvas(800,400);
MyEngine= Engine.create()
MyWorld= MyEngine.world;

var Ground_Options={
  isStatic:true
}

Ground= Bodies.rectangle(400,380,800,20,Ground_Options);
World.add(MyWorld,Ground);
console.log(Ground.position.y);

var ball_options={
  restitution:1.5
}
ball=Bodies.circle(200,100,20,ball_options)
World.add(MyWorld,ball);
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,800,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}
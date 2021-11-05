const Engine = Matter.Engine
const World =   Matter.World
const Bodies =   Matter.Bodies
const Body =   Matter.Body

//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var ground
var world,engine
function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine= Engine.create ()
  world= engine.world
  
   var ball_options = {
    restitution: 0.1,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   }
  
//create a ground
 ground=Bodies.rectangle(200,380,400,20,ground_options)
//add to world
World .add(world ,ground)


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20)
  //write a rectangle function to display ground.
 


  
  
}


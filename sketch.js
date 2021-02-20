const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState;
var pen,pen_img;
var drawGroup;
var drawBoard;
var ball;

var drawPositionX,drawPositionY;

function preload(){
  pen_img = loadImage('new-pencil.png');
  //ballImg = loadImage('ball.png')
}

function setup() {
  engine = Engine.create();
	world = engine.world;

  createCanvas(displayWidth,displayHeight);

  drawBoard=createSprite(displayWidth/2,displayHeight/2,displayWidth-100,displayHeight-100);
  drawBoard.shapeColor="white";
  drawBoard.visible=false;

  pen=createSprite(200,200,10,10);
  pen.addImage(pen_img);
  pen.scale=0.15;

  drawGroup = createGroup();

  ball = new Ball(500,200);

  //ball_spr = createSprite(0,0);
  //ball_spr.addImage(ballImg);
  //ball_spr.scale=0.8;

  gameState="begin";

  Engine.run(engine);
}

function draw() {
  background(rgb(123, 155, 255));
  Engine.update(engine);

  ball.display();

  if(gameState=="begin")
  {
    textFont("Arial");
    textSize(50);
    fill("black");
    text("WELCOME TO CONNECT 'em", displayWidth/2-300, displayHeight-400);
    textSize(25);
    
    text("Press space to start", displayWidth/2-50, displayHeight-300);
    pen.visible=false;
    
  }
 
  if(keyDown("space") && gameState == "begin")
  {
    gameState="draw";
    drawBoard.visible=true;
    
    
  }
  
  if(gameState=="draw"){
    fill("black");
    textSize(14);
    pen.x=mouseX;
    pen.y=mouseY;
    
    if(mouseX>=100 && mouseY>=100)
    {
      pen.visible=true;
    }
    else
    {
      pen.visible=false;
    }
   
   
   drawPositionX=pen.x-0.5*pen.getScaledWidth();
   drawPositionY=pen.y+0.5*pen.getScaledHeight();
   
   if (mousePressedOver(drawBoard))
   {
     var drawSprite=createSprite(drawPositionX,drawPositionY,5,5);
     drawSprite.shapeColor="black";
     pen.depth=drawSprite.depth+1;
    
     drawGroup.add(drawSprite);
   }
  }
 
drawSprites();

}
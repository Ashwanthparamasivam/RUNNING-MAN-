  var path,boy, leftBoundary,rightBoundary;
  var pathImg,boyImg;
  var i;
  var energyDrink,energyImg;
  var power,powerImag;
  var coin,coinImg;

  
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  energyImg=loadImage("energyDrink.png");
  powerImg=loadImage("power.png");
 coinImg=loadImage("coin.png");
}

function setup(){
  
  createCanvas(400,400);

 
// Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

//create energyDrink 
  energyDrink=createSprite(100,-400);
  energyDrink.addImage( energyImg);
  energyDrink.velocityY=5;
  energyDrink.scale=0.1;

//create the bomb sprite
  coin= createSprite(300,-900);
coin.addImage(coinImg);
coin .velocityY=5;
coin.scale=0.4;
  
//creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);

//create power
  power = createSprite(200,200,100,100);
  power.shapeColor = "black";


  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;


  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {

  background(0);

  path.velocityY = 4;
  boy.x = World.mouseX;
  
  if(boy.isTouching(energyDrink)){
    power.addImage(powerImg);
    power.scale=0.5;
    power.velocityY=8;
    path.velocityY = 15;
  }
     


  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}


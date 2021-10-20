var i_jungle
 var ground;
 var i_monkey
 var invi_ground;
function preload(){
i_jungle = loadImage("jungle.jpg");
i_monkey = loadImage("ali.png");
i_crocodile = loadImage("crocodile.png");
i_snake = loadImage("snake.png");
}

function setup() {
  createCanvas(1200,600);
 ground = createSprite(600,550,1200,100);
 ground.shapeColor ='limegreen';
 monkey = createSprite(100,500);
 monkey.addImage('**%#',i_monkey);
 monkey.scale = 0.4
 invi_ground = createSprite(125,550,100,20);
 invi_ground.visible = false;
}

function draw() {
  background(i_jungle); 
  monkey.collide(invi_ground) 
  Moving(); 
  drawSprites();
}

function Moving(){
  if (frameCount%200===0){
  var object = createSprite(1200,520,1200,100);
  object.scale=0.3;
  //var snake = createSprite(1200,520,1200,100);
 // snake.scale=0.3;

  object.velocityX=-3;
  //snake.velocityX=-3;

  var rand = Math.round(random(1,2))
  switch(rand){
    case 1: object.addImage("crocodile",i_crocodile);break;
    case 2: object.addImage("snake",i_snake);break;
    default:break;
  }
  }
  // to make the monkey jump
  if ( keyDown("space")){
    monkey.velocityY = -10;
  }
  //to add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invi_ground)

}
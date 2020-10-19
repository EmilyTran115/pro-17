
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,ig;
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(100,350,400,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(200,380,1000,10)
  ground.velocityX = -4;
    ground.x = ground.width /2;
  
  ig=createSprite(300,380,600,10)
 ig.visible=false 
  
  
  
  
  
  
  foodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background(1000)
  
  if (keyDown("space")&& monkey.y>=344) {
  monkey.velocityY = -10;
}
  monkey.velocityY = monkey.velocityY + 0.3
  
  if (ground.x < 0) {
  ground.x = ground.width / 2;
}
  
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+ score, 500,50)
  
  stroke("black")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time"+ survivalTime,100,50)
  
  if (foodGroup.isTouching(monkey)){
      foodGroup.destroyEach()
  }
  
  if (obstacleGroup.isTouching(monkey)){
      foodGroup.destroyEach()
    obstacleGroup.destroyEach()
      }
  monkey.collide(ig);
  drawSprites();
  spawnbanana();
  spawnobstacle();
}

function spawnbanana(){
  if (frameCount%80===0){
   banana=createSprite(400,200,20,20) 
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.y=random(120,200)
    banana.lifetime = 80
    foodGroup.add(banana)
  }
}

function spawnobstacle(){
  if (frameCount%300===0){
    obstacle=createSprite(400,357,10,10)
     obstacle.addImage(obstacleImage)
     obstacle.scale=0.1 
    obstacle.velocityX=-4
    obstacle.lifetime = 100
    obstacleGroup.add(obstacle)
      }
}






const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(900,100,70,70)
    box2= new Box(800,100,70,70)
    box3= new Box(700,100,70,70)
    box4= new Box(900,100,70,70)
    box5= new Box(800,100,70,70)
    box6= new Box(700,100,70,70)
    ball= new Ball(200,200,80,80)
    ground = new Ground(600,height,1200,20);
    rope = new Rope(ball.body,{x:500,y:50})
}

function draw(){
    
    Engine.update(engine);
    
   
    ground.display();
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ball.display();
   rope.display();


}

function mouseDragged(){
    //if (gameState!=="launched"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    //slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    /*if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory=[];
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson= await response.json()
    var datetime= responseJson.datetime
    console.log(datetime)
    var hour=datetime.slice(11,13)
if(hour>=06&&hour<19){
    backgroundImg=loadImage("sprites/bg.png")
}
else{
    backgroundImg=loadImage("sprites/bg2.jpg")
}*/
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
function preload() {
    bkg = loadImage("nebula-space-art-ys.jpg");
}

function setup(){
    isFired = false;
    var canvas = createCanvas(1200,400);
    rand = round(random(0.5,3));
    engine = Engine.create();
    world = engine.world;
    switch(rand){
        case 1:
            box1 = new Block(650,240,30,70);
            box2 = new Block(700,240,30,70);
            box3 = new Block(750,240,30,70);
            box4 = new Block(800,240,30,70);
            box5 = new Block(850,240,30,70);
            box6 = new Block(750,170,300,20);
            box11 = new Block(650,100,30,70);
            box12 = new Block(700,100,30,70);
            box13 = new Block(750,100,30,70);
            box14 = new Block(800,100,30,70);
            box15 = new Block(850,100,30,70);
           
        break;
        case 2:
            box1 = new Block(650,240,30,70);
            box2 = new Block(700,240,30,70);
            box3 = new Block(750,240,30,70);
            box4 = new Block(800,240,30,70);
            box5 = new Block(850,240,30,70);
            box6 = new Block(550,170,30,200);
            box11 = new Block(650,100,30,70);
            box12 = new Block(700,100,30,70);
            box13 = new Block(750,100,30,70);
            box14 = new Block(800,100,30,70);
            box15 = new Block(850,100,30,70);
        break;
        case 3:
            box1 = new Block(650,240,30,70);
            box2 = new Block(700,240,30,70);
            box3 = new Block(750,240,30,70);
            box4 = new Block(800,240,30,70);
            box5 = new Block(850,240,30,70);
            box6 = new Block(750,100,300,20);
            box11 = new Block(650,100,30,70);
            box12 = new Block(700,100,30,70);
            box13 = new Block(750,100,30,70);
            box14 = new Block(800,100,30,70);
            box15 = new Block(850,100,30,70);
    }
    poly1 = new poly(50,100);
    sling1 = new SlingShot(poly1.body,{x: 150, y:100});
    Floor = new Ground(700,350,350,100);
}

function draw(){
    rectMode(CENTER);
    /**Setup**/
    background(bkg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    Floor.display();
    poly1.display();
    sling1.display();
    if(!isFired && mouseIsPressed){
        Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});
    }

}

function mouseReleased(){
    sling1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling1.attach(poly1.body);
    }
}
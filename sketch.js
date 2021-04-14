
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var background, tree, treeImage;
var boyImage;
var stones;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
function preload() {

	boyImage = loadImage("Plucking+mangoes/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 600, 1000, 20);
	tree = new Tree(750, 326, 350, 550)

	stone = new Stone(200,550,60,60)

	mango1 = new Mango(700,150,50,50);
	mango2 = new Mango(800,150,50,50);
	mango3 = new Mango(750,220,50,50);
	mango4 = new Mango(690,270,50,50);
	mango5 = new Mango(850,250,50,50);

	rope= new Rope(stone.body,{x:150,y:470})





	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");

	fill("brown");
	ground.display();
	tree.display();


	imageMode(CENTER);
	image(boyImage, 200,530,150,250)
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	rope.display();

	detectollision(stone,mango1);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);





}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}
function detectollision(lstone,lmango){
	    mangoBodyPosition=lmango.body.position
		 stoneBodyPosition=lstone.body.position
		  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
		if(distance<=lmango.r+lstone.r) {
			 Matter.Body.setStatic(lmango.body,false); 
		}
 }
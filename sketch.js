//var SPACE
//var Nave;


function preload(){
//SPACE = loadImage("Space789.png");
//Nave = loadImage("Nave456.png");
}

function setup() {
createCanvas(1700, 700);

space = createSprite(850, 350, 30, 30);
space.addAnimation("Space789.png");


nave = createSprite(500, 350);
nave.addAnimation("nave456.png");
nave.scale = 1;

}

function draw() {
background(51);
drawSprites();
}
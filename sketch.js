var canvas;
var music;
var surface1,surface2,surface3,surface4,surface5;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    background("lightgrey");
    canvas = createCanvas(1500,600);
    surface1 = createSprite(175,580,300,10);
    surface1.shapeColor = ("blue");
    surface2 = createSprite(485,580,300,10);
    surface2.shapeColor = ("orange");
    surface3 = createSprite(795,580,300,10);
    surface3.shapeColor = ("red");
    surface4 = createSprite(1105,580,300,10);
    surface4.shapeColor = ("green");
    surface5 = createSprite(1420,580,300,10);
    surface5.shapeColor = ("purple");
    box = createSprite(random(20),240,20,20);
    box.shapeColor = ("white");
    box.velocityX = -3;
    box.velocityY = -4;
    edges = createEdgeSprites();




   

}


function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    box.bounceOff(edges);
    
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "blue";
}
if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "orange";
}
if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "red";
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "green";
}
if(surface5.isTouching(box) && box.bounceOff(surface5)){
    box.shapeColor = "purple";
}
drawSprites();
}
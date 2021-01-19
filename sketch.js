var ball;
var database;
var position;
var gameState=0;
var playerCount;
var game,form,player;


function setup(){
    createCanvas(500,500);

  

    database=firebase.database()
    game=new Game();
    game.getState()
    game.start()

   
}

function draw(){
    background("white");
    
    
}


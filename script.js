var bird = [];
var pipes = [];
var block = [];
var gameState = 0;
var pipecounter;
var highscore = 0;
var timer = 0;

function preload() {
    birdimage = loadImage('img/bird.png');
    menuimage = loadImage('img/menu.png');
    backgroundimage = loadImage('img/background.png');
    pipeimage = loadImage('img/pipe.png');
    pipe2image = loadImage('img/pipe2.png');
}

function setup() {
    createCanvas(500, 400);
    frameRate(60);
}

function draw() {
    background("#007dad");
    image(backgroundimage, 0, 0, 500, 400);
    if (gameState == 0) {
        if (timer == 5) {
            timer = 0;
        }
        image(menuimage, 0, 0, 500, 400);
        stroke(0);
        strokeWeight(5);
        fill(255);
        textSize(30);
        text("highscore: " + highscore, 320, 200);
    } else if (gameState == 1) {
        bird = [];
        pipes = [];
        block = [];
        pipecounter = -1;
        birb = new Birb(100, 200);
        gameState = 2;
    } else if (gameState == 2) {

        if (frameCount % 80 == 0) {

            let gapHeight = 150;
            let topPipeHeight = random(height - gapHeight);

            pipes.push(new Pipe(550, topPipeHeight - 600, 75, 600, "blue"));
            pipes.push(new Pipe(550, topPipeHeight + gapHeight, 75, 600, "green"));
            pipecounter += 1;
            console.log(pipecounter);
            //console.log(pipes);
        }

        pipes.forEach((pipe) => {
            pipe.drawRect();
            pipe.isColliding(birb);

        });

        birb.draw();
        if (pipecounter > 0) {
            stroke(0);
            strokeWeight(5);
            fill(255);
            textSize(30);
            text(pipecounter, 500 / 2, 50);
        }
    }


}

function death() {
    if (pipecounter > highscore) {
        highscore = pipecounter;
    }
    gameState = 0;
}

function mouseClicked() {
    if (gameState == 0) {
        gameState = 1;
    }
    if (gameState == 2) {
        birb.velocity = -10;
    }
}

function keyPressed() {
    console.log(keyCode);
    if (keyCode == 13) {
        if (gameState == 0) {
            gameState = 1;
        }
    }
    if (keyCode === 32) {
        birb.velocity = -10;
    }
}

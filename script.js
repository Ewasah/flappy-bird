var bird = []
var pipes = []

function setup() {
    createCanvas(500, 400);

    birb = new Birb(100, 200);
}

function draw() {
    background("#007dad");
 
    if (frameCount % 50 == 0) {          
        
        let gapHeight = 150;        
        let topPipeHeight = random(height - gapHeight);

        pipes.push(new Pipe(550, 0, 75, topPipeHeight, "green"));
        pipes.push(new Pipe(550, topPipeHeight + gapHeight, 75, 400, "green"));
        //console.log(pipes);
    }
    
    pipes.forEach((pipe) => {
        pipe.drawRect();

    });

    birb.draw();
    
    
}

function keyPressed() {
  if (keyCode === 32) {
    birb.velocity = -10;
  }
}
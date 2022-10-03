class Birb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.gravity = 0.2;
    }

    drawBirb() {
        fill("red");
        circle(this.x, this.y, 10)
    }

    if(this.y + this.h >= height) {
    this.y = height - this.h;

    if (this.velocity < 0) {
        this.y += this.velocity;
    }
}

        else {
    this.velocity += this.acceleration;
    this.y += this.velocity;
}
var birb;

function setup() {
    createCanvas(500, 400);

    birb = new Birb(100, 200);

}


function draw() {
    background(225);



    birb.drawBirb();

}

function keyPressed() {
    if (keyCode == 32) {
        birb.vy -= 5;
    }
}
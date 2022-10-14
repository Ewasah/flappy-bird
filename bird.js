class Birb {
  constructor() {
    this.x = 640 / 3;
    this.y = 100;
    this.w = 50;
    this.h = 36;
    this.velocity = 0;
    this.acceleration = 0.6;
    this.gravity = 0.6;

  }

  draw() {
    if (this.y + this.h >= height) {
      this.y = height - this.h;

      if (this.velocity < 0) {
        this.y += this.velocity;
      }
    }
    
    if (this.y < 0) {
      console.log("top")
      gameState = 0;
    }

    if (this.y > 360) {
      console.log("bot")
      gameState = 0;
    }

    else {
      this.velocity += this.acceleration;
      this.y += this.velocity;
    }
    // without rotation
    image(birdimage, this.x, this.y, this.w, this.h);
    //rect(this.x, this.y, this.w, this.h);
  }
}


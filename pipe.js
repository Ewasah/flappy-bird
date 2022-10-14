class Pipe {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = -4;
    this.color = color;
      
    this.bottom = this.y + this.h;
  }

  drawRect() {
    fill(this.color);
    this.x = this.x + this.vx;
    if (this.color == 'blue'){
        //rect(this.x, this.y, this.w, this.h);
        image(pipe2image, this.x, this.y, this.w, this.h);
    } else{
        //rect(this.x, this.y, this.w, this.h);
        image(pipeimage, this.x, this.y, this.w, this.h);
    }
  }

  isColliding(birb) {   
    // check x axis-collision
    if (birb.x + birb.w > this.x && birb.x < this.x + this.w) {
      // check y-axis collision
      if (birb.y + birb.h > this.y && birb.y < this.y + this.h) {
        console.log('collision');
        death();
      }      
    }
    return false;
  }
}

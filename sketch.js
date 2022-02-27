let img, img2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  img = loadImage("https://raw.githubusercontent.com/vincentsijben/p5-cube-vertex/main/jobonten.jpg");
  img2 = loadImage("https://raw.githubusercontent.com/vincentsijben/p5-cube-vertex/main/jobonten2.jpg");
}

function draw() {
  background(200);
  
  rotateZ(frameCount );
  rotateX(frameCount * 2 );
  rotateY(frameCount );
  
  drawCube(400, 400, 400);

}

function drawCube(w, h, d) {
  
  noFill();
  // fill(255,0,0);
  strokeWeight(2);

  texture(img);
  textureMode(NORMAL);
  beginShape();
  //front
  vertex(0, 0, 0, 0, 0);
  vertex(0, -h, 0, 1, 0);
  vertex(w, -h, 0, 1, 1);
  vertex(w, 0, 0, 0, 1);
  // vertex(0, 0, 0);
  //left
  vertex(0, 0, 0, 0, 0);
  vertex(0, -h, 0, 1, 0);
  vertex(0, -h, -d, 1, 1);
  vertex(0, 0, -d, 0, 1);
  // vertex(0, 0, 0);
  //bottom
  vertex(0, 0, 0, 0, 0);
  vertex(0, 0, -d, 1, 0);
  vertex(w, 0, -d, 1, 1);
  vertex(w, 0, 0, 0, 1);
  // vertex(0, 0, 0);
  endShape();

  texture(img2);
  textureMode(NORMAL);
  beginShape();
  //back
  vertex(w, -h, -d, 0, 0);
  vertex(w, 0, -d, 1, 0);
  vertex(0, 0, -d, 1, 1);
  vertex(0, -h, -d, 0, 1);
  // vertex(w, -h, -d);
  //right
  vertex(w, -h, -d, 0, 0);
  vertex(w, 0, -d, 1, 0);
  vertex(w, 0, 0, 1, 1);
  vertex(w, -h, 0, 0, 1);
  // vertex(w, -h, -d);
  //top
  vertex(w, -h, -d, 0, 0);
  vertex(w, -h, 0, 1, 0);
  vertex(0, -h, 0, 1, 1);
  vertex(0, -h, -d, 0, 1);
  // vertex(w, -h, -d);
  endShape();
}

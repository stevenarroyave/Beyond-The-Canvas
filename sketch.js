function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent("myContainer");

//  var text = createDic('This is an HTML string!')
//  text.position(50, 50);

  canvas.class("myCanvas")
//  noLoop();
frameRate(5);
}

function draw() {


  for (let x = 0; x < 100; x++) {
    let size = random(5, 100);
      fill(random(255), random(255), random(255));
   ellipse(random(width), random(height), size, size);
   rect(random(width), random(height), size, size);
   triangle(random(width), random(height),random(200), random(200), random(200), random(200));
   
 }
}

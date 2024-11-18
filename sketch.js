var lan = [];
var img;
var swayOffset = [];
var stars;

function preload() {
  img = loadImage('lantern.png');
  stars = loadImage('stars.png');
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  for (var i = 0; i < 100; i++) {
    lan.push({
      x: random(width),
      y: random(height, height + 1000),
      size: random(30, 80), 
    });
    swayOffset.push(random(TWO_PI)); 
  }
}

function draw() {
  background(stars);

  for (var i = 0; i < lan.length; i++) {
    lan[i].y -= 1;

    var sway = sin(frameCount * 0.02 + swayOffset[i]) * 10;
    var x = lan[i].x + sway;

    image(img, x, lan[i].y, lan[i].size, lan[i].size * 1.3); 

    if (lan[i].y < -lan[i].size * 1.3) {
      lan[i].y = height + random(100, 1000); 
      lan[i].x = random(width); 
      lan[i].size = random(30, 80); 
    }
  }
}

var lan = [];
var img;
var swayOffset = [];
var stars;

function preload() {
  img = loadImage('lantern.png'); // Load the lantern image
  stars = loadImage('stars.png');
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  // Initialize positions, sway offsets, and sizes for 100 lanterns
  for (var i = 0; i < 100; i++) {
    lan.push({
      x: random(width), // Random x position
      y: random(height, height + 1000), // Start below the canvas
      size: random(30, 80), // Random size for foreground/background effect
    });
    swayOffset.push(random(TWO_PI)); // Randomize the phase of the sway
  }
}

function draw() {
  background(stars);

  for (var i = 0; i < lan.length; i++) {
    // Move lantern upward
    lan[i].y -= 1;

    // Add gentle swaying
    var sway = sin(frameCount * 0.02 + swayOffset[i]) * 10;
    var x = lan[i].x + sway;

    // Draw the lantern with its specific size
    image(img, x, lan[i].y, lan[i].size, lan[i].size * 1.3); // Adjust height-to-width ratio

    // Reset lantern if it moves off the top
    if (lan[i].y < -lan[i].size * 1.3) {
      lan[i].y = height + random(100, 1000); // Reset to below the canvas
      lan[i].x = random(width); // Reset x position
      lan[i].size = random(30, 80); // Randomize size again
    }
  }
}

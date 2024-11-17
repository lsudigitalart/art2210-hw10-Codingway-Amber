var lan = [];

function setup() {
 createCanvas(400, 200);
 noStroke();
 fill(237, 147, 63);
 for (var i = 0; i < 3000; i++) {
 lan[i] = random(-1000, 200);
 }
}
function draw() {
 background(0);
 for (var i = 0; i < lan.length; i++) {
 lan[i] += 0.5;
 var x = i * 4;
 rect(x, lan[i], 35, 45, 8);
 }
}

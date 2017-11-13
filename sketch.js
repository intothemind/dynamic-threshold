var muse = musedata.connect('http://192.168.1.20:8081');

var ypos = 0;
var dir = 0;

//variable storing dynamic threshold
var thresh = dynamicThreshold();

function setup() {
  createCanvas(windowWidth,windowHeight);

  //initialize position and direction
  ypos = height/2;
  dir = 0;

}

function draw() {
  background(255);
  
  var a = muse.getAlpha();
  var threshold = thresh.threshold(a);
  console.log(threshold);


  //update position
  ypos = ypos + dir;

  fill('steelblue');
  noStroke();
  ellipse(width/2,ypos,20,20);
}
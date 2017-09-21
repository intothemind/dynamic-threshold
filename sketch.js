var muse = musedata.fake();

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(255);
  
  var beta = muse.getBeta();
  var radius = map(beta,0,0.3,0,300);

  console.log(beta);
  fill('blue');
  ellipse(width/2,height/2,radius,radius);
}
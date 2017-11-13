var muse = musedata.connect('http://192.168.1.20:8081');

var ypos = 0;
var dir = 0;
var speed = 0.1;

//variable storing dynamic threshold
var thresh = dynamicThreshold();

function setup() {
    createCanvas(windowWidth, windowHeight);

    //initialize position and direction
    ypos = height / 2;
    dir = 0;

}

function draw() {
    background(255);

    var a = muse.getAlpha();
    var threshold = thresh.threshold(a);

    //if we do better than the threshold
    //move the circle upwards
    if (a > threshold) {
        dir = -speed;
    }
    //we do worse than the threshold
    //move the circle downwards
    else if (a < threshold) {
        dir = speed;
    } else {
        dir = 0;
    }

    //update pos
    ypos = ypos + dir;

    //draw the circle
    fill('steelblue');
    noStroke();
    ellipse(width / 2, ypos, 20, 20);


    //show some numbers
    noStroke();
    fill(0);
    textSize(24);
    text('Alpha: ' + nf(a * 100, 1, 1) + ' %', 100, 100);
    text('Threshold: ' + nf(threshold * 100, 1, 1) + ' %', 100, 140);

}
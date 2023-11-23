
//                 0   1   2   3   4
let circleSizes = [50, 75, 30, 45, 82];
let circleIndex = 0;
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(width/2, height/2, circleSizes[circleIndex]);
}


function mousePressed(){
// everytime mousePressed is initiated it causes the size to increase by one value [0] -> [1]

    circleIndex++
// if circle index is the same size as circle size
// .length indicates we are looking at the length of the array, not the entire array function
    if(circleIndex == circleSizes.length){
        circleIndex = 0;
    }
}
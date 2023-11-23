
//                 0   1   2   3   4
let word = ["Plymouth", "Is", "Awesome"];
let wordIndex = 0;
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);
    fill(255, 0, 255);
    text(word[wordIndex], mouseX, mouseY);
}


function mousePressed(){
// everytime mousePressed is initiated it causes the size to increase by one value [0] -> [1]

    wordIndex++
// if circle index is the same size as circle size
// .length indicates we are looking at the length of the array, not the entire array function
    if(wordIndex == word.length){
        wordIndex = 0;
    }
}
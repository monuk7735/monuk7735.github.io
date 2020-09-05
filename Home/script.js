var c = document.getElementById("background");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
matrix = "MONU";

matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = Math.random() * Math.random() * (-250);

let index = 0;

function getI(){

    index++;

    if (index >= matrix.length){
        index = 0;
    }

    return index;
}

//drawing the characters
function draw() {

    if (c.height != window.innerHeight || c.width != window.innerWidth) {
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        var columns = c.width / font_size;
        for (var x = 0; x < columns; x++)
            drops[x] = Math.random() * Math.random() * (-250);
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#fff";//green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        // var text = matrix[Math.floor(Math.random()*matrix.length)];
        var text = matrix[getI()];

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);


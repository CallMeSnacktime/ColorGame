var numSq = 9;
var colors = [];
var picked;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetB = document.querySelector('#reset');
var mode = document.querySelectorAll(".mode");

init();

function init(){
    // Sets up difficulty
    modeButtons();
    // Set up squares
    setSquares()
    // Resets the game
    reset();
}

function modeButtons(){
    for(var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function() {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            mode[2].classList.remove("selected");
            this.classList.add("selected");	
            if(this.textContent === "Easy"){
                numSq = 3;
             }else if(this.textContent === "Med"){
                 numSq = 6;
            } else{
                numSq = 9;
            }
            reset();
        });     
    }
}

function setSquares(){
    for(var i =0; i<squares.length; i++){
        // add click listeners to each square
        squares[i].addEventListener('click', function(){
            // get color of clicked on square
            var clicked = this.style.backgroundColor;
            // compare to correct square
            if(clicked === picked){
                messageDisplay.textContent = 'Correct!';
                resetB.textContent = "Play Again";
                changeColors(clicked);
                h1.style.backgroundColor = clicked;
            }else{
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    colors = generateColors(numSq);
    // picked a new color
    picked = pickColor();
    //change ColorDisplay to match picked color
    colorDisplay.textContent = picked;
    resetB.textContent = 'New Colors'
    messageDisplay.textContent = '';
    //change squares
    for(var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = 'steelblue';
}

resetB.addEventListener('click', function(){
    reset();
});


function changeColors(color){
    // loop through all squres
    for(var i=0; i < colors.length; i++){
        // changes squares to the correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // picks a random index in the colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    // make an array
    var arr = [];  
    // add num random colors
    for(var i = 0; i <num; i++){
        // get random color and push into the array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor(){
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a red from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a red from 0-255
    var b = Math.floor(Math.random() * 256);
    return 'rgb('+r+', '+g+', '+ b + ')';    
}
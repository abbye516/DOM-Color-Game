
let numSquares = 6
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square")
let pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove('selected')
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
        }
        else {
            squares[i].style.display = 'none'
        }
    }
    h1.style.backgroundColor = "#232323"


})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    // h1.style.backgroundColor = "#232323"
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    // alert(pickedColor)
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = 'block'
    }
    h1.style.backgroundColor = "#232323"

})

resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numSquares)
    pickColor = pickColor()
    colorDisplay.textContent = pickColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.backgroundColor = "#232323"
})

colorDisplay.textContent = pickedColor;


function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    // colorDisplay.textContent = random
    return colors[random]
}

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor
        if (clickedColor === pickedColor) {
            alert('you won')
            changeColor(clickedColor)
            messageDisplay.textContent = "Correct, you won!"
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "play again?"
        }
        else {
            alert(squares[i].style.backgroundColor)
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "guess again"
        }
    })

}

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function generateRandomColors(number) {
    let arr = []
    for (let i = 0; i < number; i++) {
        arr.push(randomColor())
    }
    return arr
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}



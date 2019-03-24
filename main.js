
let numSquares = 6
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1')
let resetButton = document.querySelector('#reset');
let pickedColor = colorChooser();
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove('selected')
    let numSquares = 3
    colors = generateRandomColors(numSquares)
     colorChooser()
    // alert(pickedColor)
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.background = colors[i]
        }
        else{
            squares[i].style.display = 'none'
        }
    }
    

})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    let numSquares = 6;
    colors = generateRandomColors(numSquares)
     colorChooser()
    // alert(pickedColor)
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i]
            squares[i].style.display = 'block'
            }

})


function colorChooser() {
    let random = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.textContent = random
    return random
}
colorChooser()

for (let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    //add clicked listeners
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor
        if (clickedColor === colorDisplay.textContent) {
            alert('you won')
            changeColor(clickedColor)
            messageDisplay.textContent = "Correct, you won!"
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "play again?"
        }
        else {
            alert('wrong')
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

    return `RGB(${r}, ${g}, ${b})`
}


resetButton.addEventListener('click', function () {
    colors = generateRandomColors(numSquares)
    colorChooser()
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.backgroundColor = "#232323"
})

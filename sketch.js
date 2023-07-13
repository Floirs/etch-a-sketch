const gameboard = document.querySelector(".container")

function makeGrid() {
    for (let i = 0; i < 400; i++) {
        let square = document.createElement("div")
        square.classList += "square";
        gameboard.appendChild(square)
    }
}
makeGrid()

const squareNodes = document.querySelectorAll(".square")
let clicked = false

squareNodes.forEach(node => {
    node.addEventListener("mousedown",(e) => {
        node.classList += " clicked"
        clicked = true
})})

squareNodes.forEach(node => {
    node.addEventListener("mouseup",(e) => {
        clicked = false
})})

squareNodes.forEach(node => {
    node.addEventListener("mousemove",(e) => {
        if (clicked) {
            node.classList += " clicked"
        }
    })
})

// squareNodes.forEach(node => {
//     node.addEventListener("contextmenu",(e) => {
        
//         node.classList.remove("clicked")
//     })
// })



let resetbtn = document.querySelector(".reset")

resetbtn.addEventListener("click", () => {
    squareNodes.forEach(node => {
        node.classList.remove("clicked")
    })
})
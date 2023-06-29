const penColor = document.querySelector("#pen-color")
const btnEraser = document.querySelector("#btn-eraser")
const btnRainbowMode = document.querySelector("#btn-rainbow")
const btnNormalMode = document.querySelector("#btn-normal")
const btnClearArea = document.querySelector("#btn-clear")
const btnShadowMode = document.querySelector("#btn-shadow")
const btnHighlightMode = document.querySelector("#btn-highlight")
const gridSize = document.querySelector("#slider")
const drawingArea = document.querySelector(".drawing-area")
const numOfRows = document.querySelector(".num-of-rows")



let currentColor = penColor.value
let currentMode = "normal"
let currentGrid = gridSize.value


// Color Change //
penColor.addEventListener("change", (e) => {
    currentColor = penColor.value
})

// Eraser Button //
btnEraser.addEventListener("click", () => {
    currentMode = "eraser"
    // btnEraser.classList.toggle("active")
})

// Normal Mode Button //
btnNormalMode.addEventListener("click", () => {
    currentMode = "normal"
})

// Highlight Mode Button //
btnHighlightMode.addEventListener("click", () => {
    currentMode = "highlight"
})
// Shadow Mode Button //
btnShadowMode.addEventListener("shadow", () => {
    currentMode = "shadow"
})

// Rainbow Mode Button //
btnRainbowMode.addEventListener("click", () => {
    currentMode = "rainbow"
})

// Clear Area Button //
const clearArea = () => {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        console.log(pixel)
        pixel.style.backgroundColor = 'white'
    })
}
btnClearArea.addEventListener("click", () => {
    clearArea()
})


const genGrid = (numofColumns) => {
    drawingArea.innerHTML = ""
    drawingArea.style.gridTemplateColumns = `repeat(${numofColumns}, 1fr)`
    let pixelCount = (numofColumns * numofColumns)
    
    for(let i = 0; i < pixelCount; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.style.backgroundColor = 'rgb(255, 255, 255, .9)'
        drawingArea.insertAdjacentElement("beforeend", pixel)
    }

    const pixels = drawingArea.querySelectorAll(".pixel")
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseover", (e) => {
            drawColor(currentMode, e)
        })
        
    })

}

const drawColor = (currentMode, e) => {
    console.log(e.target.style.backgroundColor)
    e.target.style.backgroundColor = 'blue';

}

// const drawColor = (currentMode, e) => {
//     if (currentMode === "normal"){
//         console.log(e.target.style.cssText)
//     return `background-color: ${currentColor}`
//     } else if (currentMode === "eraser"){
//         return `background-color: rgb(255, 255, 255, .9)`
//     } else if (currentMode === "rainbow") {
//         let red = Math.floor(Math.random()*256)
//         let green = Math.floor(Math.random()*256)
//         let blue = Math.floor(Math.random()*256)
//         let opacity = .5
//         return `background-color: rgb(${red}, ${green}, ${blue}, ${opacity})`
//     } else if (currentMode === "highlight"){
//         console.log(e.target.dataset.color)
//     }
// }








// Grid Size Slider // 
gridSize.addEventListener("change", (e) => {
    genGrid(e.target.value)
    numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`
})

// Grid Size Display //
numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`



genGrid(gridSize.value)






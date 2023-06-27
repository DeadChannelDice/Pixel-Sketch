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

// --Toolbox Area-- //
// Color Changing //

let pixelColor = penColor.value

// Normal Mode //
penColor.addEventListener("change", (e) => {
    pixelColor = penColor.value
})

// Eraser Button //
btnEraser.addEventListener("click", () => {
    pixelColor = "white"
})

// Normal Mode Button //
btnNormalMode.addEventListener("click", () => {
    pixelColor = penColor.value
})

// Highlight Mode Button //

// Shadow Mode Button //

// Rainbow Mode Button //


// Clear Area Button //
const clearArea = () => {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white'
    })
}
btnClearArea.addEventListener("click", e => {
    clearArea()
})

// Grid Size Slider // 
gridSize.addEventListener("change", e => {
    genGrid(e.target.value)
    numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`
    console.log(e.target.value)
})

// Grid Size Display //
numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`

// --Drawing Area-- //






// Grid Generation // 

const genGrid = (numofColumns) => {

    drawingArea.innerHTML = ""

    drawingArea.style.gridTemplateColumns = `repeat(${numofColumns}, 1fr)`

    let pixelCount = (numofColumns * numofColumns)

    for(let i = 0; i < pixelCount; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        // pixel.setAttribute("draggable", "false")
        drawingArea.appendChild(pixel)
    }

    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = `${pixelColor}`
            console.log("pixel pressed")
        })
    })

}



genGrid(gridSize.value)








// Hook up the buttons



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

numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`

const clearArea = () => {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white'
    })
}

btnClearArea.addEventListener("click", e => {
    clearArea()
})

// eraserBtn.addEventListener("click", e => {

// })

const genGrid = (numofColumns) => {

    drawingArea.innerHTML = ""

    drawingArea.style.gridTemplateColumns = `repeat(${numofColumns}, 1fr)`

    let pixelCount = (numofColumns * numofColumns)

    for(let i = 0; i < pixelCount; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.setAttribute("draggable", "false")
        drawingArea.appendChild(pixel)
    }

    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = `${penColor.value}`
            console.log("pixel pressed")
        })
    })

}



genGrid(gridSize.value)





// Link slider to grid resolution 
gridSize.addEventListener("change", e => {
    genGrid(e.target.value)
    numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`
    console.log(e.target.value)
})


// Hook up the buttons



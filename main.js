const penColor = document.querySelector("pen-color")
const eraserBtn = document.querySelector("#btn-eraser")
const rainbowMode = document.querySelector("#btn-rainbow")
const normalMode = document.querySelector("#btn-normal")
const clearArea = document.querySelector("#btn-clear")
const shadowMode = document.querySelector("#btn-shadow")
const highlightMode = document.querySelector("#btn-highlight")
const gridSize = document.querySelector("#slider")
const drawingArea = document.querySelector(".drawing-area")
const numOfRows = document.querySelector(".num-of-rows")

numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`

const genGrid = (numofColumns) => {

    drawingArea.innerHTML = ""

    drawingArea.style.gridTemplateColumns = `repeat(${numofColumns}, 1fr)`

    let pixelCount = (numofColumns * numofColumns)

    for(let i = 0; i < pixelCount; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        drawingArea.appendChild(pixel)
    }

    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", e => {
            e.target.style.backgroundColor = penColor.value
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


// Make pixels change colors when clicking and dragging



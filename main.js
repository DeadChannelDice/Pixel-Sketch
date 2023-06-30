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
const body = document.querySelector("body")



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
btnShadowMode.addEventListener("click", () => {
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
        pixel.style.backgroundColor = 'rgb(255, 255, 255)'
    })
}
btnClearArea.addEventListener("click", () => {
    clearArea()
})

body.addEventListener("mouseup", () => {
    doneDrawing()
})


const genGrid = (numofColumns) => {
    drawingArea.innerHTML = ""
    drawingArea.style.gridTemplateColumns = `repeat(${numofColumns}, 1fr)`
    let pixelCount = (numofColumns * numofColumns)
    
    for(let i = 0; i < pixelCount; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.setAttribute("draggable", "false")
        pixel.style.backgroundColor = 'rgb(255, 255, 255)'
        drawingArea.insertAdjacentElement("beforeend", pixel)
    }

    const pixels = drawingArea.querySelectorAll(".pixel")
    pixels.forEach(pixel => {
        pixel.addEventListener("mousedown", (e) => {
            startDrawing()
            drawColor(currentMode, e)
        })
        pixel.addEventListener("mouseover", (e) => {
            drawColor(currentMode, e)
        })
        pixel.addEventListener("mouseup", () => {
            doneDrawing()
        })
        
    })

}

let drawActive = false

const startDrawing = () => {
    return drawActive = true
}

const doneDrawing = () => {
    return drawActive = false
}


const drawColor = (currentMode, e) => {

    if(e.type == "mouseover" && !drawActive) {
        return
    }

    console.log(e)

    let currentPixelColor = e.target.style.backgroundColor

    const pixelValueReset = () => {
        let red = 0
        let green = 0
        let blue = 0
    }
   

switch (currentMode) {
    case "normal":
        // console.log(e.target.style.backgroundColor)
        return e.target.style.backgroundColor = `${currentColor}`
    break

    case "rainbow":
        red = Math.floor(Math.random()*256)
        green = Math.floor(Math.random()*256)
        blue = Math.floor(Math.random()*256)
        let rainbowPixel = `rgb(${red}, ${green}, ${blue})`
        return e.target.style.backgroundColor = rainbowPixel
    break

    case "eraser":
        return e.target.style.backgroundColor = `rgba(255, 255, 255, 1)`
    break

    case "highlight": 
        currentPixelColor = currentPixelColor.replace(/[^\d,]/g, '').split(',')
        pixelValueReset()
        red = parseInt(currentPixelColor[0])
        green = parseInt(currentPixelColor[1])
        blue = parseInt(currentPixelColor[2])
        let highlightPixel = `rgb(${red + 25}, ${green + 25}, ${blue + 25})`
        return e.target.style.backgroundColor = highlightPixel
    break

    case "shadow":
        currentPixelColor = currentPixelColor.replace(/[^\d,]/g, '').split(',')
        pixelValueReset()
        red = parseInt(currentPixelColor[0])
        green = parseInt(currentPixelColor[1])
        blue = parseInt(currentPixelColor[2])
        let shadowPixel = `rgb(${red - 25}, ${green - 25}, ${blue - 25})`
        return e.target.style.backgroundColor = shadowPixel
    break
}
    }
    

// Grid Size Slider // 
gridSize.addEventListener("change", (e) => {
    genGrid(e.target.value)
    numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`
})

// Grid Size Display //
numOfRows.textContent = `${gridSize.value} x ${gridSize.value}`



genGrid(gridSize.value)






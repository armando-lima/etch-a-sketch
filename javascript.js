const gridSizeSlider = document.querySelector(".slider");
let sliderLabel = document.querySelector(".sliderLabel");
const gridContainer = document.querySelector(".sketchContainer");

gridSizeSlider.addEventListener("input", () => {
    let gridSizeValue = gridSizeSlider.value;
    sliderLabel.innerText = gridSizeValue;
});

gridSizeSlider.addEventListener("mouseup", () => {
    drawGrid();
    let gridDraw = document.querySelectorAll(".sketchArea");
    colorGrid(gridDraw);
});

window.addEventListener("load", () => {
    drawGrid();
    let gridDraw = document.querySelectorAll(".sketchArea");
    colorGrid(gridDraw);
});

function drawGrid() {
    let gridSizeValue = gridSizeSlider.value;
    let gridWidth = gridContainer.offsetWidth / gridSizeValue + "px";
    let gridHeight = gridContainer.offsetHeight / gridSizeValue + "px";
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (i = 1; i <= gridSizeValue * gridSizeValue; i++) {
        let gridDraw = document.createElement("div");
        gridDraw.classList.add("sketchArea");
        gridDraw.style.width = gridWidth;
        gridDraw.style.height = gridHeight;
        gridContainer.appendChild(gridDraw);
    }
}

function colorGrid(grid) {
    grid.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.classList.add("hovered");
        });
    });
}
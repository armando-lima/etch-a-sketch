const gridSizeSlider = document.querySelector(".slider");
let sliderLabel = document.querySelector(".sliderLabel");
const gridContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector(".resetButton");
const shadeButton = document.querySelector(".shadeButton");

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

resetButton.addEventListener("click", () => {
    let gridDraw = document.querySelectorAll(".sketchArea");
    resetGrid(gridDraw);
});

shadeButton.addEventListener("click", () => {
    let gridDraw = document.querySelectorAll(".sketchArea");
    shadeGrid(gridDraw);
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

function colorGrid(grids) {
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => { 
            grid.classList.add("hovered");
        });
    });
}

function resetGrid(grids) {
    grids.forEach(grid => {
        grid.classList.remove("hovered");
        grid.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        grid.removeAttribute("data-opacity");
    });
}

function shadeGrid(grids) {
    grids.forEach(grid => {
        grid.addEventListener("click", () => {
            let opacity = parseFloat(grid.getAttribute("data-opacity")) || 0;
            if (opacity < 1) {
                opacity += 0.1;
                grid.setAttribute("data-opacity", opacity);
                grid.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
        });
    });
}
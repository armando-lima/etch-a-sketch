const gridSizeSlider = document.querySelector(".slider");
let sliderLabel = document.querySelector(".sliderLabel");
const gridContainer = document.querySelector(".sketchContainer");

gridSizeSlider.addEventListener("input", () => {
    let gridSizeValue = gridSizeSlider.value;
    sliderLabel.innerText = gridSizeValue;
});

gridSizeSlider.addEventListener("mouseup", () => {
    let gridSizeValue = gridSizeSlider.value;
    let gridWidth = gridContainer.offsetWidth / gridSizeValue;
    let gridHeight = gridContainer.offsetHeight / gridSizeValue;
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    for (i = 1; i <= gridSizeValue * gridSizeValue; i++) {
        let gridDraw = document.createElement("div");
        gridDraw.classList.add("sketchArea");
        gridDraw.innerText = i;
        gridDraw.style.width = gridWidth + "px";
        gridDraw.style.height = gridHeight + "px";
        gridContainer.appendChild(gridDraw);
    }
});
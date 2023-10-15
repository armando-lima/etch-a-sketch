const gridSizeSlider = document.querySelector("input");
let sliderLabel = document.querySelector(".sliderLabel");
gridSizeSlider.addEventListener("input", () => {
    sliderLabel.innerText = gridSizeSlider.value;
})

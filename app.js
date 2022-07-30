"use strict";
// Global Variables
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");
const grid = document.getElementById("gridContainer");
const clear = document.getElementById("clearBtn");
//Functions
function setSliderText() {
	let sliderValue = document.getElementById("slider").value;
	sliderText.textContent = `${sliderValue}x${sliderValue}`;
}

function createGrid() {
	let sliderValue = document.getElementById("slider").value;
	const gridNumber = sliderValue * sliderValue;
	for (let i = 0; i < gridNumber; i++) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		grid.appendChild(gridItem);
	}
	grid.style.cssText = `
	grid-template-columns: repeat(${sliderValue}, 1fr);
	grid-template-rows: repeat(${sliderValue}, 1fr);`;
}

function deleteGrid() {
	while (grid.lastChild) {
		grid.removeChild(grid.lastChild);
	}
}
//UI Functionality
setSliderText();
slider.addEventListener("input", setSliderText);
slider.addEventListener("input", deleteGrid);
slider.addEventListener("input", createGrid);

"use strict";
// Global Variables
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");

//Functions
function setSliderText() {
	let sliderValue = document.getElementById("slider").value;
	sliderText.textContent = `${sliderValue}x${sliderValue}`;
}

//UI Functionality
setSliderText();
slider.addEventListener("input", setSliderText);

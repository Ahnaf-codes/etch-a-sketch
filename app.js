const slider = document.getElementById("slider");

const sliderText = document.getElementById("sliderText");

function setSliderText() {
	let sliderValue = document.getElementById("slider").value;
	sliderText.textContent = `${sliderValue}x${sliderValue}`;
}
setSliderText();
slider.addEventListener("input", setSliderText);

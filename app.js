const sliderValue = document.getElementById("slider").value;
const sliderText = document.getElementById("sliderText");

function setSliderText() {
	sliderText.textContent = `${sliderValue}x${sliderValue}`;
}

setSliderText();

var tiltSlider = document.getElementById("tiltSlider");
var output = document.getElementById("sliderValue");
// output = tiltSlider.value;
tiltSlider.oninput = function() {
  document.getElementById("sliderValueTilt").innerHTML = this.value;
  document.getElementById("crosshair").style.transform = "translate("+horizontalSlider.value+"%,0) rotate("+tiltSlider.value+"deg)";
}

var horizontalSlider = document.getElementById("horizontalSlider");
var output = document.getElementById("sliderValue");
output = horizontalSlider;
horizontalSlider.oninput = function() {
  document.getElementById("sliderValueHorizontal").innerHTML = this.value;
  horizontalSlider.innerHTML = this.value;
  document.getElementById("crosshair").style.transform = "translate("+this.value+"%, 0px) rotate("+tiltSlider.value+"deg)";
}


document.addEventListener("keydown", (event) => {
	if (event.key == "a") {
		horizontalSlider.value = parseInt(horizontalSlider.value) - 100;
		document.getElementById("crosshair").style.transform = "translate("+horizontalSlider.value+"%,0) rotate("+tiltSlider.value+"deg)";
		document.getElementById("sliderValueHorizontal").innerHTML = horizontalSlider.value;
	}
	if (event.key == "d") {
		horizontalSlider.value = parseInt(horizontalSlider.value) + 100;
		document.getElementById("crosshair").style.transform = "translate("+horizontalSlider.value+"%,0) rotate("+tiltSlider.value+"deg)";
		document.getElementById("sliderValueHorizontal").innerHTML = horizontalSlider.value;
	}

	if (event.key == "q") {
		tiltSlider.value = parseInt(tiltSlider.value) - 1;
		document.getElementById("crosshair").style.transform = "translate("+horizontalSlider.value+"%,0) rotate("+tiltSlider.value+"deg)";
		document.getElementById("sliderValueTilt").innerHTML = tiltSlider.value;
	}
	if (event.key == "e") {
		tiltSlider.value = parseInt(tiltSlider.value) + 1;
		document.getElementById("crosshair").style.transform = "translate("+horizontalSlider.value+"%,0) rotate("+tiltSlider.value+"deg)";
		document.getElementById("sliderValueTilt").innerHTML = tiltSlider.value;
	}
});

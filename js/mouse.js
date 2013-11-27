window.addEventListener("mousemove", mouseactive, true);
function mouseactive(event) {
	mx = (event.clientX) - (document.getElementById("mycanvas").offsetLeft),
	my = (event.clientY) - (document.getElementById("mycanvas").offsetTop);
}
if (test) {
	console.log("mouse.js");
}

setInterval(function ()
{
	document.getElementById("output").innerHTML = "Framebuffer: "+(Math.round(fps + framebuffer))+"<br/>Meteorer: "+meteorarray.length;
}, 1000);
if (test) {
	console.log("output.js");
}

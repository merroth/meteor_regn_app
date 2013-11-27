var c = document.getElementById('mycanvas').getContext('2d'), canvas = document.getElementById("mycanvas"), meteorarray = [], t = 1, mx = 0, my = 0, level = 0, time = new Date, timearray = new Array(), temp = null, framex = document.getElementById('mycanvas').clientWidth, framey = document.getElementById('mycanvas').clientHeight, framebuffer = 16, pause = false, player, fadeDelay = 0, firstPause = true, angle = (45 % 360), lingrad = c.createLinearGradient(0, 0, 0, framey),gametime = new Date(), pauseTimer = new Date(),s=0,m=0,h=0,str="";
if(device == 'computer'){fps = 1000/60;}else{fps = 1000/20;}
if (test) {
	console.log("variables.js");
}

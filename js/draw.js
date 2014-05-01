setInterval(draw, fps);
setInterval(clearFrame, fps*2);
setInterval(function () {
	if ((fps + framebuffer) > 10) {
		if (!pause && player) {
			level += 1;
		}
	}
}, 5000);
			lingrad.addColorStop(0, "#636651");
			lingrad.addColorStop(((Math.random() * 1 + 5) * 0.1), "red");
			lingrad.addColorStop(1, "yellow");

function clearFrame()
{
	if (player || meteorarray.length >= 1)
	{
		if(!pause)
		{
			c.fillStyle = "rgba(34, 141, 219,0.3)";
			c.fillRect(0, 0, framex, framey);
		}
		ui();
	}else {
		canvas.style.cursor = "default";
	}
	
}
function draw()
{
	if (!pause)
	{
		temp = new Date();
		for (var i = 0; i < meteorarray.length; i++) {
			asteroid = meteorarray[i];
			if(asteroid.lingrad == null)
			{
				//alert("yellow");
				c.fillStyle = "#FFFA00";
			}else
			{
				for(var lin in asteroid.lingrad)
				{
					lingradtemp = asteroid.lingrad[lin];
					lingrad.addColorStop(lingradtemp[0], lingradtemp[1]);
				}
				c.fillStyle = lingrad;
			}
			asteroid.rotate();
			//c.fillRect(asteroid.x - asteroid.size * 0.5, asteroid.y - asteroid.size * 0.5, asteroid.size, asteroid.size);
			c.beginPath();c.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI*2, true);c.fill();c.closePath();
			c.restore();
		}
		if (player) {
			c.fillStyle = player.color;
			c.fillRect(player.x, player.y, player.size, player.size);
		} else {
			c.fillStyle = "red";
			c.font = "bold 80px Arial";
			c.fillText("GAME OVER", framex/2 - 250, framey * 0.5);
			c.font = "bold 30px Arial";
			c.fillText("DIN TID VAR: " +str+ " OG DU NÅEDE LEVEL: " + (level + 1), framex/2 - 350, framey * 0.5 + 50);
		}
		lingrad = c.createLinearGradient(0, 0, 0, framey);
		framebuffer = temp - new Date();
	}
}
if (test) {
	console.log("draw.js");
}

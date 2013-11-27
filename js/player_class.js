var main_char = function () {};
main_char.prototype = {
	x : 400,
	y : framey - 20,
	age : 0,
	size : 20,
	color : "cyan",
	startup : true,
	startupfunc : function () {
		if (this.startup) {
			var colors = ["green", "cyan"],
			number = Math.round(Math.random() * (colors.length - 1));
			this.color = colors[number];
			this.startup = false;
		}
	},
	move : function (mx) {
		if (mx < 0) {
			mx = 0;
		}
		if (mx > framex - this.size) {
			mx = framex - this.size;
		}
		this.x = mx;
	},
	collide : function (collidearray) {
		for (var i = 0; i < meteorarray.length; i++) {
			asteroid = meteorarray[i];
			if (asteroid.y+asteroid.size > framey - this.size && player)
			{
				if (Math.round(asteroid.x+asteroid.size) > Math.round(this.x) && Math.round(asteroid.x) < Math.round(this.x+(2*this.size)))
				{
					player = null;
				}
			}
		}
	}
}
if (test) {
	console.log("player_class.js");
}

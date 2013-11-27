var meteor = function ()
{
	var content = 
	{
		y : -30,
		age : 0,
		size : 40,
		angle : angle = (45 % 360),
		color : "cyan",
		startup : true,
		startupfunc : function () {
			if (this.startup) {
				var colors = ["#ff83cd", "#b95fde", "#de001f", "#ec008c"],
				number = Math.round(Math.random() * (colors.length - 1));
				this.color = colors[number];
				this.startup = false;
			}
		},
		boundaries : function ()
		{
			if (asteroid.x < asteroid.size && asteroid.xSpeed < 0 || asteroid.x > framex - asteroid.size && asteroid.xSpeed > 0) {
				asteroid.xSpeed *= (0 - 1);
				asteroid.xSpeed *= 0.8;
			}
			if (asteroid.y > framey - asteroid.size) {
				asteroid.ySpeed *= (0 - 1);
				asteroid.ySpeed *= 0.8;
			}
		},
		friction : function () {
			asteroid.xSpeed *= 0.97;
			asteroid.x += asteroid.xSpeed;
			asteroid.y += asteroid.ySpeed;
		},
		rotate : function () {
			if (this.clockwise) {
				this.angle = ((this.angle + 10) % 360);
			} else {
				this.angle = ((this.angle - 10) % 360);
			}
			c.save();
			c.translate(this.x, this.y);
			c.rotate((this.angle * Math.PI / 180));
			c.translate(0 - (this.x), 0 - (this.y));
		},
		gravity : function () {
			asteroid.ySpeed += 0.6;
			asteroid.ySpeed *= 0.94;
			asteroid.xSpeed *= 0.994;
		},
		decay : function (i) {
			this.size *= 0.994;
			if (this.size < 13) {
				meteorarray.splice(i, 1);
			}
		}
	}
	content.xSpeed = Math.round(Math.random() * 2 - 1),
	content.ySpeed = Math.round(Math.random() * 5),
	content.x = Math.round((framex) * Math.random()),
	content.clockwise = Math.round(Math.random());
	
	return content;
};
if (test) {
	console.log("meteor_class.js");
}

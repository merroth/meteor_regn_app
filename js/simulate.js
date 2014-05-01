setInterval(simulate, 16);
function simulate()
{
	if(!pause)
	{
		if (player)
		{
			if((fps + framebuffer) >= (fps*0.5)){instantiateMeteor();}
		}
		for (var i = 0; i < meteorarray.length; i++) {
			asteroid = meteorarray[i];
			asteroid.startupfunc();
			asteroid.xSpeed += (Math.random() * 2 - 1) * 0.33;
			asteroid.age++;
			asteroid.boundaries(i);
			asteroid.friction();
			asteroid.decay(i);
			asteroid.gravity();
		}
		if (player) {
			player.startupfunc();
			player.move(mx);
			player.collide(meteorarray);
		}
	}
}
if (test) {
	console.log("simulate.js");
}

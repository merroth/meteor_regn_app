var super_meteor = function()
{
	var content = meteor();															//Henter data fra parent class
	content.type = "super_meteor";													//Ny type beskrivelse
	content.size = 100;																//Herfra modificeres eller tilføjes værdier
	content.y -= 70;
	content.ySpeed += 5;
	content.decay = function (i)
	{
		content.size *= 0.99;
		if (this.size < 13)
		{
			meteorarray.splice(i, 1);
		}
	}
	content.gravity = function ()
	{
		content.ySpeed += 0.3;
		content.ySpeed *= 0.98;
	},
	content.explosion = function ()
	{
		asteroid.size*=0.8;
		for(var expl = 0; expl < 50; expl++)
		{
			meteorarray.push(new shrapnel_meteor(asteroid.x,asteroid.y,asteroid.size));
		}
	},
	content.boundaries = function (i)
	{
		if (asteroid.x < asteroid.size && asteroid.xSpeed < 0 || asteroid.x > framex - asteroid.size && asteroid.xSpeed > 0) {
			asteroid.xSpeed *= (0 - 1);
			asteroid.xSpeed *= 0.8;
			asteroid.explosion();
		}
		if (asteroid.y > framey - asteroid.size) {
			asteroid.ySpeed *= (0 - 1);
			asteroid.ySpeed *= 0.8;
			asteroid.explosion();
		}
	}
	
	return (content);																//Resultat returneres så det kan instantieres eller videredefineres
}

if (test)
{
	console.log("super_meteor_class.js");
}

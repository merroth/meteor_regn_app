var cold_meteor = function()
{
	var content = meteor();															//Henter data fra parent class
	content.type = "cold_meteor";													//Ny type beskrivelse
	content.size = 5;																//Herfra modificeres eller tilføjes værdier
	content.decay = function (i)
	{}
	content.gravity = function ()
	{
		content.ySpeed += 0.3;
		content.ySpeed *= 0.98;
	}
	content.boundaries = function (i)
	{
		if (asteroid.x < asteroid.size && asteroid.xSpeed < 0 || asteroid.x > framex - asteroid.size && asteroid.xSpeed > 0)
		{
			meteorarray.splice(i, 1);
		}
		if (asteroid.y > framey - asteroid.size)
		{
			meteorarray.splice(i, 1);
		}
	}	
	return (content);																//Resultat returneres så det kan instantieres eller videredefineres
}

if (test) {
	console.log("cold_meteor_class.js");
}

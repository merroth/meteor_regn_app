var shrapnel_meteor = function(xPos,yPos,size)
{
	var content = cold_meteor();													//Henter data fra parent class
	content.type = "shrapnel_meteor";												//Ny type beskrivelse
	content.size = 2;
	content.y = yPos+(size)-10;
	content.x = xPos;
	content.xSpeed = Math.round(Math.random()*10-5);
	content.ySpeed = Math.round(Math.random()*-3);
	content.lingrad = null;
	return (content);																//Resultat returneres så det kan instantieres eller videredefineres
}

if (test)
{
	console.log("shrapnel_meteor_class.js");
}

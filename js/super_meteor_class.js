var super_meteor = function()
{
	var content = meteor();															//Connect to instance Class
	content.size = 100;
	content.y -= 70;
	content.ySpeed += 5;
	content.decay = function (i)
	{
		content.size *= 0.99;
		if (this.size < 13) {
		meteorarray.splice(i, 1);
	}
	content.gravity = function ()
	{
		content.ySpeed += 0.3;
		content.ySpeed *= 0.98;
	}
}
	
	return (content);
}

if (test) {
	console.log("super_meteor_class.js");
}

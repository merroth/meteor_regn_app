function instantiateMeteor() {
	if (level > 116) {
		t = Math.round(level / 116) + 1;
	} else {
		t = 1;
	}
	if (t != "" && meteorarray.length >= -1 && meteorarray.length <= level) {
		for (i = 0; i < t; i++)
		{
			if(Math.round(Math.random() * 9) < 9)
			{
				meteorarray.push(new meteor);
			}else
			{
				meteorarray.push(new super_meteor);
			}
		}
	}
}
player = new main_char();
player.startupfunc();
if (test) {
	console.log("instantiation.js");
}

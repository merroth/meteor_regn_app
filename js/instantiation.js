function instantiateMeteor() {
	if (level > 116) {
		t = Math.round(level / 116) + 1;
	} else {
		t = 1;
	}
	if (t != "" && meteorarray.length >= -1 && meteorarray.length <= level) {
		for (i = 0; i < t; i++)
		{
			var switchstatement = Math.round(Math.random() * 25)






			switch(true)
			{
				case (switchstatement <= 15): meteorarray.push(new cold_meteor);break;
				case (switchstatement >= 15 && switchstatement <= 18): meteorarray.push(new super_meteor);break;

				default: meteorarray.push(new meteor);break;
			}
		}
	}
}
player = new main_char();
player.startupfunc();
if (test) {
	console.log("instantiation.js");
}

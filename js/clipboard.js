function copyToClipboard(text)
{
	if (player) {
		if (pause) {
			pauseTimer = new Date();
			pause = false;
			canvas.style.cursor = "none";
		} else {
			if(device == 'computer' && (new Date() - pauseTimer) > 2000)
			{
				pause = true;
			}
		}
		if (pause) {
			text = canvas.toDataURL("image/png");
			document.getElementById("link").innerHTML = "<a href=\"" + text + "\" target=\"_blank\">Dit frame!</a>";
			if(firstPause)
			{
				alert("Pause\n\nLinket nederst højre indeholder det frame du lige gemte.\n\nKlik på spillet for at starte det igen.");
				firstPause = false;
			}
			canvas.style.cursor = "default";
		}
	} else {
		level = 0;
		s=0,m=0,h=0;
		player = new main_char();
		meteorarray = [];
		player.startupfunc();
		alert("Spillet nulstiller.");
		copyToClipboard(c);
		setSize();
	}
}
if (test) {
	console.log("clipboard.js");
}

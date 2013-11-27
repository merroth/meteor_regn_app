function ui() {
	if (player || meteorarray.length > 0) {
		c.fillStyle = "red";
		c.font = "bold 30px Arial";
		c.fillText("LEVEL: " + (level + 1), 3, 33);
		
		if(h<=9){str="0"+h}else{str=h}
		str+=":";
		if(m<=9){str+="0"+m}else{str+=m}
		str+=":";
		if(s<=9){str+="0"+s}else{str+=s}
		
		c.fillText(str, framex-126, 33);
	}
}
if (test) {
	console.log("UI.js");
}

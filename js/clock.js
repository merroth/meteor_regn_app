setTimeout(function()
{
	setInterval(tick, 291);
},500);
function tick()
{
	if(!pause && player)
	{
		if((new Date() - gametime) > 999)
		{
			s++;
			if(s>=60)
			{s-=60; m++;}
			if(m>=60)
			{m-=60; h++;}
			gametime=new Date;
		}
	}
}
if (test) {
	console.log("clock.js");
}

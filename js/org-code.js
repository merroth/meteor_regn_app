var c = document.getElementById('mycanvas').getContext('2d'),	//Indlæser canvas
blobarray = [],													//Opstiller array
t = document.getElementById('target').value,					//Indlæser count målet i t variablen ("target")
mx = 0,my = 0, level = 0,
time = new Date, timearray = new Array(),
temp = null, framex = document.getElementById('mycanvas').clientWidth, framey = document.getElementById('mycanvas').clientHeight;
/* --------------------------------------------------------------------- */
			var box = function(x)								//Opstiller ny blob objekt
			{
				this.xSpeed = Math.round(Math.random()*2-1),
				this.ySpeed = Math.round(Math.random()*5);
				this.x = Math.round((framex)*Math.random());

			};
			
			box.prototype =
			{
				y : -50,
				age : 0,
				size : 30,
				color : "cyan",
				startup : true, //color startup
				
				startupfunc : function()
				{
					if(this.startup)	//tjekker color startup variablen
					{
						// --- Setup colors --- //
						var colors = ["#ff83cd","#b95fde","#de001f","#ec008c"],
						number = Math.round(Math.random()*(colors.length - 1));
						this.color = colors[number];
						// --- Setup colors --- //
						// --- Indstiller x-position --- //
						//if(mx<=framex-1 && mx>=20){this.x = parseFloat(mx-(this.size*0.5));}
						//if(my<=framey-1 && my>=20){this.y = parseFloat(my-(this.size*0.5));}
						// --- Indstiller x-position --- //
						
						this.startup = false;
					}
				},
				
				
				boundaries : function()
				{
					if(blob.x < blob.size && blob.xSpeed < 0 || blob.x > framex - blob.size && blob.xSpeed > 0)
					{
						blob.xSpeed *= (0 - 1);
						blob.xSpeed *= 0.8;
					}
					if(blob.y < blob.size && blob.ySpeed < 1)
					{
						blob.ySpeed *= (0 - 1);
						blob.ySpeed *= 0.8;
					}
					if(blob.y > framey - blob.size)
					{
						blob.ySpeed *= (0 - 1);
						blob.ySpeed *= 0.8;
					}
				},
				friction : function()
				{
					blob.xSpeed *= 0.97;
					blob.x += blob.xSpeed;
					blob.y += blob.ySpeed;
				},
				gravity : function()
				{
					blob.ySpeed += 0.6;
					blob.ySpeed *= 0.94;
					blob.xSpeed *= 0.994;
				},
				decay : function(i)
				{
					this.size*=0.994;
					if(this.size<15)
					{
						blobarray.splice(i,1);
					}
				}
			}
/* --------------------------------------------------------------------- */
	setInterval(draw, 16);			//Indstiller opdateringsfrekvens for canvas
	setInterval(function(){level+=1}, 1000);
	function instantiateBlob()
	{
		t = document.getElementById('target').value;	//opdaterer t
		
		if(t != "" && blobarray.length >= -1 && blobarray.length <= level)
		{
			for(i = 0; i<t; i++)
			{
				blobarray.push(new box);
			}
		}
	}
	function draw()
	{
		temp = new Date();
		drawImage();
		instantiateBlob();
		
		//c.clearRect(0,0,framex,framey);
		//c.fillStyle = 'rgba(242, 242, 242,0.25)';
		//c.fillRect(0,0,framex,framey);		
		
		for(var i = 0; i<blobarray.length; i++)
		{
			blob = blobarray[i];
			blob.startupfunc();
			
			blob.xSpeed += (Math.random()*2-1)*0.33;
			
			c.fillStyle = blob.color;
			
			var lingrad = c.createLinearGradient(0,0,0,framey);

			lingrad.addColorStop(0., "#3186DB");	//sort
			lingrad.addColorStop(((Math.random()*1+5)*0.1), "red");	//rød
			lingrad.addColorStop(1, "yellow");		//gul
			
			c.fillStyle = lingrad;
			
			//c.beginPath();c.arc(blob.x, blob.y, blob.size, 0, Math.PI*2, true);c.fill();c.closePath();
			
			c.fillRect(blob.x,blob.y,blob.size,blob.size+(blob.ySpeed));
			
			blob.age++;
			blob.boundaries();
			blob.friction();
			blob.decay(i);
			blob.gravity();
		}

		temp = (temp - new Date());
		document.getElementById("count").innerHTML = "Der er: " + blobarray.length + " elementer på skærmen.<br/> Millisecond buffer: "+(16+temp)+"<br/>Milliseconds used per calculation: "+(temp*-1)+" level: "+level;

	}
window.addEventListener ("mousemove", mouseactive, true);
function mouseactive(event)
{
	mx = (event.clientX) - (document.getElementById("mycanvas").offsetLeft),
	my = (event.clientY)  - (document.getElementById("mycanvas").offsetTop);
}

function drawImage()
{
	c.save();
	c.globalAlpha = 0.1;
	var img = new Image();
	img.src = "img/bg.jpg";
	c.drawImage(img, 0, 0);
	c.globalAlpha = 1;
	c.restore();
	//c.fillStyle = 'rgba(255, 255, 255, 0.1)';
	//c.fillRect(0,0,framex,framey);
}
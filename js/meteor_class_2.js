var id = 0;
//-----------------------------------Defining-world-Class------------------------------------
//                             This where world attributes are stored.
function world()																			//Defining the word class
{
	this.dificulty;
	this.selected = null;
	this.gravity=0.98;
	this.time = 0;
	this.tick=function()
	{
		this.time++;
	}
}
world();
setInterval(function()
{
	this.enviroment.tick();
},1000);
//-----------------------------------Defining-world-Class------------------------------------
//-------------------------------------------------------------------------------------------

//-----------------------------------Defining-base-Class-------------------------------------
//                           This is the class that all is based upon
function instance(input)																//Defining the base class
{
	
	var content =
	{
		id : id,
		name : "Boxxy",
		suffix : "unranked",
		info : null
			
	};
	
	if(input.name != null && input.name != "undefined" && input.name != "")
	{
		content.name = input.name;
	}
	if(input.suffix != null && input.suffix != "undefined" && input.suffix != "")
	{
		content.suffix = input.suffix;
	}

	id++;
	return (content);
}

//-----------------------------------Defining-base-Class-------------------------------------
//-------------------------------------------------------------------------------------------
//----------------------------------Defining-person-Class------------------------------------
//                                   This is a sub class           
function person(input)																		//Defining the base class
{
	var content = instance(input);															//Connect to instance Class
	content.info = "This is a person";
	
	return (content);
}

//----------------------------------Defining-person-Class------------------------------------
//-------------------------------------------------------------------------------------------
//----------------------------------Defining-object-Class------------------------------------
//                                   This is a sub class           
function hero(input)																		//Defining the base class
{
	var content = person(input);															//Connect to person Class
	content.info = "This is a hero";
	if(input.alias != null && input.alias != "undefined" && input.alias != "")
	{
		content.alias=input.alias;
	}else
	{
		content.alias="no alias";
	}
	
	return (content);
}

//----------------------------------Defining-object-Class------------------------------------
//-------------------------------------------------------------------------------------------
// Base object constructor function
function base(spec) {
    var that = {}; // Create an empty object
    that.name = spec.name; // Add it a "name" property
    that.age = 9; // Add it a "name" property
    return that; // Return the object
}

// Construct a child object, inheriting from "base"
function child(spec) {
    var that = base(spec); // Create the object through the "base" constructor
    that.time = 10; // Add it a "name" property
    that.sayHello = function() { // Augment that object
        return 'Hello, I\'m ' + that.name;
    };
    return that; // Return it
}

// Usage
var object = child({ name: 'a functional object' });
console.log( object );
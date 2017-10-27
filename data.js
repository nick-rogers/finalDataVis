$(document).ready(function(){


var neighborhoods = [{

		name: ["Harbor", "Southeast", "77th Street", "Pacific", "Newton", "Southwest", "Hollenbeck", "Central", "Northeast", "Rampart", "Olympic", "Wilshire", "Hollywood", "West Los Angeles", "North Hollywood", "Van Nuys", "West Valley", "Topanga", "Foothill", "Mission", "Devonshire"],
		numVehicles: [7580,8204,9951,6379,8735,7156,7500,2552,7077,4777, 5042, 3738, 3916, 3044, 5845, 4771, 4282, 3708, 6257, 7547, 4682],
		numRobberies: [1980, 6281, 7934, 1959, 5430, 5674, 2159, 3731, 2149, 4341, 4093, 2341, 3170, 1123, 1861, 1614, 1543, 1510, 1543, 2405, 1335],
		numBattery: [5329, 9173, 12327, 6355, 7508, 11296, 6171, 10529, 5698, 7282, 8621, 5355, 8075, 5099, 6534, 5793, 4572, 5227, 4284, 7202, 4954],
		numAssault: [2839, 5910, 9034, 2171, 5271, 5580, 3431, 3909, 2742, 3822, 2746, 1833, 2771, 971, 2481, 1936, 1834, 1876, 2529, 3223, 1555],
		numHomicide: [129, 308, 348, 41, 183, 172, 130, 74, 75, 117, 64, 48, 56, 20, 62, 48, 37, 33, 96, 107, 32],
		totalCrime: [122743, 64176, 147384, 68464, 2180]

}];


$('#rep').click(function(){
	var randNum = Math.round(Math.random()*21);
	/*$(this).text( htmlString );
	$('.number').text( randNum );*/
	var theName = 0;
	var name = neighborhoods[0].numBattery[theName];
});


var ogColor;

$('.circle').mouseenter(function(){
	var pID = $(this).parent().attr('id');
	pID = "#"+pID;
	var classOne = $(this).attr('class');
	var one = classOne.charAt(0);
	var two = classOne.charAt(1);
	var three = classOne.charAt(2);

	var backgroundIMG = "url("+"img"+two+three+".svg"+")";
	var circleClass = "."+one+two+three;
	var siblings = $(pID).children(circleClass);
	ogColor = $(this).css('background-color');

	$(siblings).css('background-color', 'white');
	$(siblings).css('border-width', '0.5px');
	$(siblings).css('border-style', 'solid');

	var x = two+three;

	if(x.charAt(0) === "0"){
		x = x.charAt(1);
	}

	x = x-1;

	var idIndex = pID.charAt(2);

	if(idIndex === "1"){

	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numVehicles[x];
	var crimeType = "Cases of Stolen Vehicles";
	}	

	else if(idIndex === "2"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numRobberies[x];
	var crimeType = "Cases of Robbery";
	}


	else if(idIndex === "3"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numBattery[x];
	var crimeType = "Cases of Battery";
	}


	else if(idIndex === "4"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numAssault[x];
	var crimeType = "Cases of Aggravated Assault";
	}

	else {
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numHomicide[x];
	var crimeType = "Cases of Criminal Homicide";
	}

	var vehicles = neighborhoods[0].numVehicles[x];
	var robberies = neighborhoods[0].numRobberies[x];
	var batteries = neighborhoods[0].numBattery[x];
	var assaults = neighborhoods[0].numAssault[x];
	var homicides = neighborhoods[0].numHomicide[x];

	var locationText = "#r"+idIndex;
	var numText = "#num"+idIndex;

	$(locationText).text(nName);

	//$('.numIncidents').text(nName);

	$('.map').css('background-image', backgroundIMG);

	//$(numText).text(crimeType);

});

$('.circle').mouseleave(function(){
	var pID = $(this).parent().attr('id');
	pID = "#"+pID;
	var classOne = $(this).attr('class');
	var one = classOne.charAt(0);
	var two = classOne.charAt(1);
	var three = classOne.charAt(2);
	var circleClass = "."+one+two+three;
	var siblings = $(pID).children(circleClass);

	$(siblings).css('background-color', ogColor);
	$(siblings).css('border-width', '0px');
	$(siblings).css('border-style', 'none');

	var idIndex = pID.charAt(2);

	var locationText = "#r"+idIndex;

	//$(locationText).text("");
});



});

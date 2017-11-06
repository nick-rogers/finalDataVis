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

var bgroundImage = "url(blank-01.svg)";

$('.map').css('background-image', bgroundImage);

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

	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numVehicles[x] + " " + Math.round(100*((neighborhoods[0].numVehicles[x])/neighborhoods[0].totalCrime[0])) + "%";
	var crimeType = "Cases of Stolen Vehicles";
	}	

	else if(idIndex === "2"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numRobberies[x] + " " + ((neighborhoods[0].numVehicles[x])/neighborhoods[0].totalCrime[1]) + "%";
	var crimeType = "Cases of Robbery";
	}


	else if(idIndex === "3"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numBattery[x] + " " + ((neighborhoods[0].numVehicles[x])/neighborhoods[0].totalCrime[2]) + "%";
	var crimeType = "Cases of Battery";
	}


	else if(idIndex === "4"){
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numAssault[x] + " " + ((neighborhoods[0].numVehicles[x])/neighborhoods[0].totalCrime[3]) + "%";
	var crimeType = "Cases of Aggravated Assault";
	}

	else {
	
	var nName = "Neighborhood: " + neighborhoods[0].name[x] + " : " + neighborhoods[0].numHomicide[x] + " " + ((neighborhoods[0].numVehicles[x])/neighborhoods[0].totalCrime[4]) + "%";
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





// Block below is for onhover of a time clock section


var clockCrimes = [{

	amhours: ["12:00-1:00AM", "1:00-2:00AM", "2:00-3:00AM", "3:00-4:00AM", "4:00-5:00AM", "5:00-6:00AM", "6:00-7:00AM", "7:00-8:00AM", "8:00-9:00AM", "9:00-10:00AM", "10:00-11:00AM", "11:00-12:00PM"],
	pmhours: ["12:00-1:00PM", "1:00-2:00PM", "2:00-3:00PM", "3:00-4:00PM", "4:00-5:00PM", "5:00-6:00PM", "6:00-7:00PM", "7:00-8:00PM", "8:00-9:00PM", "9:00-10:00PM", "10:00-11:00PM", "11:00-12:00AM"],
	hourCrimes: [15844, 15802, 13337, 8421, 5883, 5379, 6283, 8848, 11566, 11736, 14206, 14899, 18219, 16435, 18541, 20744, 20623, 22562, 25109, 25944, 27407, 27170, 26500, 23489],
	hourCrimesPM: [18219, 16435, 18541, 20744, 20623, 22562, 25109, 25944, 27407, 27170, 26500, 23489]
}];

var totalHourCrime = 404947;





$('.time-section').on('mouseenter', function(){


	var theClass = $(this).attr('class');

	var sub = theClass.charAt(0) + theClass.charAt(1) + theClass.charAt(2) + theClass.charAt(3);

	//console.log("the class " + sub);

	if(sub.charAt(2) == "0"){
		var theNum = sub.charAt(3);
	}
	else {
		var theNum = sub.charAt(2) + sub.charAt(3);
	}

	if(sub.charAt(0) == 'a'){
		//console.log("the num "+ (theNum-1));
		var hourName = clockCrimes[0].amhours[theNum-1];

		var hourCount = clockCrimes[0].hourCrimes[theNum-1];

		var perc = (hourCount/totalHourCrime)*100;

		//console.log("hour "+ hourName);
	}

	else if(sub.charAt(0) == 'p'){
		//console.log("Here is the sub "+sub);
		var hourName = clockCrimes[0].pmhours[(theNum-1)];

		var hourCount = clockCrimes[0].hourCrimesPM[theNum-1];

		var perc = (hourCount/totalHourCrime)*100;
	}




	//console.log(hourCount.toString().length);

	hourCount = String(hourCount);

	perc = perc *100;
	perc = Math.round(perc);
	perc = perc / 100;
	perc = String(perc)+'%';

	if(hourCount.toString().length == 4){
		var newCount = hourCount.charAt(0) + ',' + hourCount.charAt(1) + hourCount.charAt(2) + hourCount.charAt(3);
	}
	else {
		var newCount = hourCount.charAt(0) + hourCount.charAt(1) + ',' + hourCount.charAt(2) + hourCount.charAt(3) + hourCount.charAt(4);
	}

	$('#time').text(hourName);
	$('#time-percent').text(perc);
	$('#time-num').text(newCount);

		$('.inside-clock').fadeIn(100);
		$('.am-pm').css('display','none');

}).on('mouseout', function(){
	$('.inside-clock').css('display','none');
	$('.inside-clock').fadeOut(0);
	$('.am-pm').css('display','block');
});

//$('.inside-clock').css('display','none');


// Clicking on AM and PM

$('#am').click(function(){
	$('#am').css('border-style', 'solid');
	$('#pm').css('border-style', 'none');
	$('.ts2').css('display','none');
	$('.ts1').fadeIn(500);
});

$('#pm').click(function(){
	$('#pm').css('border-style', 'solid');
	$('#am').css('border-style', 'none');
	$('.ts1').css('display','none');
	$('.ts2').fadeIn(500);
});



// When hovering on a location bar, takes id and places it in the content


$('.bar').mouseenter(function(){
	var idContent = $(this).attr('id');
	$(this).text(idContent);
});

$('.bar').mouseout(function(){
	var idContent = "";
	$(this).text(idContent);
});



// When clicking on the filters change the map and bar chart

$('.switch-button').click(function(){
	$('.switch-button').css('color', '#dddddd');
	$('.switch-button').css('text-decoration', 'none');

	$(this).css('color', 'black');
	$(this).css('text-decoration', 'underline');

	var thisID = $(this).attr('id');

	var num = String(thisID.charAt(2));

	console.log(num);

	if(num == "1"){
		$('.bar-container').css('display', 'none');
		$('#bc-1').css('display', 'block');
	}
	else if(num == "2"){
		$('.bar-container').css('display', 'none');
		
	}
	else if(num == "3"){
		$('.bar-container').css('display', 'none');
		$('#bc-2').css('display', 'block');
	}
	else if(num == "4"){
		$('.bar-container').css('display', 'none');
		$('#bc-3').css('display', 'block');
	}
	else if(num == "5"){
		$('.bar-container').css('display', 'none');
		$('#bc-4').css('display', 'block');
	}
	else if(num == "6"){
		$('.bar-container').css('display', 'none');
		$('#bc-5').css('display', 'block');
	}
	else {
		$('.bar-container').css('display', 'none');
		$('#bc-6').css('display', 'block');
	}
});


/*$('.content').mouseover(function(){
	$('.inside-clock').css('display','none');
	console.log('this');
});*/





});

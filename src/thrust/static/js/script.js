// MIO MANUAL COUNT DOWN

//  Set the date we're counting down to
//  all times need to be insert in UTC

// electron
// var countDownDate = new Date("dec 12, 2020 09:00:00").getTime();
// falcon
// var countDownDate1 = new Date("dec 5, 2020 16:39:00").getTime();
// newshepard
// var countDownDate2 = new Date("nov 13, 2020 08:00:00").getTime();
// spaceshiptwo
// var countDownDate3 = new Date("dec 1, 2020 12:00:00").getTime();



// var arrElements = [
// 		{"name": "electron", "eventdate": ""},
// 		{"name": "falcon", "eventdate": ""},
// 		{"name": "newshepard","eventdate": ""},
// 		{"name": "spaceshiptwo","eventdate": ""},
// 		{"name": "longmarch","eventdate": ""}
// 	  ];

// function setEventDate(eventname,eventdate){	
// 	for (var i=0; i < arrElements.length; i++){ 
// 		if(arrElements[i].name == eventname){
// 			arrElements[i].eventdate = eventdate;			
// 		}
// 	}
// }
	  
// Update the count down every 1 second
// var x = setInterval(function() {
  
// 	var now = new Date().getTime();
// 	var countDownDate = new Date("dec 12, 2020 09:00:00").getTime();
// 	var distance = countDownDate - (now - 7200000);
// 	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// 	document.getElementById("electron").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// 	if (distance < 0) {		
// 		document.getElementById("electron").innerHTML = "EXPIRED";
// 	}
    
// }, 1000);



var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = today + ( objToday.getDate() < 10) ? '' + objToday.getDate():
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

document.getElementsByTagName('h1')[0].innerHTML = today
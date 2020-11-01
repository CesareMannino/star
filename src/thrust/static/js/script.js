

// Set the date we're counting down to
// all times need to be insert in UTC

// electron
var countDownDate = new Date("Oct 28, 2020 21:14:00").getTime();
// falcon
var countDownDate1 = new Date("Oct 21, 2020 16:36:00").getTime();
// newshepard
var countDownDate2 = new Date("Oct 13, 2020 08:00:00").getTime();
// spaceshiptwo
var countDownDate3 = new Date("Oct 22, 2020 08:00:00").getTime();





  // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time in milliseconds new date give the today date and gettime() gives the milliseconds from 1970
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  // the 7200000 are milliseconds (2hrs) that need to be added to get as output the utc
  var distance = countDownDate - (now - 7200000);
  var distance1 = countDownDate1 - (now - 7200000);
  var distance2 = countDownDate2 - (now - 7200000);
  var distance3 = countDownDate3 - (now - 7200000);

  // Time calculations for days, hours, minutes and seconds

  // electron
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // falcon
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  // newshepard

  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // spaceshiptwo

var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);



  // Output the result in an element with id= rocket name
  document.getElementById("electron").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("falcon").innerHTML = days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s ";

  document.getElementById("newshepard").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  document.getElementById("spaceshiptwo").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s ";





  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("electron").innerHTML = "EXPIRED";}

    if (distance1 < 0) {
      clearInterval(x);
    document.getElementById("falcon").innerHTML = "EXPIRED";}

    if (distance2 < 0) {
      clearInterval(x);
    document.getElementById("newshepard").innerHTML = "EXPIRED";}

    if (distance3 < 0) {
      clearInterval(x);
    document.getElementById("spaceshiptwo").innerHTML = "EXPIRED";}


  //   document.getElementById("spaceshiptwo").innerHTML = "EXPIRED";

  // }
}, 1000);

// navbar burger menu click




// top stick navbar
// window.onscroll = function() {myfunction();};

// var topnav = document.getElementById("topnav");
// var sticky = topnav.offsetTop;

// function myfunction() {
//   if (window.pageYOffset >= sticky) {
//     topnav.classList.add("sticky");
//   } else {
//     topnav.classList.remove("sticky");
//   }
// }




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
var target_date = new Date().getTime() + (5000 * 3600 * 48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown(countdown);

setInterval(function() {
  getCountdown(countdown);
}, 1000);

var countdown2 = document.getElementById("tiles2"); // get tag element

getCountdown(countdown2);

setInterval(function() {
  getCountdown(countdown2);
}, 1000);

var countdown3 = document.getElementById("tiles3"); // get tag element

getCountdown(countdown3);

setInterval(function() {
  getCountdown(countdown3);
}, 1000);


var countdown4 = document.getElementById("tiles4"); // get tag element

getCountdown(countdown4);

setInterval(function() {
  getCountdown(countdown4);
}, 1000);






function getCountdown(element) {

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  element.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}


// navbar burger menu click
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


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
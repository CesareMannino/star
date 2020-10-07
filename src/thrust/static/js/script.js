// Set the date we're counting down to

// electron
var countDownDate = new Date("Oct 4 , 2020 08:00:00").getTime();
// falcon  
var countDownDate1 = new Date("Oct 31, 2020 06:40:00").getTime();
// newshepard  
var countDownDate2 = new Date("Oct 4, 2020 08:00:00").getTime();
// spaceshiptwo  
var countDownDate3 = new Date("Oct 22, 2020 08:00:00").getTime();

  // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var distance1 = countDownDate1 - now;
  var distance2 = countDownDate2 - now;
  var distance3 = countDownDate3 - now;
    
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
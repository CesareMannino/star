

function setLaunchCountdown(postfix, launchtimefield, daysfield, hoursfield, minutesfield, secondsfield, datefield, net, statusid){
    var netDate = moment(net, 'YYYY-MM-DD HH:mm:ss ZZ').toDate();
    datefield = datefield + postfix;
    document.getElementById(datefield).innerText = netDate.toLocaleString();

    launchtimefield = launchtimefield + postfix;
    daysfield = daysfield + postfix;
    hoursfield = hoursfield + postfix;
    minutesfield = minutesfield + postfix;
    secondsfield = secondsfield + postfix;

    if (!!document.getElementById(launchtimefield)) {
        if (statusid === 3 || statusid === 4 ||  statusid === 5 || statusid === 7){
            if (statusid === 5){
                document.getElementById(launchtimefield).innerHTML = "T-";
            }else{
                document.getElementById(launchtimefield).innerHTML = "T+";
            }
            document.getElementById(daysfield).innerText = "00";
            document.getElementById(hoursfield).innerHTML = "00";
            document.getElementById(minutesfield).innerHTML = "00";
            document.getElementById(secondsfield).innerHTML = "00";
        }else {
            var countdownTicker = setInterval(function () {
                var now = new Date().getTime();
                var difference = netDate.getTime() - now;

                var days = Math.floor(Math.abs(difference / (1000 * 60 * 60 * 24)));
                var hours = Math.floor(Math.abs((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                var minutes = Math.floor(Math.abs((difference % (1000 * 60 * 60)) / (1000 * 60)));
                var seconds = Math.floor(Math.abs((difference % (1000 * 60)) / 1000));

                if (days <= 9) {
                    days = "0" + days
                }
                if (hours <= 9) {
                    hours = "0" + hours
                }
                if (minutes <= 9) {
                    minutes = "0" + minutes
                }
                if (seconds <= 9) {
                    seconds = "0" + seconds
                }

                if (difference > 0) {
                    document.getElementById(launchtimefield).innerHTML = "T-";
                } else {
                    document.getElementById(launchtimefield).innerHTML = "T+";
                }

                document.getElementById(daysfield).innerText = days;
                document.getElementById(hoursfield).innerHTML = hours;
                document.getElementById(minutesfield).innerHTML = minutes;
                document.getElementById(secondsfield).innerHTML = seconds;

            }, 1000);
        }
    }
}

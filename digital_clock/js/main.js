$(document).ready(function() {

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours(); 
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        //currentTime의 H, M, S를 가져와라
                
        var meridiem = "AM"
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        if (hours === 0) {
            hours = 12;
        }
        
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        
        var clockDiv = document.getElementById('clock');
        // This gets a "handle" to the clock div in our HTML
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
        
        setInterval(displayTime, 1000);
        // This makes our clock tick by repeatedly  running the displayTime function every second.
    }
    
    displayTime();
    // This runs the displayTime function the first time
}); 
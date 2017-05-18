let jerryWins = $('.jerryWins');
let tomWins = $('.tomWins');
let round = 1;
let tomCount = 0;
let jerryCount = 0;

// count down
let count = 3;
let counter = setInterval(timer, 1000);
function timer() { // run "timer()" every second.
    if (count > 0) {
        $('.countdownBox').text(count);
    } else if (count < 0) {
        clearInterval(counter);
        return;
    } else {
        $('.countdownBox').text("Go!");
//        tomBot();
    }
    count --;
}

// re-start 
function restart() {
    $('.tom').animate({left: "0"}, 100);
    $('.jerry').animate({left: "0"}, 100);
};

// Tom bot
//function tomBot() {
//    setInterval(function(){
//        $('.tom').animate({left: "+=50"})
//    }, 500);
//}

// winner check
function winnerCheck() {
    if (window.innerWidth - 150 < $('.tom').position().left) {
        alert(`Tom wins!`);
        round += 1;
        tomCount += 1;
        $('.round').text(round);
        $('.tomWins').text(tomCount);
        restart();
    } else if (window.innerWidth - 150 < $('.jerry').position().left) {
        alert(`Jerry wins!`);
        round += 1;
        jerryCount += 1;
        $('.round').text(round);
        $('.jerryWins').text(jerryCount);
        restart();
    }
}



$(document).ready(function(){
    $('.round').text(round);
    
    $('.tomWins').text(tomCount);
    $('.jerryWins').text(jerryCount);
    
    $(document).keypress(function(e) {
        
        // 'T' or 'J' keypresses
        if (e.key === 't') {
           $('.tom').animate({left: "+=50px"}, 200);
        } else if (e.key === 'j') {
           $('.jerry').animate({left: "+=50"}, 200);
        }
        
        winnerCheck();

        
    }); // end of keypress function.
    
}) // end of documend ready function.
$(document).ready(function() {
});

var cNote = document.getElementById('cAudio');

$('#c').mousedown(function(){ //  #c div가 mouse down일 때 아래의 function들이 작동
    cNote.currentTime = 0;    //  currentTime은 속성인데, 미디어파일을 특정 시간대로 
    cNote.play()              //  scrub(cancel) back한다.
});                          
 
var dNote = document.getElementById('dAudio'); //document(html)가서 dAudio를 가져와.
$('#d').mousedown(function(){  // #d div (div박스)를 클릭하면 아래 funcion을 실행.
    dNote.currentTime = 0;     // dNote 오디오파일을 0초로 돌린다음,
    dNote.play()               // dNote 오디오파일을 재생.
});

var eNote = document.getElementById('eAudio');
$('#e').mousedown(function(){
    eNote.currentTime = 0;
    eNote.play ()
});

var fNote = document.getElementById('fAudio');
$('#f').mousedown(function(){
    fNote.currentTime = 0;
    fNote.play()
});

var gNote = document.getElementById('gAudio');
$('#g').mousedown(function(){
    gNote.currentTime = 0;
    gNote.play()
});

var aNote = document.getElementById('aAudio');
$('#a').mousedown(function(){
    aNote.currentTime = 0;
    aNote.play()
});

var bNote = document.getElementById('bAudio');
$('#b').mousedown(function(){
    bNote.currentTime = 0;
    bNote.play()
});
                 
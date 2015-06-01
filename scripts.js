console.log('javascript')

var note = document.getElementById("c6piano"); 


// $( "#c6" ).mousedown(function() {
// 	console.log('hit')
// 	c6piano.play();
// });



function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}
   


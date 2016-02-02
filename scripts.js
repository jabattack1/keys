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

$(document).ready(function(){

  var isDown = false;   // Tracks status of mouse button

  $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  $(".keys").mouseover(function(){
    if(isDown) {        // Only change css if mouse is down
       $(this).css({background:"#333333"});
    }
  });
});
   


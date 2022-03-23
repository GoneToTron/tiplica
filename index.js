let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();  
  $(".bloop").addClass("animate__bounceIn");
  $(".klik").addClass("animate__animated animate__bounceIn animate__delay-2s");
});

var tab = $(".pullout").css("width");
var num = 0;
var numa = 0;

$(document).ready(function(){
  var testo = window.innerHeight;
  $(".landing").css("height", testo);
  $(".pullout").css("height", testo);
  $(".pullout").css("width", "0%");
  $(".head").css("position", "fixed");
  $(".contenttwo").css("height", "0px"); 
});

function openUp() {
  if (num == 0) {
    $(".pullout").css("width", "100%");
    $(".head").css({"background-color": "transparent", "border-bottom": "none"});
  } else if (num == 1){
    $(".pullout").css("width", "0%");
    $(".head").css({"background-color": "white", "border-bottom": "1px solid #e6e6e6"});
  } 
        
  num++;
  if (num == 2) {
    num =0;
  }
console.log(num);
}
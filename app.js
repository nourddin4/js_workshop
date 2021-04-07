// Votre script JS

var x=0;
document.getElementById("value").innerText=x;
function decrement(){
  x=x-1;
  document.getElementById("value").innerText=x;
}

function reset(){
    x=0;
    document.getElementById("value").innerText=x;
  }

function increment(){
  x=x+1;
  document.getElementById("value").innerText=x;
}
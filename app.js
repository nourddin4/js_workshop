// Votre script JS

var x=0;
document.getElementById("value").innerText=x;
function decrement(){
  x=x-1;
  document.getElementById("value").innerText=x;

  if(x < 0){
    document.getElementById("value").style= "color:red;";
  }

  if(x==0){
      document.getElementById("value").style= "color:back;";
  }

}

function reset(){
    x=0;
    document.getElementById("value").innerText=x;
    document.getElementById("value").style= "color:black;";
}

function increment(){
  x=x+1;
  document.getElementById("value").innerText=x;

  if(x > 0){
    document.getElementById("value").style= "color:green;";
  }


  if(x==0){
    document.getElementById("value").style= "color:back;";
  }


}

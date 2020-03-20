var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bg");
var btn = document.querySelector(".getTheBg");


//the function of selecting the color
function selectColor(){
body.style.background =
 "linear-gradient(to right," +
  color1.value +
  "," +
   color2.value + 
   ")";
}

// The function to get the value:


function getvalue(){
    alert("Your Background: "+ body.style.background);
}

// Creating events for the choice of colors:
color1.addEventListener("input",selectColor);

color2.addEventListener("input",selectColor);

// Creating event for clicking the button
btn.addEventListener("click",getvalue);
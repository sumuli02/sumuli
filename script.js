const $Moon = document.getElementById("Moon")
const $Demo = document.getElementById("demo")
const $Cloud1 = document.getElementById("Cloud1")
const $Cloud2 = document.getElementById("Cloud2")
const $Castle = document.getElementById("Castle")
//Behaviours
window.addEventListener("scroll", ScollOn())

//function
function ScrollOn() {
  var sY = window.scrollY;
  var sX = window.scrollX<
  Moon.style.left = (250 - sY*0.31) +"px";
  Cloud1.style.left = (200 + sY*0.4 ) + "px";
  Cloud1.style.top = (360 + sY*0.1) + "px";
  Cloud2.style.left = (200 - sY*0.45) + "px";
  Cloud2.style.top = (360 - sY*0.2) + "px";
  Castle.style.top = (350 + sY * 0.06) + "px";

}
function Hover() {
  document.getElementById("demo").innerHTML = 5 + 6;
  Demo.innerHTML = 5+5;
}

const $Circle = document.querySelector(".cursor__circle");
const $LightHover = document.querySelector(".LightHover");
const $FindBackground = document.querySelector(".FindACat");
const $Jupiter = document.getElementById("#circle1");
//Behaviour
document.body.addEventListener('mousemove', onMouseMove);
$LightHover.addEventListener("mouseenter", onMouseHover);
$LightHover.addEventListener("mouseleave", onMouseHoverOut);


var b = 0
//Function
function onMouseMove() {
  var vw = window.innerwidth
  if (b == 0) {
    $Circle.style.visibility = "visible"
    $Circle.style.left = event.clientX-(55*window.innerWidth/1000) + "px"
    $Circle.style.top = event.clientY-(55*window.innerWidth/1000) + "px"
  }
}
function onMouseHover() {
  $Circle.style.transform = "scale(3,3)"
  $Circle.style.transitionDuration = "0.5s"
}
function onMouseHoverOut() {
  $Circle.style.transform = "scale(1,1)"
  $Circle.style.transitionDuration = "0s"
}

function appearBackground() {
  b = 1
  $Circle.style.transform = "scale(0,0)"
  $Circle.style.transitionDuration = "1s"
  $Circle.style.visibility = "hidden"
  $FindBackground.style.background = "#fff no-repeat 0 0"
  $FindBackground.style.transitionDuration = "1s"
  $FindBackground.style.transitionDelay = "1s"
  $LightHover.style.color = "black"
}

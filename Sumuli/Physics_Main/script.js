const $Circle = document.querySelector(".cursor__circle");
const $LightHover = document.querySelector(".LightHover");
const $FindBackground = document.querySelector(".FindACat");
const $Jupiter = document.getElementById("#circle1");
const $LittleMenu = document.querySelectorAll(".LittleMenu")
const $Explain = document.querySelector(".Explain")
const $ClickHide = document.querySelectorAll(".ClickHide")
//Behaviour
document.body.addEventListener('mousemove', onMouseMove);
$LightHover.addEventListener("mouseenter", onMouseHover);
$LightHover.addEventListener("mouseleave", onMouseHoverOut);


var b = 0
//Function
function onMouseMove() {
  var vw = window.innerwidth
  if (b == 0 ) {
    $Circle.style.visibility = "visible"
    $Circle.style.left = event.clientX-(40*window.innerWidth/1000) + "px"
    $Circle.style.top = event.clientY-(40*window.innerWidth/1000) + "px"
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

  $FindBackground.style.background = "#fffdd0 url(Picture2.png) no-repeat 0 0"
  $FindBackground.style.backgroundSize = "30vw 30vw"
  $FindBackground.style.backgroundPosition = "34.5vw 84vw"

  $LittleMenu[0].style.borderColor = "#fcb677"
  $LittleMenu[1].style.borderColor = "#efbcb6"
  $LittleMenu[2].style.borderColor = "#034C65"
  $LittleMenu[3].style.borderColor = "#685268"

  $LightHover.style.color = "black"

  $Explain.style.background = "#000 url(Cat.jpeg) no-repeat -2vw 0"
  $Explain.style.backgroundSize = "100vw 43vw"

  $ClickHide[0].style.color= "transparent"
  $ClickHide[1].style.color= "transparent"
}

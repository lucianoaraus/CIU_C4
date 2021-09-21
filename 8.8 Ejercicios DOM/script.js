var $div = document.querySelector("div")
$div.classList.backgroundColor = "gray"
$div.classList.height = "250px"
$div.classList.width = "250px"

//var $h1 = document.querySelector("h1")

var toggleVar = function(){ $div.classList.toggle() }

setInterval(toggleVar,1000); //no cambia


var $source = document.querySelector("#source")

var $destination = document.querySelector(".destination")

$destination.textContent = $source.textContent
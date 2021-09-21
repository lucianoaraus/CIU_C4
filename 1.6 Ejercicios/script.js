//1.Show me the money
$dollarImg = document.querySelector("#dollarImg")

$dollarButton = document.querySelector("#dollar")
$dollarButton.addEventListener("click", function(){
  //cuando se haga un toggle en la clase hidden de su imagen respectiva y se muestre o se oculte.
  $dollarImg.classList.toggle('oculto')
})

//$dollarClass = document.querySelector(".oculto")
$miamiImg = document.querySelector("#miamiImg")

$miamiButton = document.querySelector("#miami")
$miamiButton.addEventListener("click", function(){
  //cuando se haga un toggle en la clase hidden de su imagen respectiva y se muestre o se oculte.
  $miamiImg.classList.toggle('oculto')
})

//$dollarClass = document.querySelector(".oculto")
$miameeeImg = document.querySelector("#miameeeImg")

$miameeeButton = document.querySelector("#miameee")
$miameeeButton.addEventListener("click", function(){
  //cuando se haga un toggle en la clase hidden de su imagen respectiva y se muestre o se oculte.
  $miameeeImg.classList.toggle('oculto')
})

$dollarImg.addEventListener("click",function(){
  this.classList.remove()
})

$miamiImg.addEventListener("click",function(){
  this.classList.remove()
})

$miameeeImg.addEventListener("click",function(){
  this.classList.remove()
})


//2.Mouse Tracker
$gif = document.querySelector("#gif")

$body = document.querySelector("body")
$body.addEventListener("mousemove",function(){
  $gif.style.top = $gif.style.clientY
  $gif.style.left = $gif.style.clientX
})


//3.Magic Div
$doge = document.querySelector("#doge")
$magic = document.querySelector("#magic")
$magic.addEventListener("mouseover",function(){
  $doge.classList.add("ocultar")
})


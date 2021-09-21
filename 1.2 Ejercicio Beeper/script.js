var boton = document.querySelector("button")
var body = document.querySelector("body")
var beep = <p> BEEP</p>
var seEjecutaEnEvento = function(){
  //body.textContent = "beep" -> No estaria agregando un parrafo sino mas bien un texto
  //body.innerHTML += beep //-> No funciona bien con eventos (lo hace 1 sola vez)
  body.insertAdjacentHTML("beforeend", beep) //Forma correcta de hacerlo
  body.classList.toggle("color") //switchea el color en cada click
}

boton.addEventListener("click",seEjecutaEnEvento) //cada vez que aprieta el botón debería sumarse un nuevo párrafo, asegurate de usar +=.

//revisar
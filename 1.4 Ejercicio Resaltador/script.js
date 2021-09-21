var $pAll = document.querySelectorAll("p")

$pAll.forEach(i => i.addEventListener("click", function(){
  this.toggle(".resaltado")
}))
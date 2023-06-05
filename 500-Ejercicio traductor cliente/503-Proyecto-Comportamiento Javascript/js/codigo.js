// Cuando pulso teclas en la entrada
var entrada = document.getElementById("entrada")
var resultados = document.getElementById("resultados")
entrada.onkeyup = function(){
    console.log("has pulsado una tecla")
    var contenido = entrada.value
    console.log(contenido)
    resultados.innerHTML = "Aquí vas a ver los resultados"
}
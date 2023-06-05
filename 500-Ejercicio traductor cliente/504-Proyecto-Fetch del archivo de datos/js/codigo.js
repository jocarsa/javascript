// Condiciones iniciales del proyecto
var entrada = document.getElementById("entrada")
var resultados = document.getElementById("resultados")

// Cargo los datos de partida
fetch("db/traductor.csv")
    .then(res => res.text())
    .then(res => dameDatos(res))
    

function dameDatos(res){
    console.log(res)
}
    
// Cuando pulso teclas en la entrada
entrada.onkeyup = function(){
    console.log("has pulsado una tecla")
    var contenido = entrada.value
    console.log(contenido)
    resultados.innerHTML = "Aquí vas a ver los resultados"
}
// Condiciones iniciales del proyecto
var entrada = document.getElementById("entrada");
var resultados = document.getElementById("resultados");
var diccionario;

// Cargo los datos de partida
fetch("db/traductor.csv")
    .then(res => res.text())
    .then(res => dameDatos(res));
    

function dameDatos(res){
    console.log(res);
    var lineas = res.split("\n");
    console.log(lineas)
    diccionario = new Array();
    for(var i = 0;i<lineas.length;i++){
        diccionario[i] = new Array();
        var partido = lineas[i].split(",")
        diccionario[i]['es'] = partido[0];
        diccionario[i]['en'] = partido[1];
        diccionario[i]['de'] = partido[2];
        diccionario[i]['fr'] = partido[3];
        diccionario[i]['it'] = partido[4].replace("\r","");
    }
    console.log(diccionario)
}
    
// Cuando pulso teclas en la entrada
entrada.onkeyup = function(){
    console.log("has pulsado una tecla");
    var contenido = entrada.value;
    console.log(contenido);
    resultados.innerHTML = "Aquí vas a ver los resultados";
    // Busco un resultado dentro del array:
    resultados.innerHTML = "";
    for(var i = 0;i<diccionario.length;i++){
        if(diccionario[i]['es'].includes(contenido)){
            console.log("coincidencia");
            resultados.innerHTML += diccionario[i]['es']+"<br>";
        }
    }
}



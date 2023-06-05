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
    if(contenido.length >= 3){
        console.log(contenido);
        resultados.innerHTML = "Aquí vas a ver los resultados";
        // Busco un resultado dentro del array:
        resultados.innerHTML = "";
        for(var i = 0;i<diccionario.length;i++){
            if(diccionario[i]['es'].includes(contenido)){
                //console.log("coincidencia"); 
                resultados.innerHTML += `
                    <table>
                        <tr>
                            <td>
                                <img src='img/es.png'>
                            </td>
                            <td>
                               `+diccionario[i]['es']+`
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src='img/en.png'>
                            </td>
                            <td>
                               `+diccionario[i]['en']+`
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src='img/fr.png'>
                            </td>
                            <td>
                               `+diccionario[i]['fr']+`
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src='img/de.png'>
                            </td>
                            <td>
                               `+diccionario[i]['de']+`
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src='img/it.png'>
                            </td>
                            <td>
                               `+diccionario[i]['it']+`
                            </td>
                        </tr>
                    </table>
                `;
            }
        }
    }
}



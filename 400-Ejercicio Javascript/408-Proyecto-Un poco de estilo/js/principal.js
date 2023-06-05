console.log("Javascript funcionando...")

var botonusuarios = document.getElementById("cargausuarios")
var botonproductos = document.getElementById("cargaproductos")

botonusuarios.onclick = function(){
    fetch("json/usuarios.json")
    .then(res => res.json())
    .then(res => dameDatos(res))
}

botonproductos.onclick = function(){
    fetch("json/productos.json")
    .then(res => res.json())
    .then(res => dameDatos(res))
}


function dameDatos(res){
    console.log(res)
    var tabla = document.getElementById("tabla")
    var cadena = "<table>";
    for(let i = 0;i<res.usuarios.length;i++){
        cadena += '<tr>';
        for(propiedad in res.usuarios[i]){
            cadena += '<td>'+res.usuarios[i][propiedad]+'</td>'
            console.log(propiedad)
        }
       cadena += '</tr>';
    }
    cadena += "</table>"
    tabla.innerHTML = cadena
}
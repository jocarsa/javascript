console.log("Javascript funcionando...")

fetch("json/usuarios.json")
    .then(res => res.json())
    .then(res => dameDatos(res))

function dameDatos(res){
    console.log(res)
    var tabla = document.getElementById("tabla")
    var cadena = "<table>";
    cadena += "</table>"
    tabla.innerHTML = cadena
}
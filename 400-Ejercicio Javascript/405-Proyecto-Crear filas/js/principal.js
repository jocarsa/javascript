console.log("Javascript funcionando...")

fetch("json/usuarios.json")
    .then(res => res.json())
    .then(res => dameDatos(res))

function dameDatos(res){
    console.log(res)
    var tabla = document.getElementById("tabla")
    var cadena = "<table>";
    for(let i = 0;i<res.usuarios.length;i++){
        cadena += `
                    <tr>
                        <td>`+res.usuarios[i].nombre+`</td>
                        <td>`+res.usuarios[i].email+`</td>
                        <td>`+res.usuarios[i].telefono+`</td>
                    </tr>
                `
    }
    cadena += "</table>"
    tabla.innerHTML = cadena
}
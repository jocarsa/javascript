console.log("Javascript funcionando...")

fetch("json/usuarios.json")
    .then(res => res.json())
    .then(res => dameDatos(res))

function dameDatos(res){
    console.log(res)
}
let fs = require("fs");//acceso directo de node

//Acceder a otros archivos
let tareas = fs.readFileSync("tareas.json");
let tareasLimpio = JSON.parse(tareas);




let mensaje = process.argv[2];
    switch(mensaje){
    case "listar":
        console.log(tareasLimpio);
        break;
        case undefined:
            console.log("Atencion - Tienes que pasar una accion")
            break;
    default : 
    console.log("No entiendo lo que quieres hacer");
    break;
}

module.exports = mensaje;

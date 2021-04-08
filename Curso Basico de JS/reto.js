var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function validarGanador(a, b) {
    var ganador;
    if(a === "piedra" && b === "tijera" || b === "piedra" && a === "tijera" ){
        console.log("El ganador es la piedra");
        ganador = piedra;
    } else if(a === "piedra" && b === "papel" || b === "piedra" && a === "papel"){
        console.log("El ganador es el papel");
        ganador = papel;
    } else if(a === "tijera" && b ==="papel" || b === "tijera" && a ==="papel"){
        console.log("El ganador es la tijera");
        ganador = tijera;
    } else if(a === b){
        ganador = "no hubo ganador el resultado fue empate";
    }
    return ganador;
}

validarGanador("papel", "piedra");
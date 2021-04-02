// Declarativas

function miFuncion(){
    return 3;
}

//Expresiva

var miFuncion = function(){
    return a + b;
}
//asi hago el llamado a mi funcion
miFuncion();

function sumar(x, y){ 
    var resultado = a + b; 
    return resultado;
}

var miXFuncion = function(a, b){
    return a +b;
}

sumar(10, 20); // daria 30
//asi hago el llamado
miXFuncion(2, 3);
//esto daria 5

function saludarEstudiantes(estudiante) { 
    console.log(`hola ${estudiante}`); 
    //console log es para imprimir algo ````
}

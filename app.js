
function promedio (nota1, nota2, nota3, nota4){
return (nota1+nota2+nota3+nota4)/4
}

function aprobado (promedio){
    if (promedio > 5){
        return ( "Aprobaste")
    }else{
        return ( "Lo siento, tendrás que recursar la materia")
    }
}

let respuesta = "";

while (respuesta != "ESC"){

nota1 = Number(prompt("Ingrese la nota del primer TP"))
nota2 = Number(prompt("Ingrese la nota del segundo TP"))
nota3 = Number(prompt("Ingrese la nota del tercer TP"))
nota4 = Number(prompt("Ingrese la nota del trabajo final"))

let resultado = promedio (nota1, nota2, nota3, nota4)
console.log(aprobado(resultado))

respuesta = prompt ("Ingrese \"ESC\" al finalizar con la operación")
}
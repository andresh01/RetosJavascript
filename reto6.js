/* Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones: ● Suma.
● Resta.
● Multiplicación.
● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por cero 
    y el resultado será cero).
● Potenciación.
La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
Para probar vamos a hacer 5 operaciones por cada función.
Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo diferente como 
un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese caso */

let num1, num2, operacion, operador, resultado;


//operacion = prompt("Escribe la operacion completa que desea realizar: "+"recuerde que estos son los operadores + - / * ^ ");
operacion = '9-4'

num1 = parseFloat(seleccionNumero(operacion));

operador = seleccionOperador(operacion)

num2 = parseFloat(seleccionNumero2(operacion))

switch (operador) {
    case "+":
        console.log(suma(num1, num2));
        break;

    case "-":
        console.log(resta2(num1, num2));
        break;

    case "*":
        console.log(multiplicacion(num1, num2));
        break;

    case "/":
        console.log(division(num1, num2));
        break;

    case "^":
        console.log(potenciacion(num1, num2));
        break;

    default:
        console.log('0');
        break;
}



function seleccionNumero(operacion) {
    let numero = '';
    for (let i = 0; i < operacion.length; i++) {
        if (operacion.charCodeAt(i) > 47 && operacion.charCodeAt(i) < 58 || operacion.charCodeAt(i) == 46) {
            numero = numero + operacion[i]
        } else if (operacion.charCodeAt(i) == 42 || operacion.charCodeAt(i) == 43 || operacion.charCodeAt(i) == 45 || operacion.charCodeAt(i) == 47 || operacion.charCodeAt(i) == 94) {
            break
        } else {
            console.log('error al ingresar el numero');
            return numero = '';
        }
    }
    return numero
}

function seleccionOperador(operacion) {
    let operador = 'Operador Mal ingresado. recuerde que son + - * / ^';

    for (let i = 0; i < operacion.length; i++) {
        if (operacion.charCodeAt(i) == 42 || operacion.charCodeAt(i) == 43 || operacion.charCodeAt(i) == 45 || operacion.charCodeAt(i) == 47 || operacion.charCodeAt(i) == 94) {

            return operacion[i];

        }
    }
    console.log(operador)
}

function seleccionNumero2(operacion) {
    let numero = '';
    for (let i = 0; i < operacion.length; i++) {
        if (operacion.charCodeAt(i) == 42 || operacion.charCodeAt(i) == 43 || operacion.charCodeAt(i) == 45 || operacion.charCodeAt(i) == 47 || operacion.charCodeAt(i) == 94)
            for (let j = i + 1; j < operacion.length; j++) {
                if (operacion.charCodeAt(j) > 47 && operacion.charCodeAt(j) < 58 || operacion.charCodeAt(j) == 46) {
                    numero = numero + operacion[j]
                } else {
                    console.log('Error al ingresar el numero2');
                    return numero = '';
                }
            }

    }
    return numero

}

function resta(num1, num2) {
    return num1 - num2
}

function suma(num1, num2) {
    return num1 + num2
}

function multiplicacion(num1, num2) {
    return num1 * num2
}

function potenciacion(num1, num2) {
    return num1 ** num2
}

function division(num1, num2) {

    if (num2 == 0) {
        console.log('ERROR, No se puede dividir por 0');
        return 0;
    } else {
        return num1 / num2
    }
}

/** Vamos a crear una arrow function para pasarla como callback a un .map( ) 
 * que se le aplicará a una lista de strings, está función tendrá la capacidad 
 * de encriptar nuestro lenguaje, y lo que hará es */

//1. Primero convertir todo el mensaje a mayúscula:

texto = ["Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.", "Este es un mensaje super encriptado y solo los mejores podrán leerlo."]

/* console.log(texto.map(lc))

function lc(txt) {
    return txt.toUpperCase()
} */

/* console.log(texto.map(function (txt) {
    return txt.toUpperCase()
})) */

texto = texto.map(txt => txt.toUpperCase())

/**2. Convertir los siguientes carácteres:
● A -> 4
● S -> 5
● E -> 3
● O -> 0
● G -> 6
● I -> 1 
● T -> 7 */

/* const encriptar = texto.map(function(tx){
    return tx.replace(/A/gi,"4").replace(/S/gi,"5").replace(/E/gi,"3").replace(/O/gi,"0").replace(/G/gi,"6").replace(/I/gi,"1").replace(/T/gi,"7")
})

console.log(encriptar) */

const encriptar = texto.map(tx => tx.replace(/A/gi,"4").replace(/S/gi,"5").replace(/E/gi,"3").replace(/O/gi,"0").replace(/G/gi,"6").replace(/I/gi,"1").replace(/T/gi,"7")
)

const encriptar2 = texto.map(tx => tx.replaceAll("A","4").replaceAll("S","5").replaceAll("E","3").replaceAll("O","0").replaceAll("G","6").replaceAll("I","1").replaceAll("T","7")
)

console.log(encriptar)
console.log(encriptar2)

console.log(encriptar[0])
console.log(encriptar[1])

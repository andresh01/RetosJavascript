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

let num1, num2, operacion, operador;


//operacion = prompt("Escribe la operacion completa que desea realizar: "+"recuerde que estos son los operadores + - / * ^ ");
operacion = '34^5'

num1 = parseFloat(seleccionNumero(operacion))

operador = seleccionOperador(operacion)

num2 = parseFloat(seleccionNumero2(operacion))

switch (operador) {
    case "+":
        console.log(suma(num1, num2))
        break;

    case "-":
        console.log(resta(num1, num2))
        break;

    case "*":
        console.log(multiplicacion(num1, num2))
        break;

    case "/":
        console.log(division(num1, num2))
        break;

    case "^":
        console.log(potenciacion(num1, num2))
        break;

    default:
        break;
}


function seleccionNumero(operacion) {
    let numero = '';
    for (let i = 0; i < operacion.length; i++) {
        if (operacion.charCodeAt(i) > 47 && operacion.charCodeAt(i) < 57 || operacion.charCodeAt(i) == 46) {
            numero = numero + operacion[i]
        } else break
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
            for (let j = i; j < operacion.length; j++) {
                if (operacion.charCodeAt(j) > 47 && operacion.charCodeAt(j) < 57 || operacion.charCodeAt(j) == 46) {
                    numero = numero + operacion[j]
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


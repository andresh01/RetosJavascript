/*
//factorial
let n=10;
let acu=0;

acu = (n-1)*n
n=n-2

while(true){
  acu=acu*n
  
  n=n-1
  if(n==0){
    break
  }
}

console.log(acu)
*/

/*
//fibonacci
let numAnterior=0;
let numActual=1;
let resultado=0;

console.log(1);

for(let i=0;i<=30;i++){

  resultado = numActual + numAnterior;
  numAnterior=numActual;
  numActual=resultado;

  if(resultado>55){
    break;
  }
  
  console.log(resultado)
}
*/
/* 
//numeros primos
let num;
let cont=0;
let modulo=0;

for(let i=2;i<32;i++){

  for(let j=1; j<=i;j++){    //ciclo para que el divisor llegue hasta el dividendo
    modulo = i%j;            //calculo del modulo de la division
    if(modulo==0){           //ingresa, si el modulo es igual a 0
      cont++;                //incrementa en 1 cada vez
    }
  }
  
  if(cont==2){
    console.log(i);
  }
  
  cont=0;
}
 */

/*Muestra los números del 1 al 30 pero teniendo en cuenta los siguientes cambios:
○ Escribe pim cuando son múltiplos de 3
○ Escribe pom cuando son múltiplos de 5
○ Escribe pim pom cuando son múltiplos de 3 y 5.*/
/*
let mul3=0;
let mul5=0;

for (let i=1;i<=30;i++){
  mul3=i%3;
  mul5=i%5;

  if(mul3==0 && mul5==0){
    console.log(i+" pim pom")
  } else if(mul3==0){
    console.log(i+" pim")
  }else if(mul5==0){
    console.log(i+" pom")
  }
}
*/


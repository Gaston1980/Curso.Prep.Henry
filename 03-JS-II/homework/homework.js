// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
if(x > y) {
  console.log(x)
} else if(y > x) {
console.log(y)
} else {
  console.log(x)
}


function mayoriaDeEdad(edad) {
  if( edad >= 18) {
    console.log("Allowed")
  } else { 
    console.log("Not allowed")
  }
  }

  
function conection(status) {
  if(status === 1) {
    console.log("Online")
  } else if(status === 2) {
    console.log("Away")
  } else {
    console.log("OffLine")
  }
  }

function saludo(idioma) {
  if(idioma === "aleman") {
    console.log("Guten Tag!")
  } else if(idioma === "mandarin") {
    console.log("Ni Hao")
  } else if(idioma === "ingles") {
    console.log("Hello")
  } else {
    console.log("Hola")
  }
}

  

function colors(color) {
  switch (color) {
    case "blue":
      console.log("This is blue")
      break;
      case "red":
        console.log("This is red")
        break;
        case "green":
        console.log("This is green")
        break;
        case "orange":
          console.log("This is orange")
          break;
          default:
            console.log("Color not found")
}
}
}

function esDiezOCinco(numero) {
  if(numero === 10 || numero === 5) {
    console.log("True")
  } else {
    console.log("False")
  }
  
}

function estaEnRango(numero) {
  if(numero <50 && numero >20) {
    console.log("True")
  } else {
    console.log("False")
  }
  }
  

function esEntero(numero) {
  if(Math.floor(numero) === numero) {
    console.log("true")
  } else {
    console.log("False")
  }
  }
  

function fizzBuzz(numero) {
  if(numero % 15 === 0) return 'fizzbuzz';
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;
}
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero


function operadoresLogicos(num1, num2, num3) {
  if(num1 >num2 && num1>num3 && num1 >0) {
    console.log("Numero 1 es mayor y positivo")
  } else if(num1<0 || num2<0 || num3<0) {
    console.log("Hay negativos")
  } else if(num3>num1 && num3>num2) {
    return num3 + 1
  } else if(num1 === 0 || num2 === 0 || num3 === 0) {
    console.log("Error")
  } else {
    console.log("False")
  }
}



function esPrimo(numero) {
  if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}
  
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor){
  if(valor === true) {
    console.log("Soy verdadero")
  } else if(valor === false) {
    console.log("Soy falso")

}
}


function tablaDelSeis(){
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6
}

  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.

  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.

  if(numero > 99 && numero < 1000){
    return true
  }
  return false
}


  
  
}

function doWhile(numero) {
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;
}

  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};


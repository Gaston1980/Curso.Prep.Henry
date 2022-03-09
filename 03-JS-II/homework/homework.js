// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if(x > y) {
  return x
}else{
  return y
}
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


function esDiezOCinco(numero) {
  if(numero === 10 || numero === 5) {
    return true
  } else {
    return false    
  } 
}

function estaEnRango(numero) {
  if(numero >20 && numero <50  ) {
    return true
  } else {
    return false
  }
  }
  

function esEntero(numero) {
  if(Math.floor(numero) === numero) {
    return true
  } else {
    return false
  }
  }
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

function fizzBuzz(numero) {
  if(numero % 3 === 0 && numero % 5 === 0) return "fizzbuzz";
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;
}
  


function operadoresLogicos(num1, num2, num3) {
  if(num1 >num2 && num1>num3 && num1 >0) {
    return "Numero 1 es mayor y positivo"
  } else if(num1<0 || num2<0 || num3<0) {
    return "Hay negativos"
  } else if(num3>num1 && num3>num2) {
    return num3 + 1
  } else if(num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error"
  } else {
    return false
  }
}

 // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

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
  

function esVerdadero(valor){
  if(valor === true) {
    return "Soy verdadero"
  } else {
    return "Soy falso"
}
}
//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.

function tablaDelSeis(){
  var arrayTablaDel6 = []
  for (var i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6
}

//Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.

function tieneTresDigitos(numero){
   if(numero > 99 && numero < 1000){
    return true
  }
  return false
}

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
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


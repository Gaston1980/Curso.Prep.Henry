// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]
}


function devolverUltimoElemento(array) {
  return array[array.length -1]
}



function obtenerLargoDelArray(array) {
  return array.length
}
  

function incrementarPorUno(array) {
for ( i = 0; i < array.length; i++) {
  array[i] = array[1] + 1
}

return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento) 
    return array
  }




function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  return palabras.join(" ")
}
  

function arrayContiene(array, elemento) {
 for(var i = 0; i < array.length; i++) {
   if( array[i] === elemento {
     return true
   }
  }
     return false
   }
 


function agregarNumeros(numeros) {
var suma = 0
for( var i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i]
}
return suma
}

function promedioResultadosTest(resultadosTest) {
  var suma = 0
  for( var i = 0; i < resultadosTest.length; i++) {
suma = suma + resultadosTest[i] 
  }
  var promedio = suma / resultadosTest.length
  return promedio
}


function numeroMasGrande(numeros) {
  var masgrande = numeros[0]
for ( var i = 0; i < numeros.length; i++) {
if( numeros[i] > masgrande) {
 masgrande = numeros[i]
}
}
return masgrande
}



function multiplicarArgumentos() {
  var suma = 1
  if(arguments.length === 0) return 0
  else if(arguments.length === 1) return arguments[0]
  else{
    for( var i = 0; i < arguments.length; i++) {
      suma *= arguments[i]
    }
  }
return suma
}



function cuentoElementos(arreglo){
  var suma = 0
for( var i = 0; i < arreglo.length; i++) {
  if(arreglo[i] > 18) {
    suma = suma + 1
  }
}
return suma
}


function diaDeLaSemana(numeroDeDia) {
    if( numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana"
    }
  return "Es dia laboral"
  }


function empiezaConNueve(n) {
  var str = n.toString()
if( str[0] === "9") {
  return true
}
return false
}

 

function todosIguales(arreglo) {
  for( var i = 1; i < arreglo.length; i++) {
    if( arreglo[0] !== arreglo[i]) {
      return false
    }
  }

  return true
}


function mesesDelAño(array) {
  var nuevoarray = []
  for (var i = 0; i < array.length; i++) {
    if( array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoarray.push(array[i])
    }
  }
  if( nuevoarray.length < 3) {
    return "No se encontraron los meses pedidos"
  }else{
    return nuevoarray
  }
}


  //Dado un array que contiene algunos meses del año desordenados, 
  recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", 
  guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  var nuevoarray = []
  for( var i = 0; i < array.length; i++) {
    if( array[i] > 100) {
      nuevoarray.push(array[i])
    }
  }
  return nuevoarray
}

 

  //La función recibe un array con enteros entre 0 y 200. 
  Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  var nuevoarray = []
  var suma = numero
  for(var i = 0; i < 10; i++) {
   suma = suma + 2
  
  if( suma === i) {
    break;
  }else{
    nuevoarray.push(suma)
  }
}
if ( i < 10) {
  return "Se interrumpio la ejecucion"
}else{
  return nuevoarray
}
}

              //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  var array = []
  var suma = numero
  for( var i = 0; i < 10; i++) {
    if( i === 5) {
      continue;
    }else{
      suma = suma + 2
      array.push(suma)
    }
  }
    return array
}

  



  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso 
  y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

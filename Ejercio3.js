// Ejercicio numero 3 

// Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego 
// produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1 
// 3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17. 
// Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando 
// los datos de forma ascendente. 

// Importamos el módulo readline para leer la entrada del usuario desde la consola
const readline = require('readline');

// Creamos una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para fusionar dos arrays ordenados ascendentemente
function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0, j = 0;

  // Iteramos mientras haya elementos en ambos arrays
  while (i < arr1.length && j < arr2.length) {
    // Comparamos los elementos de ambos arrays y los añadimos al array fusionado en orden
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else { // Si los elementos son iguales, los añadimos una vez al array fusionado
      mergedArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  // Añadimos los elementos restantes del primer array al array fusionado
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Añadimos los elementos restantes del segundo array al array fusionado
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray; // Devolvemos el array fusionado
}

// Función para solicitar al usuario ingresar un array de números
function inputArray(prompt, limit) {
  console.log(prompt); // Mostramos el mensaje para solicitar los números
  rl.question('', (input) => { // Leemos la entrada del usuario
    const array = input.split(' ').map(Number); // Convertimos la entrada en un array de números
    if (array.length !== limit) { // Validamos que el array tenga el tamaño especificado
      console.log(`Por favor, ingresa ${limit} números.`);
      inputArray(prompt, limit); // Si no es así, solicitamos nuevamente al usuario ingresar los números
    } else if (!array.every((num, index, array) => index === 0 || num > array[index - 1])) { // Validamos que los números estén ordenados ascendentemente
      console.log('Los números deben estar ordenados ascendentemente.');
      inputArray(prompt, limit); // Si no es así, solicitamos nuevamente al usuario ingresar los números
    } else {
      // Si los números son válidos, devolvemos el array
      return array;
    }
  });
}

// Solicitamos al usuario ingresar los números del primer vector
console.log("Ingresa los números del primer vector (ordenados ascendentemente):");
const vector1 = inputArray("Vector 1: ", 5);

// Solicitamos al usuario ingresar los números del segundo vector
console.log("Ingresa los números del segundo vector (ordenados ascendentemente):");
const vector2 = inputArray("Vector 2: ", 5);

// Fusionamos los dos vectores y mostramos el resultado
const mergedArray = mergeArrays(vector1, vector2);
console.log("La lista ordenada de la mezcla de los dos vectores es:");
console.log(mergedArray.join(' ')); // Mostramos el array fusionado separado por espacios
// Este es el ejercicio numero 2

// Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de 
// enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos 
// adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio 
// anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada 
// ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar 
// un nuevo valor. 

// Creamos el Vector 

 let edades = [9]

 // llenamos el arregalo de forma manual 

 edades [0]= 18; //
 edades [1]= 26; //
 edades [2]= 78; //
 edades [3]= 56; //
 edades [4]= 32; //
 edades [5]= 17;
 edades [6]= 10;
 edades [7]= 15;
 edades [8]= 14;
 edades [9]= 98; //

 let mayoresEdad=0, menoresEdad=0,promedioEdad=0,adultosMayoresEdad=0, edadMasBaja=0,edadMasAlta=0;
 let sumaPromedio

 // Creamos una funcion que nos permita llenar esa funcion 
 for (i=0; i<edades.length; i++){
    // Le ponemos la condicion 
    // Validamos los mayores de edad 
    if (edades[i] >= 18){
        mayoresEdad++; 

    }

    // Validamos los menores de edad
    if (edades [i] < 18){
        // contamos los menores de edad
        menoresEdad++

    }

    // Validamos la edad de los adultos mayores 
    if (edades[i] >= 60){
        // Contamos los adultos mayores de edad 
        adultosMayoresEdad++; 


    }

    // Validamos la edad mas alta
    if (edades[i] > edadMasAlta) {
        edadMasAlta = edades[i]; // Actualizamos la edad más alta
    }

    // Validamos la edad mas baja 
    if (edades[i] < edadMasBaja) {
        edadMasBaja = edades[i]; // Actualizamos la edad más baja
    }

    // Calculamos el promedio 
    promedioEdad += edades[i];

 }

 sumaPromedio = promedioEdad / edades.length

 window.alert("Mayores de edad: "+mayoresEdad+", \nMenores de Edad: "+menoresEdad+",\nEdad mas alta: "+edadMasAlta+ "\nEdad mas Baja: "+edadMasBaja+"\nPromedio de Edad"+sumaPromedio)















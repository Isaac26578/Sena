// Proframa que me permite calcular el area de diferentes figuras planas


let opc=0; 
// Menu 
do {


window.alert("1. Bienvenido este es un algoritmo para Calcular areas planas de las figuras.!");

opc = parseInt (prompt("Bienvenido \n1. Calcular area y perimetro del Circulo. \n2. Calcular area y perimetro de un Triangulo. \n3. Calcular el area y perimetro de un Cuadrado.!  \n4. Calcular el area y perimetro de un Rectangulo.! \n5 SALIR!! \nIngresa una opcion"))



// hacemos el switch para verificar cada caso 
switch (opc){
    // Casos 
    case 1: window.alert("Calculo de Area y permimetro del circulo")
    let radio = parseInt(prompt("ingrese el el radio del circulo: "))
    let resultadoArea = calcularAreaCirculo(radio);
    let resultadoPerimetro = calcularPerimetroCirculo(radio);
    window.alert("El area del circulo es: "+resultadoArea+", y el perimetro del circulo es: "+resultadoPerimetro);
    break; 
    case 2: window.alert("Calculo de area y perimetro de un Triangulo.")
    let altura = parseInt(prompt("Ingrese la altura del Triangulo."))
    let base = parseInt (prompt("ingrese la base del Triangulo"))
    let lado= parseInt (prompt("ingrese el lado del triangulo"))
    let resultadoAreaTriangulo = CalcularAreaTriangulo(base, altura)
    let resultadoPerimetroTriangulo = CalcularPerimetroTriangulo(lado)
    console.log("Hola");
    window.alert ("El area del Triangulo es: "+resultadoAreaTriangulo+", y el perimetro del Triangulo es: "+resultadoPerimetroTriangulo);
    break;
    case 3: window.alert("Calcular Area y perimetro de un Cuadrado")
    let ladoCuadrado = parseInt(prompt("Ingrese el lado del Cuadrado: "))
    let resultadoAreaCuadrado = CalcularAreaCuadrado(ladoCuadrado);
    let resultadoPerimetroCuadrado = calcularPerimetroCuadrado (ladoCuadrado);
    window.alert ("El area del Cuadrado es: "+resultadoAreaCuadrado+", y el perimetro del cuadrado es: "+resultadoPerimetroCuadrado)
    break; 
    case 4: window.alert("Calcular El Area y Perimetro de un Rectangulo.!")
    let ladoRectangulo =parseInt(prompt("Ingrese el lado del Rectangulo: "))
    let resultadoAreaRectangulo = CalcularAreaRectangulo (ladoRectangulo);
    let resultadoPerimetroRectangulo = CalcularAreaRectangulo(ladoRectangulo);
    window.alert ("El Area del Recatnagulo es: "+resultadoAreaRectangulo+", Y el Perimetro del rectangulo es: "+resultadoPerimetroRectangulo);

    break
    case 5: break
    default: window.alert ("Opcion no valida!!!")
    break; 


}



}while (opc !=5);


// Lista de Funciones para el calculo de areas y perimetros de figuras planas 

// Metodo para calcular el area de un circulo 
function calcularAreaCirculo (radio){

    let resultado; 
    resultado = Math.PI * radio * radio;
    return resultado.toFixed(2)


}


// Metodo para calcular el perimetro de un circulo 
function calcularPerimetroCirculo (radio){

    let resultado; 
    resultado = 2 * Math.PI * radio
    return resultado.toFixed(2)
}


// Metodo para calcular el area de un cuadrado 
function CalcularAreaCuadrado (lado){

    let resultado; 
    resultado = lado * lado 
    return resultado.toFixed(2)

}

// Metodo para calcular el perimetro de un cuadrado 
function calcularPerimetroCuadrado (lado ){

    let resultado; 
    resultado = 4 * lado
    return resultado.toFixed(2)

}

// Metodo para calcular el area de un Rectangulo  
function CalcularAreaRectangulo (base, altura ){
    let resultado; 
    resultado = base * altura
    return resultado.toFixed(2)


}


// Metodo para calcular el perimetro de un Rectangulo 
function calcularPerimetroRectangulo (base, altura){

    let resultado; 
    resultado = 2 * (base + altura)
    return resultado.toFixed(2)

}

// Metodo para calcular el area de un Triangulo 
function CalcularAreaTriangulo (base, altura){

    let resultado
    resultado = (base * altura) / 2
    return resultado.toFixed(2)

}

// Metodo para calcular el perimetro de un triangulo 
function CalcularPerimetroTriangulo (lado){

    let resultado
    resultado = 3 * lado
    return resultado

}














// Ejercicio 3 
// generar funciones para sumar y restar
// Funcion Sumar
// almacenar el ID del boton sumar
var sumar = document.getElementById('btn-sumar')
// llamar funcion para obtener los valores de los input y despues hacer el click
sumar.addEventListener("click", function () {
    // almacenar el primer valor del imput
    let suma1 = document.querySelector("#valor1").value;
    // verificar que sea numero
    suma1 = parseInt(suma1);
    // almacenar el segundo valor del imput
    let suma2 = document.querySelector("#valor2").value;
    // verificar que sea numero
    suma2 = parseInt(suma2);
    //  Realizar la suma, almacenandola en una variable
    resultadosuma = suma1 + suma2;
    // imprimir resultado en el html
    document.querySelector(".resultado").innerHTML = resultadosuma;
})

var restar = document.getElementById('btn-restar')
// llamar funcion para obtener los valores de los input y despues hacer el click
restar.addEventListener("click", function () {
    // almacenar el primer valor del imput
    let resta1 = document.querySelector("#valor1").value;
    // verificar que sea numero
    resta1 = parseInt(resta1);
    // almacenar el segundo valor del imput
    let resta2 = document.querySelector("#valor2").value;
    // verificar que sea numero
    resta2 = parseInt(resta2);
    //  Realizar la resta, almacenandola en una variable
    resultadoresta = resta1 - resta2;
    // imprimir resultado en el html pero en este caso es con condiciones

    // si el resultado es mayor a 0, imprimir resultado
    if (resultadoresta > 0) {
        document.querySelector(".resultado").innerHTML = resultadoresta;
    } else {
        // si el valor es menor a 0, imprimir el valor 0 unicamente
        let resultadocero = 0
        document.querySelector(".resultado").innerHTML = resultadocero
    }

})
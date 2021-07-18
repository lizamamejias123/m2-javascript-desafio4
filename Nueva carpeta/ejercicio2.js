// Ejercicio 2
// dar color al cuadro cuando se seleccione un color de la lista de 6 colores

// obtener el color y almacenarlo en una variable
var rojo = document.getElementById("btn-1");
// mediante el Id del color seleccionado, llamarlo por la funcion click
rojo.addEventListener("click", function () {
    // cuando se seleccione el color, imprimirlo en la pantalla en el recuadro Id #caja y dale el color que le corresponda
    document.getElementById("caja").setAttribute("style", "background-color: #e53e3e; border: 1px solid black; width: 100%; height: 100%");
});
//  Realizar el proceso a los 6 colores de la lista


var naranjo = document.getElementById("btn-2");
naranjo.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #dd6b20; border: 1px solid black; width: 100%; height: 100%");
});

var amarillo = document.getElementById("btn-3");
amarillo.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #faf089; border: 1px solid black; width: 100%; height: 100%");
});

var verde = document.getElementById("btn-4");
verde.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #48bb78; border: 1px solid black; width: 100%; height: 100%");
});

var celeste = document.getElementById("btn-5");
celeste.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #81e6d9; border: 1px solid black; width: 100%; height: 100%");
});

var morado = document.getElementById("btn-6");
morado.addEventListener("click", function () {
    document.getElementById("caja").setAttribute("style", "background-color: #d53f8c; border: 1px solid black; width: 100%; height: 100%");
});
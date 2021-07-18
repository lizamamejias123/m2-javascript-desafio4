// Ejercicio 1

function limpiar() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}
// Validar fomulario 
// guardar el formulario en una variable para determinarle la funcion
var formulario = document.getElementById("formulario");
// este es la funcion de validacion del formulario por lo que las validaciones se deben hacer afuera y la funcion error
formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        // Debes leer el punto 1 y 2 antes de ver esta parte
        // al tener listo las funciones limpiar y la validacion de datos, se debe seguir el siguiente protocolo
        // Limpieza de input
        // 1) esta funcion esta enfocada en cuando el input este mal rellenado o no validado, lo que hara es limpiarlo y dejarlo sin valores

        limpiar();
        // tomar los valores de los input que se le solicitan al usuario
        var nombre_input = document.querySelector("#nombre").value;
        var asunto_input = document.querySelector("#asunto").value;
        var mensaje_input = document.querySelector("#mensaje").value;

        var validacion_nombre = /[a-zA-Z]/gim;
        var validacion_asunto = /[a-zA-Z]/gim;
        var validacion_mensaje = /[a-zA-Z]/gim;
        // variable de validacion de input correcto siendo verdadero y cuando vea un error sea falso

        if (!validacion_nombre.test(nombre_input)) {
            document.querySelector('.errorNombre').innerHTML = 'El nombre es requerido';
        }
        if (!validacion_asunto.test(asunto_input)) {
            document.querySelector('.errorAsunto').innerHTML = 'El asunto es requerido';
        }
        if (!validacion_mensaje.test(mensaje_input)) {
            document.querySelector('.errorMensaje').innerHTML = 'El mensaje es requerido';
        } else if (validacion_nombre.test(nombre_input) && validacion_asunto.test(asunto_input) && validacion_mensaje.test(mensaje_input) == true) {
          console.log("esta bien")
        }
        if (validacion_nombre.test(nombre_input) && validacion_asunto.test(asunto_input) && validacion_mensaje.test(mensaje_input)) {
            document.querySelector('.resultado').innerHTML = 'Mensaje envia con Exito!!!';
        }
    }



)
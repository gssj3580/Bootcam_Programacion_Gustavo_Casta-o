document.getElementById("actualizar").style.display = "none"; // Ocultar el botón de actualizar inicialmente
var myArrayestudiantes = [];
var objectEstudiante = {
    cedula:null,
    nombre: null,
    apellido: null,
    nota1: null,
    nota2: null,
    nota3: null,
    promedio: null,
    estado: null,
    calificacion: null
};
var posAct;
comprobarLocalStorage(); // Comprobar si hay datos en localStorage al cargar la página
function guardarDatos() {
    objectEstudiante.cedula = document.getElementById("cedula").value;
    objectEstudiante.nombre = document.getElementById("nombre").value;
    objectEstudiante.apellido = document.getElementById("apellido").value;
    objectEstudiante.nota1 = parseFloat(document.getElementById("nota1").value);
    objectEstudiante.nota2 = parseFloat(document.getElementById("nota2").value);
    objectEstudiante.nota3 = parseFloat(document.getElementById("nota3").value);
    let resultado = JSON.parse(JSON.stringify(objectEstudiante));
    console.log(resultado);
    myArrayestudiantes.push({...objectEstudiante});
    console.log(myArrayestudiantes);
    saveToLocalStorage(); // Guardar los datos en localStorage
    alert("Datos guardados correctamente");
    // Limpiar las cajas de texto después de guardar
    limpiarCajas();
    MostrarDatos();
}
function limpiarCajas() {
    document.getElementById("cedula").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("cedula").focus();
}
function MostrarDatos() {
    var salida = "";
    for (i in myArrayestudiantes){
        salida += "<tr><td>" + myArrayestudiantes[i].cedula + "</td>" +
            "<td>" + myArrayestudiantes[i].nombre + "</td>" +
            "<td>" + myArrayestudiantes[i].apellido + "</td>" +
            "<td>" + myArrayestudiantes[i].nota1 + "</td>" +
            "<td>" + myArrayestudiantes[i].nota2 + "</td>" +
            "<td>" + myArrayestudiantes[i].nota3 + "</td>" +
            "<td>" + notaFinal(myArrayestudiantes[i].nota1, myArrayestudiantes[i].nota2, myArrayestudiantes[i].nota3) + "</td>" +
            "<td>" + estado(notaFinal(myArrayestudiantes[i].nota1, myArrayestudiantes[i].nota2, myArrayestudiantes[i].nota3)) + "</td>" +
            "<td>" + cualitativa(notaFinal(myArrayestudiantes[i].nota1, myArrayestudiantes[i].nota2, myArrayestudiantes[i].nota3)) + "</td>" +
            "<td><button onclick='editarEstudiante(" + i + ")'>Editar</button> <button onclick='eliminarEstudiante(" + i + ")'>Eliminar</button></td>" +
            "</tr>";
    }
document.getElementById("listadoEstudiantes").innerHTML = salida;
}
function notaFinal(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(2); // Calcula el promedio de las notas
}
function estado(notaFinal) {
    if (notaFinal >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
function cualitativa(notaFinal) {
    if (notaFinal >= 4.5) {
        return "Excelente";
    } else if (notaFinal >= 3.5) {
        return "Bueno";
    } else if (notaFinal >= 2.5) {
        return "Regular";
    } else {
        return "Deficiente";
    }
}

function editarEstudiante(index) {
    posAct = index; // Guardar la posición del estudiante a editar
    document.getElementById("cedula").value = myArrayestudiantes[index].cedula;
    document.getElementById("nombre").value = myArrayestudiantes[index].nombre;
    document.getElementById("apellido").value = myArrayestudiantes[index].apellido;
    document.getElementById("nota1").value = myArrayestudiantes[index].nota1;
    document.getElementById("nota2").value = myArrayestudiantes[index].nota2;
    document.getElementById("nota3").value = myArrayestudiantes[index].nota3;
    objectEstudiante.cedula = myArrayestudiantes[index].cedula; // Guardar la cédula para actualizar
    document.getElementById("Guardar").style.display = "none"; // Ocultar el botón de guardar
    document.getElementById("actualizar").style.display = "inline"; // Mostrar el botón de actualizar
}
function actualizarDatos() {
    if (posAct !== undefined) {
        myArrayestudiantes[posAct].cedula = document.getElementById("cedula").value;
        myArrayestudiantes[posAct].nombre = document.getElementById("nombre").value;
        myArrayestudiantes[posAct].apellido = document.getElementById("apellido").value;
        myArrayestudiantes[posAct].nota1 = parseFloat(document.getElementById("nota1").value);
        myArrayestudiantes[posAct].nota2 = parseFloat(document.getElementById("nota2").value);
        myArrayestudiantes[posAct].nota3 = parseFloat(document.getElementById("nota3").value);
        saveToLocalStorage(); // Guardar los datos actualizados en localStorage
        alert("Datos actualizados correctamente");
        limpiarCajas();
        MostrarDatos();
        document.getElementById("Guardar").style.display = "inline"; // Mostrar el botón de guardar
        document.getElementById("actualizar").style.display = "none"; // Ocultar el botón de actualizar
    }
}
function eliminarEstudiante(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
        myArrayestudiantes.splice(index, 1); // Elimina el estudiante del array
        MostrarDatos(); // Actualiza la tabla
    }
    saveToLocalStorage(); // Guardar los datos actualizados en localStorage
    alert("Estudiante eliminado correctamente");
}
function comprobarLocalStorage() {
    if (localStorage.getItem("estudiantes")) {
        myArrayestudiantes = JSON.parse(localStorage.getItem("estudiantes"));
        MostrarDatos();
    }
}
function saveToLocalStorage() {
    localStorage.setItem("estudiantes", JSON.stringify(myArrayestudiantes));
}
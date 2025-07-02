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
function uardarDatos() {
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
}
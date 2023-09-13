let listadoEstudiantes = [
  new Estudiante(
    "Barrera Paz",
    "Mauricio Emiliano",
    "Masculino",
    62934756,
    31,
    "@mdo",
    "2do",
    "rrhh"
  ),
  new Estudiante(
    "Renzo David",
    "Barros",
    "Masculino",
    523452345,
    124,
    "@fat",
    "2do",
    "rrhh"
  ),
  new Estudiante(
    "Leiva",
    "Matias Oscar",
    "Masculino",
    4562346,
    754,
    "@twitter",
    "2do",
    "rrhh"
  ),
  new Estudiante(
    "Marello",
    "Adrian",
    "Masculino",
    6623546,
    62,
    "@jane",
    "2do",
    "rrhh"
  ),
  new Estudiante(
    "Sigampa",
    "Mario Emiliano",
    "Masculino",
    34187952,
    50,
    "mes.sigampa14@gmail.com",
    "2do",
    "rrhh"
  ),
];
function updateEstudiantes() {
  const tabla = document.getElementById("lista-estudiantes");
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  listadoEstudiantes.forEach(function (estudiante) {
    let fila = tabla.insertRow();
    let celdaMatricula = fila.insertCell(0);
    let celdaDNI = fila.insertCell(1);
    let celdaNombre = fila.insertCell(2);
    let celdaCorreo = fila.insertCell(3);
    let celdaVerMas = fila.insertCell(4);

    celdaMatricula.innerHTML = estudiante.matricula;
    celdaDNI.innerHTML = estudiante.dni;
    celdaNombre.innerHTML = `${estudiante.apellido}, ${estudiante.nombre}`;
    celdaCorreo.innerHTML = estudiante.correo_electronico;
    celdaVerMas.innerHTML = `<button class="btn btn-outline-danger" type="submit" onclick="quitar(${estudiante.dni})">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-x-lg"
  viewBox="0 0 16 16"
>
  <path
    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  />
</svg>
      </button>`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateEstudiantes();
});

const changeShowEst = () => {
  let nuevo = document.getElementById("estudianteForm");

  nuevo.style.display === "none"
    ? (nuevo.style.display = "block")
    : (nuevo.style.display = "none");
};

fetch("components/Estudiante/EstudianteForm.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("estudianteForm").innerHTML = html;
  });

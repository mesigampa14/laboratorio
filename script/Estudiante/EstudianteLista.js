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
    "Barros",
    "Renzo David",
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

function vistaEstudiante(section) {
  changeShow("vistaEstudiantes");
  changeShow(section);
}

function nuevoEstudiante() {
  changeShow("vistaEstudiantes");
  changeShow("estudianteForm");
}

function detalleEstudiante(dni) {
  changeShow("vistaEstudiantes");
  changeShow("detalleEstudiante");

  let detalle = listadoEstudiantes.filter(function (estudiante) {
    return estudiante.dni == dni;
  });

  document.getElementById(
    "estudianteNombre"
  ).innerHTML = `${detalle[0].apellido}, ${detalle[0].nombre}`;
  document.getElementById("estudianteMatricula").innerHTML =
    detalle[0].matricula;
  document.getElementById("estudianteDNI").innerHTML = detalle[0].dni;
  document.getElementById("estudianteGenero").innerHTML = detalle[0].genero;
  document.getElementById("estudianteCorreoElectronico").innerHTML =
    detalle[0].correo_electronico;
  document.getElementById("estudianteCurso").innerHTML = detalle[0].curso;
  document.getElementById("estudianteGrupo").innerHTML = detalle[0].grupo;
}

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
    celdaVerMas.innerHTML = `<button class="btn btn-outline-primary" style="margin-right: 15px" type="submit" onclick="detalleEstudiante(${estudiante.dni})">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </button>
  <button class="btn btn-outline-danger" type="submit" onclick="quitar(${estudiante.dni})">
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

/*fetch("components/Estudiante/EstudianteForm.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("estudianteForm").innerHTML = html;
  });

fetch("components/Estudiante/EstudianteDetalle.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("detalleEstudiante").innerHTML = html;
  });
*/

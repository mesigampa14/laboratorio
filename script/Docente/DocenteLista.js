const listadoDocentes = [
  new Profesor(
    "Contreras",
    "Nelson",
    "Masculino",
    11111111,
    20111111114,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Gallardo",
    "Cecilia",
    "Femenino",
    222222222,
    272222222224,
    "Programacion 3",
    "2"
  ),
  new Profesor(
    "Miranda",
    "Marta",
    "Femenino",
    333333333,
    273333333334,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Quinteros",
    "Oscar",
    "Masculino",
    44444444,
    20444444444,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Rivas",
    "Daniel",
    "Masculino",
    5555555,
    2055555554,
    "Programacion 1",
    "2"
  ),
];

function vistaDocente(section) {
  changeShow("vistaDocentes");
  changeShow(section);
}

function nuevoDocente() {
  changeShow("vistaDocentes");
  changeShow("docenteForm");
}

function detalleDocente(cuil) {
  changeShow("vistaDocentes");
  changeShow("detalleDocente");

  let detalle = listadoDocentes.filter(function (docente) {
    return docente.cuil == cuil;
  });

  document.getElementById(
    "docenteNombre"
  ).innerHTML = `${detalle[0].apellido}, ${detalle[0].nombre}`;
  document.getElementById("docenteCUIL").innerHTML = detalle[0].cuil;
  document.getElementById("docenteDNI").innerHTML = detalle[0].dni;
  document.getElementById("docenteGenero").innerHTML = detalle[0].genero;
  document.getElementById("docenteAsignatura").innerHTML =
    detalle[0].asignatura;
  document.getElementById("docenteComision").innerHTML = detalle[0].comision;
}

function updateDocente(desdeProyectos = false) {
  const tabla = document.getElementById("lista-docentes");
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  let verMas;
  listadoDocentes.forEach(function (prof) {
    const fila = tabla.insertRow();
    const celdaCuil = fila.insertCell(0);
    const celdaNombre = fila.insertCell(1);
    const celdaAsignatura = fila.insertCell(2);
    const celdaVerMas = fila.insertCell(3);

    desdeProyectos
      ? (verMas = `
      <select class="form-select" aria-label="Default select example" >
        <option selected>Seleccione Rol</option>
        <option value="Director">Director</option>
        <option value="Co-Director">Co-Director</option>
        <option value="Asesor">Asesor</option>
      </select>`)
      : (verMas = `<button class="btn btn-outline-primary" type="submit" onclick="detalleDocente(${prof.cuil})">
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
      </button>`);

    celdaCuil.innerHTML = prof.cuil;
    celdaNombre.innerHTML = `${prof.apellido}, ${prof.nombre}`;
    celdaAsignatura.innerHTML = prof.asignatura;
    celdaVerMas.innerHTML = verMas;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateDocente();
});

fetch("components/Docentes/DocenteForm.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("docenteForm").innerHTML = html;
  });

fetch("components/Docentes/DocenteDetalle.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("detalleDocente").innerHTML = html;
  });

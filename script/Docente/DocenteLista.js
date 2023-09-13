const listadoDocentes = [
  new Profesor(
    "Contreras",
    "Nelson",
    "Masculino",
    62934756,
    20654646544,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Gallardo",
    "Cecilia",
    "Femenino",
    62934756,
    27654646544,
    "Programacion 3",
    "2"
  ),
  new Profesor(
    "Miranda",
    "Marta",
    "Femenino",
    62934756,
    27654646544,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Quinteros",
    "Oscar",
    "Masculino",
    62934756,
    20654646544,
    "Programacion 1",
    "2"
  ),
  new Profesor(
    "Rivas",
    "Daniel",
    "Masculino",
    62934756,
    20654646544,
    "Programacion 1",
    "2"
  ),
];

function updateList() {
  const tabla = document.getElementById("lista-docentes");
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  listadoDocentes.forEach(function (prof) {
    const fila = tabla.insertRow();
    const celdaCuil = fila.insertCell(0);
    const celdaNombre = fila.insertCell(1);
    const celdaAsignatura = fila.insertCell(2);
    const celdaVerMas = fila.insertCell(3);

    celdaCuil.innerHTML = prof.cuil;
    celdaNombre.innerHTML = `${prof.apellido}, ${prof.nombre}`;
    celdaAsignatura.innerHTML = prof.asignatura;
    celdaVerMas.innerHTML = `<button class="btn btn-outline-primary" type="submit">
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
      </button>`;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateList();
});

const changeShow = () => {
  let nuevo = document.getElementById("docenteForm");

  nuevo.style.display === "none"
    ? (nuevo.style.display = "block")
    : (nuevo.style.display = "none");
};

fetch("components/Docentes/DocenteForm.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("docenteForm").innerHTML = html;
  });

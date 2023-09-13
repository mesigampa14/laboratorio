let listadoProyectos = [
  new Proyecto("2023-04-26", "Proyecto1", "", "", "Aceptado"),
  new Proyecto("2023-06-14", "Proyecto2", "", "", "Aceptado"),
  new Proyecto("2023-09-13", "Proyecto3", "", "", "Observado"),
];

function vistaProyecto(section) {
  changeShow("vistaProyectos");
  changeShow(section);
}

function nuevoProyecto() {
  changeShow("vistaProyectos");
  changeShow("proyectoForm");
  updateEstudiantes();
  updateDocente(true);
}

function detalleProyecto(titulo) {
  changeShow("vistaProyectos");
  changeShow("detalleProyecto");

  let detalle = listadoProyectos.filter(function (proy) {
    return proy.titulo == titulo;
  });

  document.getElementById("proyectoTitulo").innerHTML = detalle[0].titulo;
  document.getElementById("proyectoFecha").innerHTML = detalle[0].fecha;
  document.getElementById("proyectoDescripcion").innerHTML =
    detalle[0].descripcion;
  document.getElementById("proyectoEstado").innerHTML = detalle[0].estado;
  detalle[0].estado == "Observado"
    ? (document.getElementById("campoObservacion").style.display = "block")
    : (document.getElementById("campoObservacion").style.display = "none");
}

function guardarObservacion() {
  const observacion = document.getElementById("observacion").value;
  console.log(observacion);

  let aux = listadoProyectos.map(function (proy) {
    proy.titulo == "Proyecto3";
  });
}

function updateProyectos() {
  const tabla = document.getElementById("lista-proyectos");
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }

  listadoProyectos.forEach(function (proy) {
    let fila = tabla.insertRow();
    let celdaFecha = fila.insertCell(0);
    let celdaTitulo = fila.insertCell(1);
    let celdaEstado = fila.insertCell(2);
    let celdaVerMas = fila.insertCell(3);

    celdaFecha.innerHTML = proy.fecha;
    celdaTitulo.innerHTML = proy.titulo;
    celdaEstado.innerHTML = proy.estado;
    celdaVerMas.innerHTML = `<button class="btn btn-outline-primary" style="margin-right: 15px" type="submit" onclick="detalleProyecto('${proy.titulo}')">
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
  updateProyectos();
});

fetch("components/Proyectos/ProyectoForm.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("proyectoForm").innerHTML = html;
  });

fetch("components/Proyectos/ProyectoDetalle.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("detalleProyecto").innerHTML = html;
  });

function resetForm() {
  document.forms["formulario"].reset();
}

function agregarProyecto(nuevo) {
  listadoProyectos.push(nuevo);
  updateProyectos();
}

function validacion() {
  const fecha = document.forms["formulario"]["fecha_alta"].value;
  const titulo = document.forms["formulario"]["titulo"].value;
  const descripcion = document.forms["formulario"]["descripcion"].value;
  const archivos = document.forms["formulario"]["file"].value;

  if (!fecha || !titulo || !descripcion) {
    alert("Complete los campos");
    return false;
  } else {
    const nuevo = new Proyecto(fecha, titulo, descripcion, "", "Pendiente", "");

    agregarProyecto(nuevo);

    resetForm();
    alert("Se ha guardado correctamente");
    vistaProyecto("proyectoForm");
    return false;
  }
}

function guardarObservacion() {
  const fecha = document.forms["campoObservacion"].value;
  const titulo = document.forms["formulario"]["titulo"].value;
  const descripcion = document.forms["formulario"]["descripcion"].value;
  const archivos = document.forms["formulario"]["file"].value;

  if (!fecha || !titulo || !descripcion) {
    alert("Complete los campos");
    return false;
  } else {
    const nuevo = new Proyecto(fecha, titulo, descripcion, "", "Pendiente", "");

    agregarProyecto(nuevo);

    resetForm();
    alert("Se ha guardado correctamente");
    vistaProyecto("proyectoForm");
    return false;
  }
}

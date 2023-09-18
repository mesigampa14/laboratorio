function resetForm() {
  document.forms["formulario"].reset();
}

function agregarDocente(nuevo) {
  listadoDocentes.push(nuevo);
  updateDocente();
}

function validacion() {
  const dni = document.forms["formulario"]["dni"].value;
  const nombre = document.forms["formulario"]["nombre"].value;
  const apellido = document.forms["formulario"]["apellido"].value;
  const genero = document.forms["formulario"]["genero"].value;
  const cuil = document.forms["formulario"]["cuil"].value;
  const asignatura = document.forms["formulario"]["asignatura"].value;
  const comision = document.forms["formulario"]["comision"].value;

  if (
    !dni ||
    !nombre ||
    !apellido ||
    !genero ||
    !cuil ||
    !asignatura ||
    !comision
  ) {
    alert("Complete los campos");
    return false;
  } else {
    const nuevo = new Profesor(
      apellido,
      nombre,
      genero,
      dni,
      cuil,
      asignatura,
      comision
    );

    console.log(nuevo.asignar());
    agregarDocente(nuevo);

    resetForm();
    alert("Se ha guardado correctamente");
    vistaDocente("docenteForm");
    return false;
  }
}

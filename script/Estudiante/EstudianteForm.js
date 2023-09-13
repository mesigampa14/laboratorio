function resetForm() {
  document.forms["formulario"].reset();
}

function agregarEstudiante(nuevo) {
  listadoEstudiantes.push(nuevo);
  updateEstudiantes();
}

function validacion() {
  const matricula = document.forms["formulario"]["matricula"].value;
  const dni = document.forms["formulario"]["dni"].value;
  const nombre = document.forms["formulario"]["nombre"].value;
  const apellido = document.forms["formulario"]["apellido"].value;
  const genero = document.forms["formulario"]["genero"].value;
  const correo_electronico =
    document.forms["formulario"]["correo_electronico"].value;

  const nuevo = new Estudiante(
    apellido,
    nombre,
    genero,
    dni,
    matricula,
    correo_electronico,
    "",
    ""
  );

  console.log(nuevo.registrar());
  agregarEstudiante(nuevo);

  resetForm();
  changeShowEst();
  alert("Se ha guardado correctamente");
  return false;
}

function quitar(dni) {
  listadoEstudiantes = listadoEstudiantes.filter(function (estudiante) {
    estudiante.dni == dni &&
      alert(
        `El estudiante ${estudiante.apellido}, ${estudiante.nombre} se elimina de la lista.`
      );
    return estudiante.dni != dni;
  });
  updateEstudiantes();
}

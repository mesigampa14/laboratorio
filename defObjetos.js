class Proyecto {
  constructor(fecha, titulo, descripcion, archivos, estado, observacion) {
    this.fecha = fecha;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.archivos = archivos;
    this.estado = estado;
    this.observacion = observacion;
  }

  setObservacion(observacion) {
    this.observacion = observacion;
  }
}
class Persona {
  constructor(apellido, nombre, genero, dni) {
    this.apellido = apellido;
    this.nombre = nombre;
    this.genero = genero;
    this.dni = dni;
  }

  obtDetalles() {
    return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Género: ${this.genero}`;
  }
}

class Estudiante extends Persona {
  constructor(
    apellido,
    nombre,
    genero,
    dni,
    matricula,
    correo_electronico,
    curso,
    grupo
  ) {
    super(apellido, nombre, genero, dni);
    this.matricula = matricula;
    this.correo_electronico = correo_electronico;
    this.curso = curso;
    this.grupo = grupo;
  }

  guardar() {
    return `El estudiante ${this.apellido}, ${this.nombre} con DNI: ${this.dni} y Matricula: ${this.matricula} se ha guardado correctamente`;
  }

  registrar() {
    return `El estudiante ${this.apellido}, ${this.nombre} se ha registrado al grupo ${this.grupo}`;
  }
}

class Profesor extends Persona {
  constructor(apellido, nombre, genero, dni, cuil, asignatura, comision) {
    super(apellido, nombre, genero, dni);
    this.cuil = cuil;
    this.asignatura = asignatura;
    this.comision = comision;
  }

  asignar() {
    return `El profesor ${this.apellido}, ${this.nombre} se ha asignado a la comisión ${this.comision}`;
  }

  guardar() {
    return `El profesor ${this.apellido}, ${this.nombre} con DNI: ${this.dni} y CUIL: ${this.cuil} se ha guardado correctamente a la asignatura ${this.asignatura}`;
  }
}

class Profesor {

    /*
    constructor(id, numeroEmpleado, nombres, apellidos, horasClase) {
        this.id = id ?? Math.floor(Math.random() * 1000000);
        this.numeroEmpleado = numeroEmpleado;
        this.nombres = nombres, 
        this.apellidos = apellidos;
        this.horasClase = horasClase;
    }
    */
    constructor(id, numeroEmpleado, nombres) {
        this.id = id ?? Math.floor(Math.random() * 1000000);
        this.numeroEmpleado = numeroEmpleado;
        this.nombres = nombres
    }
}

export default Profesor;
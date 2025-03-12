import Alumno from "../models/AlumnoModel.js";


let alumnos = [
    new Alumno(null, "Juan Pérez", "A21216381"),
    new Alumno(null, "José Moo", "A21216382"),
    new Alumno(null, "Luis Puc", "A21216383"),
];

export const createAlumno = (req, res) => {
    try {
        const { id, nombres, apellidos, matricula, promedio } = req.body;

        const alumno = new Alumno( id, nombres, apellidos, matricula, promedio);
        alumnos.push(alumno);
        res.status(201).json(alumno);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getAlumnos = (req, res) => {
    res.status(200).json(alumnos);
};

export const getAlumnosById = (req, res) => {
    const { id } = req.params;
    const alumno = alumnos.find((alumno) => alumno.id == id);

    if (!alumno) {
        return res.status(404).json({ error: 'Alumno not found' });
    }

    res.status(200).json(alumno);
}

export const deleteAlumno = (req, res) => {
    const { id } = req.params;
    const alumno = alumnos.find((alumno) => alumno.id == id);

    if (!alumno) {
        return res.status(404).json({ error: 'Alumno not found' });
    }

    alumnos = alumnos.filter((alumno) => alumno.id != id);
    res.status(200).json({ message: 'Alumno deleted successfully' });
};

export const updateAlumno = (req, res) => {
    try {
        const { id } = req.params;
        
        const { nombres, apellidos, matricula, promedio } = req.body;

        const alumno = alumnos.find((alumno) => alumno.id == id);

        if (!alumno) {
            return res.status(404).json({ error: 'Alumno not found' });
        }
        Object.assign(alumno, { nombres, apellidos, matricula, promedio });

        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export const unsuportedMethod = (req, res) => {
    res.status(405).json({
        error: `Método ${req.method} no permitido en ${req.originalUrl}`
    });
};
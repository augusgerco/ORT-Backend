const alumnos = [
    {
        nombre: "Juan",
        apellido: "Gomez",
        dni: 48345678,
        anio: 4,
        curso: "B",
        nota: 8,
    },
    , {
        nombre: "Mia",
        apellido: "Gonzales",
        dni: 48217482,
        anio: 3,
        curso: "B",
        nota: 5,
    },
    , {
        nombre: "Nicolás",
        apellido: "Atalah",
        dni: 48380211,
        anio: 4,
        curso: "B",
        nota: 7,
    },
    , {
        nombre: "Ignacio",
        apellido: "Bordieu",
        dni: 48118939,
        anio: 4,
        curso: "A",
        nota: 10,
    },
    , {
        nombre: "Santiago",
        apellido: "Rehmann",
        dni: 48379041,
        anio: 3,
        curso: "B",
        nota: 4,
    },
    , {
        nombre: "Mia",
        apellido: "Cuesta",
        dni: 48125077,
        anio: 4,
        curso: "C",
        nota: 6,
    },
    , {
        nombre: "Melina",
        apellido: "Kenigsberg",
        dni: 48860327,
        anio: 5,
        curso: "A",
        nota: 10,
    },
    , {
        nombre: "Maia",
        apellido: "German",
        dni: 48194476,
        anio: 4,
        curso: "A",
        nota: 3,
    },
    , {
        nombre: "Mildred",
        apellido: "Parolacha",
        dni: 48625867,
        anio: 5,
        curso: "A",
        nota: 6,
    },
    , {
        nombre: "Teo",
        apellido: "Reiman",
        dni: 48132567,
        anio: 4,
        curso: "B",
        nota: 8,
    }
]

function capitalizar(str) {
    if (!str) return "";
    return str.slice(0,1).toUpperCase() + str.slice(1);
  }

  function mostrarAlumno(alumno) {
    console.log("-----------");
    console.log("Nombre: " + alumnos.nombre + alumnos.apellido);
    console.log("DNI: " + alumnos.);
    console.log("Año: ${alumno.anio}");
    console.log("Curso: ${alumno.curso}");
    console.log("Nota: ${alumno.nota}");
  }
  
  alumnos.forEach(mostrarAlumno);
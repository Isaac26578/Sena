
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos un objeto para almacenar la información de las personas
const personas = [];

// Función para agregar una persona con sus datos
function agregarPersona() {
  rl.question('Nombre: ', (nombre) => {
    rl.question('Número de identificación (cédula): ', (cedula) => {
      rl.question('Fecha de nacimiento: ', (fechaNacimiento) => {
        rl.question('Correo electrónico: ', (email) => {
          rl.question('Ciudad de residencia: ', (ciudadResidencia) => {
            rl.question('Ciudad de origen: ', (ciudadOrigen) => {
              rl.question('Artista y título de la canción favorita 1: ', (cancion1) => {
                rl.question('Artista y título de la canción favorita 2 (opcional): ', (cancion2) => {
                  rl.question('Artista y título de la canción favorita 3 (opcional): ', (cancion3) => {
                    // Creamos un objeto con los datos ingresados
                    const persona = {
                      nombre,
                      cedula,
                      fechaNacimiento,
                      email,
                      ciudadResidencia,
                      ciudadOrigen,
                      cancionesFavoritas: [cancion1, cancion2, cancion3].filter(Boolean) // Filtramos los valores vacíos
                    };
                    // Agregamos la persona al arreglo de personas
                    personas.push(persona);
                    console.log('Persona agregada exitosamente.');
                    mostrarMenu();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

// Función para mostrar la información personal de una persona por su posición en el vector
function mostrarInfoPersonal() {
  rl.question('Ingrese el número de posición de la persona: ', (posicion) => {
    const index = parseInt(posicion) - 1;
    if (index >= 0 && index < personas.length) {
      console.log('Información de la persona:');
      console.log('Nombre:', personas[index].nombre);
      console.log('Número de identificación (cédula):', personas[index].cedula);
      console.log('Fecha de nacimiento:', personas[index].fechaNacimiento);
      console.log('Correo electrónico:', personas[index].email);
      console.log('Ciudad de residencia:', personas[index].ciudadResidencia);
      console.log('Ciudad de origen:', personas[index].ciudadOrigen);
      console.log('Canciones favoritas:');
      personas[index].cancionesFavoritas.forEach((cancion, i) => {
        console.log(`  ${i + 1}. ${cancion}`);
      });
    } else {
      console.log('La posición ingresada no es válida.');
    }
    mostrarMenu();
  });
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
  console.log('\nMenú:');
  console.log('a. Agregar una persona');
  console.log('b. Mostrar información personal de una persona');
  console.log('x. Salir');

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case 'a':
        agregarPersona();
        break;
      case 'b':
        mostrarInfoPersonal();
        break;
      case 'x':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        mostrarMenu();
        break;
    }
  });
}

// Comenzar mostrando el menú
mostrarMenu();
const Rol = require("../models/role.model");

const defaultRoles = [
  {
    nombre_rol: "Administrador",
  },
  {
    nombre_rol: "Profesor",
  },
  {
    nombre_rol: "Estudiante",
  },
  {
    nombre_rol: "Invitado",
  },
];

async function seedRoles() {
  try {
    // Sincroniza el modelo Rol
    await Rol.sync();

    // Verifica si ya existen roles en la base de datos
    const existingRoles = await Rol.findAll();

    // Si no hay roles en la base de datos, inserta los datos por defecto
    if (existingRoles.length === 0) {
      await Rol.bulkCreate(defaultRoles);
      console.log("Datos por defecto de rol insertados exitosamente.");
    } else {
      console.log("Ya existen datos de rol en la base de datos.");
    }
  } catch (error) {
    console.error("Error al insertar datos por defecto de rol:", error);
  }
}

module.exports = seedRoles;

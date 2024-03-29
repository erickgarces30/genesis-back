const Permission = require("../models/permission.model");

const defaultPermissions = [
  {
    nombre_permiso: "Crear usuario",
    detalle_permiso: "Permite crear un nuevo usuario en el sistema.",
  },
  {
    nombre_permiso: "Actualizar usuario",
    detalle_permiso:
      "Permite actualizar la información de un usuario en el sistema.",
  },
  {
    nombre_permiso: "Eliminar usuario",
    detalle_permiso: "Permite eliminar un usuario del sistema.",
  },
  {
    nombre_permiso: "Ver usuario",
    detalle_permiso: "Permite ver la información de un usuario en el sistema.",
  },
  {
    nombre_permiso: "Crear rol",
    detalle_permiso: "Permite crear un nuevo rol en el sistema.",
  },
  {
    nombre_permiso: "Actualizar rol",
    detalle_permiso:
      "Permite actualizar la información de un rol en el sistema.",
  },
  {
    nombre_permiso: "Eliminar rol",
    detalle_permiso: "Permite eliminar un rol del sistema.",
  },
  {
    nombre_permiso: "Ver rol",
    detalle_permiso: "Permite ver la información de un rol en el sistema.",
  },
  {
    nombre_permiso: "Crear permiso",
    detalle_permiso: "Permite crear un nuevo permiso en el sistema.",
  },
  {
    nombre_permiso: "Actualizar permiso",
    detalle_permiso:
      "Permite actualizar la información de un permiso en el sistema.",
  },
  {
    nombre_permiso: "Eliminar permiso",
    detalle_permiso: "Permite eliminar un permiso del sistema.",
  },
  {
    nombre_permiso: "Ver permiso",
    detalle_permiso: "Permite ver la información de un permiso en el sistema.",
  },
  {
    nombre_permiso: "Asignar rol",
    detalle_permiso: "Permite asignar un rol a un usuario en el sistema.",
  },
  {
    nombre_permiso: "Remover rol",
    detalle_permiso: "Permite remover un rol a un usuario en el sistema.",
  },
  {
    nombre_permiso: "Asignar permiso",
    detalle_permiso: "Permite asignar un permiso a un rol en el sistema.",
  },
  {
    nombre_permiso: "Remover permiso",
    detalle_permiso: "Permite remover un permiso a un rol en el sistema.",
  },
];

async function seedPermissions() {
  try {
    // Sincroniza el modelo Permission
    await Permission.sync();

    // Verifica si ya existen permisos en la base de datos
    const existingPermissions = await Permission.findAll();

    // Si no hay permisos en la base de datos, inserta los datos por defecto
    if (existingPermissions.length === 0) {
      await Permission.bulkCreate(defaultPermissions);
      console.log("Datos por defecto de permiso insertados exitosamente.");
    } else {
      console.log("Ya existen datos de permiso en la base de datos.");
    }
  } catch (error) {
    console.error("Error al insertar datos por defecto de permiso:", error);
  }
}

module.exports = seedPermissions;

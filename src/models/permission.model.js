const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Permission = db.define("Permission", {
  id_permiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_permiso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalle_permiso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_permiso: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = Permission;

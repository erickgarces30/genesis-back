const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Rol = db.define("Rol", {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_rol: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = Rol;

const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const RolePermission = db.define("RolePermission", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  permission_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RolePermission;

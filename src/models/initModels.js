const User = require("./user.model");
const Rol = require("./role.model");
const Permission = require("./permission.model");
const RolePermission = require("./rolePermision.model");

const initModels = () => {
  User.belongsTo(Rol, { foreignKey: "role_id" });
  Rol.hasMany(User, { foreignKey: "role_id" });

  Rol.belongsToMany(Permission, {
    through: RolePermission,
    foreignKey: "role_id",
  });
  Permission.belongsToMany(Rol, {
    through: RolePermission,
    foreignKey: "permission_id",
  });
};

module.exports = initModels;

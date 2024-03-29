const RolePermission = require("../models/rolePermision.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createRolePermission = catchAsync(async (req, res, next) => {
  const { role_id, permission_id } = req.body;

  const rolePermission = await RolePermission.create({
    role_id,
    permission_id,
  });

  res.status(201).json({
    status: "success",
    rolePermission,
  });
});

exports.getRolePermissions = catchAsync(async (req, res, next) => {
  const rolePermissions = await RolePermission.findAll();

  res.status(200).json({
    status: "success",
    rolePermissions,
  });
});

exports.getRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  res.status(200).json({
    status: "success",
    rolePermission,
  });
});

exports.updateRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { role_id, permission_id } = req.body;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.update({ role_id, permission_id });

  res.status(200).json({
    status: "success",
    rolePermission,
  });
});
exports.deleteRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.update({ estado_permiso: "Inactivo" });

  res.status(204).json({
    status: "success",
    message: "Permiso eliminado exitosamente.",
  });
});
exports.reactiveRolePermission = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolePermission = await RolePermission.findByPk(id);

  if (!rolePermission) return next(new AppError("Permiso no encontrado!", 404));

  await rolePermission.update({ estado_permiso: "Activo" });

  res.status(200).json({
    status: "success",
    message: "Permiso reactivado exitosamente.",
  });
});

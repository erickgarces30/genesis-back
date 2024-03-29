const Rol = require("../models/role.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createRole = catchAsync(async (req, res, next) => {
  const { nombre_rol } = req.body;

  const role = await Rol.create({ nombre_rol });

  res.status(201).json({
    status: "success",
    role,
  });
});

exports.getRoles = catchAsync(async (req, res, next) => {
  const roles = await Rol.findAll();

  res.status(200).json({
    status: "success",
    roles,
  });
});

exports.getRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const role = await Rol.findByPk(id);

  if (!role) return next(new AppError("Rol no encontrado!", 404));

  res.status(200).json({
    status: "success",
    role,
  });
});

exports.updateRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_rol } = req.body;

  const role = await Rol.findByPk(id);

  if (!role) return next(new AppError("Rol no encontrado!", 404));

  await role.update({ nombre_rol });

  res.status(200).json({
    status: "success",
    role,
  });
});

exports.deleteRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const role = await Rol.findByPk(id);

  if (!role) return next(new AppError("Rol no encontrado!", 404));

  await role.update({ estado_rol: "Inactivo" });

  res.status(204).json({
    status: "success",
    role,
  });
});

exports.activateRole = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const role = await Rol.findByPk(id);

  if (!role) return next(new AppError("Rol no encontrado!", 404));

  await role.update({ estado_rol: "Activo" });

  res.status(200).json({
    status: "success",
    role,
  });
});

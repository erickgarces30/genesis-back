const Permision = require("../models/permission.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createPermision = catchAsync(async (req, res, next) => {
  const { nombre_permiso, detalle_permiso } = req.body;

  const permision = await Permision.create({ nombre_permiso, detalle_permiso });

  res.status(201).json({
    status: "success",
    permision,
  });
});

exports.getPermisions = catchAsync(async (req, res, next) => {
  const permisions = await Permision.findAll();

  res.status(200).json({
    status: "success",
    permisions,
  });
});

exports.getPermision = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const permision = await Permision.findByPk(id);

  if (!permision) return next(new AppError("Permiso no encontrado!", 404));

  res.status(200).json({
    status: "success",
    permision,
  });
});

exports.updatePermision = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_permiso, detalle_permiso } = req.body;

  const permision = await Permision.findByPk(id);

  if (!permision) return next(new AppError("Permiso no encontrado!", 404));

  await permision.update({ nombre_permiso, detalle_permiso });

  res.status(200).json({
    status: "success",
    permision,
  });
});

exports.deletePermision = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const permision = await Permision.findByPk(id);

  if (!permision) return next(new AppError("Permiso no encontrado!", 404));

  await permision.update({ estado_permiso: "Inactivo" });

  res.status(204).json({
    status: "success",
    permision: null,
  });
});

const { promisify } = require("util");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  // 1) Getting token and check of it's there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // 2) Verification token
  if (!token) {
    return next(
      new AppError(
        "No estas logueado! Por favor inicia sesión para obtener acceso.",
        401
      )
    );
  }
  // 3) Decode token (Verification token)
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.SECRET_JWT_SEED
  );
  // 4) Check if user still exists
  console.log(decoded.id)
  const user = await User.findOne({
    where: {
      id: decoded.id,
      status: "Active",
    },
  });
  if (!user) {
    return next(
      new AppError("El usuario al que pertenece este token ya no existe.", 401)
    );
  }

  req.sessionUser = user;
  next();
});

exports.protectAccountOwner = catchAsync(async (req, res, next) => {
  const { user, sessionUser } = req;
  if (user.id !== sessionUser.id) {
    console.log(user.id, sessionUser.id);
    return next(
      new AppError("No tienes permiso para realizar esta acción", 403)
    );
  }
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.sessionUser.role)) {
      return next(
        new AppError("No tienes permiso para realizar esta acción", 403)
      );
    }
    next();
  };
};

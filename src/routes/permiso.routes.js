const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const permissionController = require("../controllers/permiso.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .post(
    validationMiddleware.createPermissionValidation,
    permissionController.createPermision
  )
  .get(permissionController.getPermisions);

router
  .route("/:id")
  .get(permissionController.getPermision)
  .patch(
    validationMiddleware.createPermissionValidation,
    permissionController.updatePermision
  )
  .delete(permissionController.deletePermision);

module.exports = router;

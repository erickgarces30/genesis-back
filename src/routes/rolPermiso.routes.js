const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const rolePermissionController = require("../controllers/rolPermiso.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .post(
    validationMiddleware.createRolePermissionValidation,
    rolePermissionController.createRolePermission
  )
  .get(rolePermissionController.getRolePermissions);

router
  .route("/:id")
  .get(rolePermissionController.getRolePermission)
  .patch(
    validationMiddleware.createRolePermissionValidation,
    rolePermissionController.updateRolePermission
  )
  .delete(rolePermissionController.deleteRolePermission);

module.exports = router;

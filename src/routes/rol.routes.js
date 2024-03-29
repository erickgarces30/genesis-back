const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const rolController = require("../controllers/rol.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .post(validationMiddleware.createRoleValidation, rolController.createRole)
  .get(rolController.getRoles);

router
  .route("/:id")
  .get(rolController.getRole)
  .patch(validationMiddleware.createRoleValidation, rolController.updateRole)
  .delete(rolController.deleteRole);

module.exports = router;

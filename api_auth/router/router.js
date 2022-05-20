const express = require("express")
const router = express.Router()
const authController = require("../controller/authController");


//Functions
const {authenticateEmployee,authenticateInhabitant,checkToken} = authController;
router.post("/login/inhabitant",authenticateInhabitant);
router.post("/login/employee",authenticateEmployee);
router.get("/login",checkToken);



module.exports = router;
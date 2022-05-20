const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employeesController");

const { getAll, getById, addNew, deleteById, update, getUserByCredentials } =
employeesController;

router.get("/employees", getAll);
router.get("/employees/:id", getById);
router.post("/employees", addNew);
router.post("/employees/credentials", getUserByCredentials);
router.delete("/employees/:id", deleteById);
router.put("/employees/:id", update); 

module.exports = router;

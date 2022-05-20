const express = require("express");
const router = express.Router();
const recordsController = require("../controllers/recordsController");

const { getAll, getById, addNew, deleteById, update, getUserByCredentials } = recordsController;

router.get("/records", getAll);
router.get("/records/:id", getById);
router.post("/records", addNew);
router.delete("/records/:id", deleteById);
router.put("/records/:id", update);

module.exports = router;

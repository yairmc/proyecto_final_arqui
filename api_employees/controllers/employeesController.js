const Employees = require("../models/Employees");

async function getAll(req, res) {
  try {
    const employees = await Employees.find({});
    res.status(200).json(employees);
  } catch (e) {}
}

async function getById(req, res) {
  try {
    const employees = await Employees.findOne({ _id: req.params.id });
    res.status(200).json(employees);
  } catch (e) {}
}

async function addNew(req, res) {
  try {
    const body = req.body;
    const employees = new Employees(body);
    const newEmployees = await employees.save();
    res.status(200).json(newEmployees);
  } catch (e) {}
}

async function deleteById(req, res) {
  try {
    await Employees.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "Employee deleted" });
  } catch (e) {}
}

async function update(req, res) {
  try {
    const body = req.body;
    const employee = await Employees.findOneAndUpdate(
      { _id: req.params.id },
      body,
      { new: true }
    );
    res.status(200).json(employee);
  } catch (e) {}
}

async function getUserByCredentials(req, res) {
  try {
    const { body } = req;
    const employee = await Employees.findOne({
      name: body.name,
      secretKey: body.secretKey,
    });

    res.status(200).json(employee);
  } catch (error) {}
}

module.exports = {
  getAll,
  getById,
  addNew,
  deleteById,
  getUserByCredentials,
  update,
};

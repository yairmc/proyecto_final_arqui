const Records = require("../models/Records");

async function getAll(req, res) {
  try {
    const records = await Records.find({});
    res.status(200).json(records);
  } catch (e) {}
}

async function getById(req, res) {
  try {
    const record = await Records.findOne({ _id: req.params.id });
    res.status(200).json(record);
  } catch (e) {}
}

async function addNew(req, res) {
  try {
    const body = req.body;
    const record = new Records(body);
    const newRecord = await record.save();
    res.status(200).json(newRecord);
  } catch (e) {}
}

async function deleteById(req, res) {
  try {
    await Records.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "Record deleted" });
  } catch (e) {}
}

async function update(req, res) {
  try {
    const body = req.body;
    const record = await Records.findOneAndUpdate(
      { _id: req.params.id },
      body,
      { new: true }
    );
    res.status(200).json(record);
  } catch (e) {}
}

module.exports = {
  getAll,
  getById,
  addNew,
  deleteById,
  update,
};

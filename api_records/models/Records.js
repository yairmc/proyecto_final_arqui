const mongoose = require("mongoose");

const Records = mongoose.Schema(
  {
    inhabitant: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Inhabitants"
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    employees: [{
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Employees"
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Records", Records);

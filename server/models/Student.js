const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  S_name: {
    type: String,
    required: true,
  },
  S_branch: {
    type: String,
    required: true,
  },
  is_Indian: {
    type: Boolean,
    required: true,
    default: false,
  },
  S_id: {
    type: Number,
    required: true,
  },
  S_Gender: {
    type: String,
    required: true,
  },
  S_cgpa: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("person", StudentSchema);

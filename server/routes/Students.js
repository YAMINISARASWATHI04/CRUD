const express = require("express");
const router = express.Router();
const person = require("../models/Student");

router.get("/", async (req, res) => {
  try {
    const students = await person.find();
    res.json(students);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await person.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const student = new person({
    S_name: req.body.S_name,
    S_branch: req.body.S_branch,
    is_Indian: req.body.is_Indian,
    S_id: req.body.S_id,
    S_Gender: req.body.S_Gender,
    S_cgpa: req.body.S_cgpa,
  });

  try {
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await person.findById(req.params.id);
    student.S_id = req.body.S_id;
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.deleteOne({ _id: req.params.id });
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;

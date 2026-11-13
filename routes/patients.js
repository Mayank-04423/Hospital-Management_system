const express = require('express');
const router = express.Router();
const storage = require('../lib/storage');


// FEATURE 2: PATIENT REGISTRATION

// @route   GET /api/patients
// @desc    Get all patients
router.get('/', (req, res) => {
  const data = storage.readData();
  res.json(data.patients);
});

// @route   POST /api/patients
// @desc    Register a new patient
router.post('/', (req, res) => {
  const data = storage.readData();

    if (!req.body.name || !req.body.age) {
    return res.status(400).json({ error: "Name and age are required" });
  }

  const newPatient = {
    id: Date.now(),
    name: req.body.name,
    age: req.body.age,
    contact: req.body.contact || "N/A"
  };

  data.patients.push(newPatient);
  storage.writeData(data);

  res.status(201).json(newPatient);
});

module.exports = router;
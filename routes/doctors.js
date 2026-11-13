const express = require('express');
const router = express.Router();
const storage = require('../lib/storage');

// FEATURE 1: DOCTOR MANAGEMENT 

// @route   GET /api/doctors
// @desc    Get all doctors
router.get('/', (req, res) => {
  const data = storage.readData();
  res.json(data.doctors);
});

// @route   POST /api/doctors
// @desc    Add a new doctor
router.post('/', (req, res) => {
  const data = storage.readData();
  const newDoctor = {
    id: Date.now(), // Simple unique ID
    name: req.body.name,
    specialty: req.body.specialty
  };
  
  data.doctors.push(newDoctor);
  storage.writeData(data);
  
  res.status(201).json(newDoctor);
});

// FEATURE 5: DOCTOR AVAILABILITY
// Retrieves doctor's availability schedule by ID

// @route GET /api/doctors/:id/availability
// @desc Get availability schedule for a doctor
router.get('/:id/availability', (req, res) => {
// TODO (Student 2): Implement logic to return schedule
// Example: res.json({ doctorId: req.params.id, schedule: "Mon-Fri 9AM-5PM" });
res.status(501).json({ message: "Not implemented yet by Student 2" });
});
module.exports = router;
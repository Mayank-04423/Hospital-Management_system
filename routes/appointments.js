const express = require('express');
const router = express.Router();
const storage = require('../lib/storage');

// FEATURE 3: APPOINTMENT BOOKING
router.post('/', (req, res) => {
  const data = storage.readData();
  const newAppointment = {
    id: Date.now(),
    patientName: req.body.patientName,
    doctorName: req.body.doctorName,
    date: req.body.date
  };
  
  if (!data.appointments) data.appointments = [];
  data.appointments.push(newAppointment);
  storage.writeData(data);
  
  res.status(201).json(newAppointment);
});

// FEATURE 4: APPOINTMENT LISTING
router.get('/', (req, res) => {
  const data = storage.readData();
  res.json(data.appointments || []);
});

// FEATURE 6: REPORTS
router.get('/reports', (req, res) => {
  const data = storage.readData();
  const total = (data.appointments || []).length;
  res.json({ totalAppointments: total, status: "Active" });
});

module.exports = router;
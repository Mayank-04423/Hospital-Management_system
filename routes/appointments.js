const express = require('express');
const router = express.Router();
const storage = require('../lib/storage');

// ==========================================
// FEATURE 3: APPOINTMENT BOOKING (Student 2)
// ==========================================

// @route POST /api/appointments
// @desc Book a new appointment
router.post('/', (req, res) => {
// TODO (Student 2): Implement booking logic
// Should take doctorId, patientId, and date/time
res.status(501).json({ message: "Booking feature not implemented yet" });
});

// ==========================================
// FEATURE 4: APPOINTMENT LISTING & FILTERS (Student 2)
// ==========================================

// @route GET /api/appointments
// @desc Get all appointments (with optional filters)
router.get('/', (req, res) => {
// TODO (Student 2): Implement logic to return appointments
// Optional: support ?doctorId=123 or ?date=2026-11-16
res.status(501).json({ message: "Listing feature not implemented yet" });
});

// ==========================================
// FEATURE 6: REPORTS (Student 2)
// ==========================================

// @route GET /api/appointments/reports
// @desc Get summary reports
router.get('/reports', (req, res) => {
// TODO (Student 2): Implement report logic (e.g., total appointments)
res.status(501).json({ message: "Reports feature not implemented yet" });
});

module.exports = router;
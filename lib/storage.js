const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'hospital.json');

// Helper to read the database
function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { doctors: [], patients: [], appointments: [] };
  }
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw);
}

// Helper to write to the database
function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}
function loadAppointments() {
  return readData().appointments || []; 
}
// Export helpers for routes to use
module.exports = {
  readData,
  writeData,
  
  // TODO: Add specific helpers here (e.g., getDoctors, saveDoctors)
 
};
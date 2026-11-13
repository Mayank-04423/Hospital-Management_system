const container = document.getElementById('app-container');

// Router function to switch views
function loadView(viewName) {
    container.innerHTML = '<p>Loading...</p>';
    
    if (viewName === 'doctors') {
        renderDoctorsView();
    } else if (viewName === 'patients') {
        renderPatientsView();
    } else if (viewName === 'appointments') {
        renderAppointmentsView();
    } else if (viewName === 'reports') {
        renderReportsView();
    }
}

// ==========================================
// STUDENT 1: DOCTORS UI
// ==========================================
async function renderDoctorsView() {
    const res = await fetch('/api/doctors');
    const doctors = await res.json();

    let html = `
        <h2>Manage Doctors</h2>
        <form id="doctorForm">
            <input type="text" id="docName" placeholder="Doctor Name" required>
            <input type="text" id="docSpecialty" placeholder="Specialty" required>
            <button type="submit">Add Doctor</button>
        </form>
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Specialty</th></tr></thead>
            <tbody>
    `;

    doctors.forEach(doc => {
        html += `<tr><td>${doc.id}</td><td>${doc.name}</td><td>${doc.specialty}</td></tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

    document.getElementById('doctorForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('docName').value;
        const specialty = document.getElementById('docSpecialty').value;

        await fetch('/api/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, specialty })
        });

        renderDoctorsView(); 
    });
}

// ==========================================
// STUDENT 1: PATIENTS UI
// ==========================================
async function renderPatientsView() {
    const res = await fetch('/api/patients');
    const patients = await res.json();

    let html = `
        <h2>Patient Registration</h2>
        <form id="patientForm">
            <input type="text" id="patName" placeholder="Patient Name" required>
            <input type="number" id="patAge" placeholder="Age" required>
            <input type="text" id="patContact" placeholder="Contact Number" required>
            <button type="submit">Register Patient</button>
        </form>
        <table>
            <thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Contact</th></tr></thead>
            <tbody>
    `;

    patients.forEach(pat => {
        html += `<tr><td>${pat.id}</td><td>${pat.name}</td><td>${pat.age}</td><td>${pat.contact}</td></tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

    document.getElementById('patientForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('patName').value;
        const age = document.getElementById('patAge').value;
        const contact = document.getElementById('patContact').value;

        await fetch('/api/patients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, age, contact })
        });

        renderPatientsView();
    });
}

// ==========================================
// STUDENT 2: APPOINTMENTS UI
// ==========================================
async function renderAppointmentsView() {
    const res = await fetch('/api/appointments');
    const appointments = await res.json();

    let html = `
        <h2>Book Appointment</h2>
        <form id="apptForm">
            <input type="text" id="apptPatient" placeholder="Patient Name" required>
            <input type="text" id="apptDoctor" placeholder="Doctor Name" required>
            <input type="date" id="apptDate" required>
            <button type="submit">Book</button>
        </form>
        <h2>All Appointments</h2>
        <table>
            <thead><tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Date</th></tr></thead>
            <tbody>
    `;

    appointments.forEach(appt => {
        html += `<tr><td>${appt.id}</td><td>${appt.patientName}</td><td>${appt.doctorName}</td><td>${appt.date}</td></tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;

    document.getElementById('apptForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const patientName = document.getElementById('apptPatient').value;
        const doctorName = document.getElementById('apptDoctor').value;
        const date = document.getElementById('apptDate').value;

        await fetch('/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ patientName, doctorName, date })
        });

        renderAppointmentsView();
    });
}

// ==========================================
// STUDENT 2: REPORTS UI
// ==========================================
async function renderReportsView() {
    const res = await fetch('/api/appointments/reports');
    const report = await res.json();

    let html = `
        <h2>Hospital Reports</h2>
        <div style="padding: 20px; background: #e8f8f5; border-radius: 8px;">
            <h3>Total Appointments Booked: ${report.totalAppointments}</h3>
            <p>System Status: ${report.status}</p>
        </div>
    `;
    container.innerHTML = html;
}
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
    // 1. Fetch doctors from API
    const res = await fetch('/api/doctors');
    const doctors = await res.json();

    // 2. Build HTML
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

    // 3. Handle form submission
    document.getElementById('doctorForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('docName').value;
        const specialty = document.getElementById('docSpecialty').value;

        await fetch('/api/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, specialty })
        });

        renderDoctorsView(); // Refresh view
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

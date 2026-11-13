# Hospital Appointment Management System

## Project Description
A full-stack web application developed as part of the MCA (SEC101) Advanced Tools and Applications assignment. This system allows hospital administrators to manage doctors, register patients, book appointments, and view summaries. It features a Node.js/Express backend with JSON file persistence and a vanilla JavaScript frontend.

## Objectives
- Develop a functional software project collaboratively using Git and GitHub.
- Demonstrate version control workflows including branching, pull requests, and merge conflict resolution.
- Build a complete application with at least five distinct functional features.

## Team Members & Contributions
| Name | Role | Core Contributions |
| :--- | :--- | :--- |
| **Mayank Tiwari** | Student 1 | Repository initialization, Express server setup, Doctor Management (CRUD & Search), Patient Registration, and frontend UI architecture. |
| **Aashwi Kumari** | Student 2 | Appointment Booking API & UI, Appointment Listing/Filters, Doctor Availability Schedule, Reports Generation, and documentation. |

## Features
1. **Doctor Management:** Add, view, and search doctors by specialty.
2. **Patient Registration:** Register new patients with age and contact info.
3. **Appointment Booking:** Schedule appointments linking patients to doctors.
4. **Appointment Listing:** View and filter all scheduled appointments.
5. **Doctor Availability:** Manage and view doctor schedules.
6. **Summary Reports:** Generate appointment statistics.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Database:** Local JSON file storage (`data/hospital.json`)

## Project Structure
```text
hospital-appointment-system/
├── server.js                  # Express entry point
├── routes/
│   ├── doctors.js             # Doctor APIs
│   ├── patients.js            # Patient APIs
│   └── appointments.js        # Appointment APIs
├── lib/
│   └── storage.js             # JSON read/write helpers (Merge conflict target)
├── public/
│   ├── index.html             # UI layout
│   ├── app.js                 # Frontend logic
│   └── style.css              # Styling
├── data/
│   └── hospital.json          # Local database
├── .gitignore
├── package.json
└── README.md
```
## Installation and Execution

Clone the repository:

bash
git clone https://github.com/Mayank-04423/Hospital-Management_system.git
Navigate to the project folder:

bash
cd Hospital-Management_system
Install dependencies:

bash
npm install
Start the server:

bash
npm start
Open your browser and navigate to http://localhost:3000.
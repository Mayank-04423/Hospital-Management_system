
---

### 2. `CONTRIBUTING.md`

```markdown
# Contributing Guidelines & Workflow

This project was developed collaboratively by two team members using Git and GitHub. The following outlines the individual contributions and the collaborative workflow used to build the application.

## Individual Contributions

### Mayank Tiwari (Student 1)
- **Features Implemented:** Doctor Management (CRUD & Search), Patient Registration.
- **Branch:** `feature-member1`
- **Commits:** Initialized project structure, implemented backend routes for doctors and patients, created the frontend UI skeleton, and updated project documentation.

### Aashwi Kumari (Student 2)
- **Features Implemented:** Appointment Booking, Listing/Filters, Doctor Availability, Reports.
- **Branch:** `feature-member2`
- **Commits:** Implemented backend routes for appointments and doctor availability, created the booking interface, and finalized the `CONTRIBUTING.md` and `README.md`.

## GitHub Workflow
1. **Branches:** Each member worked on isolated feature branches (`feature-member1` and `feature-member2`) to ensure the `main` branch remained stable.
2. **Pull Requests:** Each member opened a Pull Request to merge their feature branch into `main`.
3. **Code Reviews:** Both members reviewed each other's PRs, leaving comments and approving the code before merging.
4. **Merge Conflict Resolution:** A deliberate merge conflict was created in `lib/storage.js` to demonstrate the ability to resolve conflicts collaboratively. 

## Code Review Policy
- All code must be tested locally before pushing.
- PRs require at least one approval from the partner before merging.
- Commit messages must follow standard prefixes (e.g., `feat:`, `fix:`, `docs:`).
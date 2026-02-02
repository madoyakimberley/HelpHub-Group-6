# 🛠️ HelpHub: The Smart Logic Layer for On-Demand Labor

[![Presentation Slides](https://img.shields.io/badge/Project-Presentation_Slides-orange?style=flat-square&logo=google-slides)](https://docs.google.com/presentation/d/1zE9sDIYZegjt66YAjD8t33Ey2uG59xp5rkVuPjNtXjY/edit#slide=id.g3bc8d6023da_0_0)
[![Documentation](https://img.shields.io/badge/Project-Documentation-blue?style=flat-square&logo=google-docs)](https://docs.google.com/document/d/1VaWvFFEhi85lfmvX4Ba3apPwSVPDLFnMg1Yo2ako0kM/edit?tab=t.0)
[![React](https://img.shields.io/badge/Frontend-React.js-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo_Example-brightgreen?style=for-the-badge&logo=render)](https://helphub-group-6.onrender.com/)

**HelpHub** is a digital marketplace built to solve the fragmentation of the informal labor market in Kenya. By combining visual task validation with competitive bidding logic, it eliminates "ghosting" and price uncertainty, creating a transparent ecosystem for service matching.

---

## 👥 The Team
* **Ryan Ekiruu** 
* **Kimberley Madoya**
* **Ted Githaiga** 
* **Papa Sanau** 

---

## 🚀 Core Standout Features

### 📸 **Photo-Based Task Posting**
To prevent "scope creep," every task requires a visual reference. Providers view the image before bidding, creating a **visual contract** that ensures bids reflect the actual work required.

### 📉 **Lowest-Cost-First (LCF) Engine**
Bids are automatically sorted in real-time using custom React state logic. This encourages competitive pricing and ensures clients instantly see the most cost-effective options.

### 🧑‍💼 **Dual-Role Experience**
The UI dynamically reshapes based on the user's selected role:
* **Client:** Post tasks, review incoming bids, and award jobs.
* **Worker:** Discover local leads and place competitive bids.

---

## 🧠 Technical Highlights

### **Frontend Architecture**
* **Logic Layer:** Centralized state management via the `useJobs` custom hook (The "Brain").
* **Data Integrity:** Strict immutable state updates using `.map()`, `.filter()`, and spread operators.
* **Performance:** Integrated **Skeleton Loaders** to improve perceived performance during state transitions.

### **Navigation & Routing**
* **React Router DOM**: Clean separation between Marketplace, Job Details, and Worker Feed.
* **Conditional Rendering**: Logic-gate protected UI components based on `userType`.

---
🔄 Application Flow
Role Selection: User defines their journey (Client or Worker).

Task Posting: Client uploads task details + visual evidence.

Bidding: Workers compete; the LCF Engine sorts bids by lowest price instantly.

Handshake: Client awards the job, triggering a global status update to "Awarded."

---
⚙️ Installation & Setup
## Clone the Repository

    git clone [https://github.com/your-username/helphub.git](https://github.com/your-username/helphub.git)   
     cd helphub

## Install Dependencies
     npm install
## Launch Development Server
    npm run dev
The app runs locally at: http://localhost:5173

---
## 🗂️ Project Structure
```text
src/
├── components/         # Reusable functional components
│   └── ui/             # Primitive UI building blocks (Atomic Design)
├── hooks/              # useJobs.jsx - Centralized state logic
├── pages/              # High-level route views (Marketplace, Feed, etc.)
├── data/               # Structured JSON simulating backend behavior
└── assets/             # Visual assets and task image library 


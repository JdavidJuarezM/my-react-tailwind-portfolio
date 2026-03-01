<div align="center">

# 👨‍💻 David Juarez - Personal Portfolio

**A modern, responsive, and interactive personal portfolio website**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](#)

*A showcase of my projects, skills, and experience as a Software Engineer, featuring dynamic animations, a custom starry background, and seamless dark/light mode toggling.*

</div>

<br />

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🏗️ Architecture & Structure](#️-architecture--structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Execution](#installation--execution)
- [🛠️ Tech Stack](#️-tech-stack)

---

## ✨ Key Features

* **✔️ Dynamic Animations:** Smooth scrolling, section transitions, and interactive elements powered by Framer Motion.
* **✔️ Dark & Light Mode:** Fully integrated theme toggling for an optimized user experience in any lighting.
* **✔️ Interactive UI Elements:** Features a custom animated `<StarBackground />` and responsive toast notifications for the contact form.
* **✔️ Responsive Design:** Mobile-first approach utilizing Tailwind CSS to ensure the portfolio looks perfect on all device sizes.
* **✔️ Modular Sections:** Clean separation of concerns with dedicated components for Hero, About, Skills, Projects, and Contact sections.

---

## 🏗️ Architecture & Structure

The project follows a standard React + Vite scalable directory structure:

```text
my-react-tailwind-portfolio/
├── public/                    # Static assets, images, and downloadable CVs
├── src/
│   ├── components/            # Reusable UI sections (Hero, About, Projects, etc.)
│   │   └── ui/                # Base UI components (like Toaster/Toast)
│   ├── hooks/                 # Custom React hooks (e.g., use-toast)
│   ├── lib/                   # Utility functions
│   ├── pages/                 # Main application views (Home, NotFound)
│   ├── App.jsx                # Main application layout and routing
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # React DOM entry point
├── tailwind.config.js         # Tailwind CSS styling configurations
├── vite.config.js             # Vite bundler configuration
└── package.json               # Node.js dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

* **Node.js:** v18 or higher
* **npm:** Node Package Manager (comes with Node.js)

### Installation & Execution

1. Clone this repository to your local machine:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd my-react-tailwind-portfolio
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

---

## 🛠️ Tech Stack

**Core:**
* [React](https://react.dev/) - UI Library
* [Vite](https://vitejs.dev/) - Frontend Tooling & Bundler

**Styling & UI:**
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
* [Framer Motion](https://www.framer.com/motion/) - Animation library for React
* [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
* [Shadcn/UI](https://ui.shadcn.com/) *(adapted)* - For accessible and customizable toast notifications.

<br />

<div align="center">
  <i>Designed and developed by David Juarez.</i>
</div>

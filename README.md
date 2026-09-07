# Thoran's React Portfolio

Welcome to my portfolio! This is a modern, responsive, and animated React application built to showcase my projects, skills, and experience as a Machine Learning Engineer and Python Developer.

## Features
- **Clean Architecture:** Built using standard React functional components.
- **Data Driven:** All content is separated into `src/data/` for easy updates.
- **Animations:** Uses Framer Motion for scroll reveals, hover effects, and 3D interactions.
- **Dark/Light Mode:** Seamless theme toggling.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens using Tailwind CSS.

## Tech Stack
- **React.js** (Standard JSX)
- **Vite** (Fast build tool)
- **Tailwind CSS v4** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)

## Folder Structure
```text
src/
├── animations/
│   └── motionVariants.js    # Reusable framer-motion variants
├── assets/                  # Images and static assets (e.g., portrait.jpg)
├── components/              # Individual React components (Hero, About, Projects, etc.)
├── data/                    # Hardcoded data files for easy maintenance
│   ├── personalInfo.js
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   ├── education.js
│   └── certifications.js
├── styles.css               # Global styles and Tailwind imports
├── App.jsx                  # Main application component merging all sections
└── main.jsx                 # React DOM entry point
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Update Content

- **Update Projects:** Open `src/data/projects.js` and edit the array to add or modify projects.
- **Update Skills:** Open `src/data/skills.js` to add new technical or soft skills.
- **Replace Profile Photo:** Replace `src/assets/portrait.jpg` with your own image, or update the path in `src/components/Hero.jsx`.
- **Update Resume:** Replace `public/Sangeeth_CV.pdf` with your updated resume, or update the link in `src/components/Navbar.jsx` and `src/components/Extras.jsx`.

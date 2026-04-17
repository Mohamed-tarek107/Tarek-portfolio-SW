/* ============================================================
   PORTFOLIO — main.js
   Mohamed Tarek

   This file does three things:
   1. Holds all portfolio data (projects, skills, experience)
   2. Renders that data into the HTML
   3. Handles the one small interaction: navbar border on scroll

   WHY JS INSTEAD OF HARD-CODING HTML?
   ─────────────────────────────────────
   When you want to update a project or add a skill, you only
   touch the data objects at the top. The HTML never needs
   to change. This is the same pattern used in React / Vue —
   separate data from presentation.
============================================================ */


/* ============================================================
   SECTION 1 — DATA
   Edit this section to update your portfolio content.
   Each object maps directly to one card/item on the page.
============================================================ */

const PROJECTS = [
    {
        title: "CampusHub",
        badge: "Live",                         // shown as a small label on the card
        desc: "A full-stack LMS for BIS and FMI students at Helwan University. Handles course enrollment, task tracking, GPA calculation, announcements, and events. Two separate panels — one for students, one for admins.",
        highlights: [                          // backend-focused bullet points
            "JWT auth with httpOnly cookies and refresh token rotation",
            "15+ REST endpoints across auth, courses, tasks, announcements",
            "AI-generated HTML emails via Gemini API + Nodemailer",
            "Normalized PostgreSQL schema with 10 tables",
            "Deployed: Railway (backend) · Netlify (frontend) · Neon (DB)"
        ],
        stack: ["Node.js", "Express", "Angular", "PostgreSQL", "JWT", "Gemini AI", "Docker"],
        github: "https://github.com/Mohamed-tarek107/Campus-Hub",
        demo: "https://campus-hub-bis.netlify.app"
    },
    {
        title: "Focusly",
        badge: "GitHub",
        desc: "An AI-powered productivity app combining task management, a calendar view, real-time analytics dashboards, and a conversational AI assistant. Built end-to-end with a full security stack.",
        highlights: [
            "JWT access/refresh token rotation with httpOnly cookies",
            "Rate limiting, CORS, parameterized SQL — no shortcuts",
            "Gemini AI assistant handles natural-language task commands",
            "Transactional email flows for verification and password reset",
            "Containerized with Docker Compose"
        ],
        stack: ["Node.js", "Express", "Angular", "MySQL", "Docker", "Gemini AI", "Chart.js"],
        github: "https://github.com/Mohamed-tarek107/AI-Powered-ProductivityApp",
        demo: null
    },
    {
        title: "Movie App",
        badge: "ITI MEAN Project",
        desc: "Team-based movie web application built with the MEAN stack. Allows users to search and browse movies, manage a personalized watchlist, and view detailed movie information with smooth pagination, all powered by live TMDB API integration.",
        highlights: [
            "Led a team of 4 colleagues to design and deliver a full-featured movie app within training timeline",
            "Dynamic search and server-side pagination for efficient movie browsing and large dataset navigation",
            "Watchlist management with add/remove functionality stored in MongoDB",
            "Live movie data integration via TMDB API with responsive Angular-based UI",
            "Coordinated task distribution, backend architecture, and frontend integration as team lead"
        ],
        stack: ["Angular", "Node.js", "Express.js", "MongoDB", "TMDB API"],
        github: "https://github.com/Mohamed-tarek107/ITI-MEAN-Project",
        demo: null
    },
    {
    "title": "Inventory Management System",
    "badge": "CS50 Capstone",
    "desc": "A simple and secure web application for managing inventory, tracking sales, and monitoring revenue — built with Flask, SQLite3, and Bootstrap, with dynamic charts powered by Chart.js.",
    "highlights": [
        "User registration and login with session-based authentication and secure password hashing",
        "Dashboard with real-time stock levels and revenue line charts using Chart.js",
        "Add new inventory items with name, price, and stock quantity",
        "Record and manage sales/orders with automatic stock updates",
        "View stock levels and revenue trends over time",
        "Clean and responsive UI with Bootstrap, protected against unauthorized access"
    ],
    "stack": ["Python", "Flask", "SQLite", "CS50 SQL", "Bootstrap", "Chart.js"],
    "github": "https://github.com/Mohamed-tarek107/Inventory-Managment-System",
    "demo": null
    }
];


const SKILLS = [
    {
        label: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT / Auth", "RBAC", "Rate Limiting", "Python", "Flask"]
    },
    {
        label: "Frontend",
        items: ["Angular", "TypeScript", "RxJS", "TailwindCSS", "Bootstrap", "Chart.js", "HTML5", "CSS3"]
    },
    {
        label: "Databases",
        items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Query Optimization", "Schema Design"]
    },
    {
        label: "DevOps & Tools",
        items: ["Docker", "Git", "GitHub", "Railway", "Netlify", "Neon", "Postman", "Linux / WSL"]
    },
    {
        label: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "C / C++"]
    }
];


const EXPERIENCE = [
    {
        date: "2024",
        role: "CS50x: Introduction to Computer Science",
        org: "Harvard University",
        desc: "Completed Harvard's rigorous CS50x course covering computer science fundamentals. Built an Inventory Management System as final capstone. Topics include data structures, algorithms, memory management, and web development."
    },
    {
        date: "Mar – Jul 2025",
        role: "McKinsey Forward Program",
        org: "McKinsey.org",
        desc: "Completed an online program focused on structured problem-solving, communication frameworks, and digital skills. Includes the McKinsey problem-solving approach and business case analysis."
    },
    {
        date: "Aug – Sep 2025",
        role: "MEAN Stack Summer Training",
        org: "Information Technology Institute (ITI)",
        desc: "Full-stack training covering database modeling, REST API design, and Angular integration. Team project: built a movie app with TMDB integration, search, pagination, and watchlist features. Led backend architecture."
    },
    {
        date: "Nov 2024 – Mar 2025",
        role: "Technical Member",
        org: "TechSolve — SCCI Student Activity",
        desc: "Ran technical sessions on software, hardware, and robotics for fellow students. Worked in teams on problem-solving challenges."
    }
];


/* ============================================================
   SECTION 2 — RENDERERS
   Each function takes a data object and returns an HTML string.
   We then inject that string into the DOM with innerHTML.

   LEARNING NOTE:
   Template literals (backtick strings) let you write multi-line
   HTML with embedded JS variables using ${ }.
   This pattern is essentially what JSX does in React.
============================================================ */

/**
 * Renders one project card.
 * @param {Object} project - one item from PROJECTS array
 * @returns {string} HTML string
 */
function renderProjectCard(project) {
    // Build the tech stack badges
    const stackHTML = project.stack
        .map(tech => `<span class="stack-tag">${tech}</span>`)
        .join("");

    // Build the highlights list (only show if array has items)
    const highlightsHTML = project.highlights
        .map(h => `<li>${h}</li>`)
        .join("");

    // Build the links row — demo link only shown if it exists
    const demoLink = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener" class="project-link project-link--primary">
         ↗ Live demo
       </a>`
        : "";

    return `
    <article class="project-card">
      <div class="project-card__header">
        <h3 class="project-card__title">${project.title}</h3>
        <span class="project-card__badge">${project.badge}</span>
      </div>

      <p class="project-card__desc">${project.desc}</p>

      <ul class="project-card__highlights">
        ${highlightsHTML}
      </ul>

      <div class="project-card__stack">
        ${stackHTML}
      </div>

      <div class="project-card__links">
        <a href="${project.github}" target="_blank" rel="noopener" class="project-link">
          ↗ GitHub
        </a>
        ${demoLink}
      </div>
    </article>
  `;
}

/**
 * Renders one skill group (label + pills).
 * @param {Object} group - one item from SKILLS array
 * @returns {string} HTML string
 */
function renderSkillGroup(group) {
    const pillsHTML = group.items
        .map(skill => `<span class="skill-pill">${skill}</span>`)
        .join("");

    return `
    <div class="skill-group">
      <p class="skill-group__label">${group.label}</p>
      <div class="skill-group__items">
        ${pillsHTML}
      </div>
    </div>
  `;
}

/**
 * Renders one experience item.
 * @param {Object} item - one item from EXPERIENCE array
 * @returns {string} HTML string
 */
function renderExpItem(item) {
    return `
    <div class="exp-item">
      <span class="exp-item__date">${item.date}</span>
      <div>
        <p class="exp-item__role">${item.role}</p>
        <p class="exp-item__org">${item.org}</p>
        <p class="exp-item__desc">${item.desc}</p>
      </div>
    </div>
  `;
}





function init() {

    // ── Projects ──────────────────────────────────────────────
    const projectsGrid = document.getElementById("projects-grid");
    if (projectsGrid) {
        projectsGrid.innerHTML = PROJECTS.map(renderProjectCard).join("");
    }

    // ── Skills ────────────────────────────────────────────────
    const skillsGrid = document.getElementById("skills-grid");
    if (skillsGrid) {
        skillsGrid.innerHTML = SKILLS.map(renderSkillGroup).join("");
    }

    // ── Experience ────────────────────────────────────────────
    const expList = document.getElementById("experience-list");
    if (expList) {
        expList.innerHTML = EXPERIENCE.map(renderExpItem).join("");
    }

    // ── Navbar border on scroll ───────────────────────────────
    // Adds class "scrolled" once the user scrolls past 10px.
    // CSS uses .navbar.scrolled to show the border.
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }, { passive: true });   // passive:true = browser performance hint

}

// Run init once the HTML is fully parsed
document.addEventListener("DOMContentLoaded", init);
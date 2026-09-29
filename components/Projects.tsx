
import {
  SiReact,
  SiPhp,
  SiMysql,
  SiKotlin,
  SiAndroidstudio,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

// =====================================
// Projects Data
// =====================================

const projects = [

  // PROJECT 01 - PERSONAL EXPENSE TRACKER

  {
    title: "Personal Expense Tracker",

    subtitle: "Full-Stack Personal Project",

    description:
      "A personal expense tracking web application developed using Next.js, Prisma, and PostgreSQL.",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],

    github:
      "https://github.com/Malsha247/personal-expense-tracker",

    demo:
      "https://personal-expense-tracker-psi-ten.vercel.app",
  },

  // PROJECT 02 - WASANTHA ECO HUSK

  {
    title: "Wasantha Eco Husk Solutions",

    subtitle: "Final Year Project",

    description:
      "An online coconut husk product management and ordering system.",

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],

    github: "#",
    demo: "#",
  },

  // PROJECT 03 - STUDENT MANAGEMENT SYSTEM

  {
    title: "Student Management System",

    subtitle: "Final Year Project - ESoft Metro Campus",

    description:
      "A project for managing student information and academic records.",

    technologies: [
      {
        name: "C#",
        icon: FaCode,
      },
      {
        name: "Visual Studio",
        icon: DiVisualstudio,
      },
      {
        name: "SQL Server",
        icon: SiMysql,
      },
    ],

    github: "#",
    demo: "#",
  },

  // PROJECT 04 - WORD GUESSING MOBILE APPLICATION

  {
    title: "Word Guessing Mobile Application",

    subtitle: "Second Year Mini Project - UOM BIT",

    description:
      "A simple word guessing game application developed for Android devices.",

    technologies: [
      {
        name: "Kotlin",
        icon: SiKotlin,
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
      },
    ],

    github: "#",
    demo: "#",
  },

  // PROJECT 05 - ONLINE SHOPPING SYSTEM

  {
    title: "Web-Based Online Shopping System",

    subtitle: "Second Year Group Project - UOM BIT",

    description:
      "A web-based online shopping system for managing products, orders, and customers.",

    technologies: [
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "PHP",
        icon: SiPhp,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
    ],

    github: "#",
    demo: "#",
  },
];

// =====================================
// Projects Component
// =====================================

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      {/* Section Heading */}

      <div className="projects-header">

        <span className="projects-small-title">
          MY WORK
        </span>

        <h2>Featured Projects</h2>

        <p>
          Some of the academic and personal projects I have
          developed using different technologies.
        </p>

      </div>

      {/* Project Grid */}

      <div className="projects-container">

        {projects.map((project, index) => {

          return (
            <article
              className="portfolio-project-card"
              key={project.title}
            >

              {/* Card Top */}

              <div className="project-card-top">

                <span className="project-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FaCode className="project-main-icon" />

              </div>

              {/* Project Info */}

              <div className="project-info">

                <h3>{project.title}</h3>

                <p className="project-subtitle">
                  {project.subtitle}
                </p>

                <p className="project-description">
                  {project.description}
                </p>

              </div>

              {/* Technologies */}

              <div className="technologies-section">

                <p className="technologies-label">
                  Technologies
                </p>

                <div className="technologies-container">

                  {project.technologies.map((technology) => {

                    const Icon = technology.icon;

                    return (
                      <div
                        className="technology-badge"
                        key={technology.name}
                      >

                        <Icon className="technology-icon" />

                        <span>{technology.name}</span>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* GitHub and Live Demo Buttons */}

              {(project.github !== "#" ||
                project.demo !== "#") && (

                <div className="project-buttons">

                  {/* GitHub */}

                  {project.github !== "#" && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-button"
                    >

                      <FaGithub />

                      <span>GitHub</span>

                    </a>

                  )}

                  {/* Live Demo */}

                  {project.demo !== "#" && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-demo-button"
                    >

                      <span>Live Demo</span>

                      <FaExternalLinkAlt />

                    </a>

                  )}

                </div>

              )}

            </article>
          );
        })}

      </div>

    </section>
  );
}

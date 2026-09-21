import {
  SiReact,
  SiPhp,
  SiMysql,
  SiKotlin,
  SiAndroidstudio,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Section Heading */}

      <div className="projects-header">
        <span className="projects-small-title">MY WORK</span>

        <h2>Featured Projects</h2>

        <p>
          Some of the academic and personal projects I have developed using
          different technologies.
        </p>
      </div>

      {/* Project Grid */}

      <div className="projects-container">
        {projects.map((project, index) => {
          return (
            <article className="portfolio-project-card" key={project.title}>
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

                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-description">{project.description}</p>
              </div>

              {/* Technologies */}

              <div className="technologies-section">
                <p className="technologies-label">Technologies</p>

                <div className="technologies-container">
                  {project.technologies.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <div className="technology-badge" key={technology.name}>
                        <Icon className="technology-icon" />

                        <span>{technology.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

             
              
            </article>
          );
        })}
      </div>
    </section>
  );
}

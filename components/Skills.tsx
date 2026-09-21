import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiPhp,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { FaJava, FaCode, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Technologies I use for building modern user interfaces.",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },

  {
    title: "Backend & Database",
    description: "Backend technologies and databases I have worked with.",
    skills: [
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
    ],
  },

  {
    title: "Programming Languages",
    description: "Programming languages I have experience working with.",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "C#", icon: FaCode },
    ],
  },

  {
    title: "QA & Development Tools",
    description: "Tools I use for testing, version control and development.",
    skills: [
      { name: "Playwright", icon: FaTools },
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-small-title">MY SKILLS</span>

        <h2>Technologies & Tools</h2>

        <p>
          Technologies, programming languages and tools I use for development
          and software quality assurance.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-category-card" key={group.title}>
            <div className="skill-category-header">
              <h3>{group.title}</h3>

              <p>{group.description}</p>
            </div>

            <div className="skills-list">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-icon-wrapper">
                      <Icon className="skill-icon" />
                    </div>

                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

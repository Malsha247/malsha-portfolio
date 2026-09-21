const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Playwright",
  "Postman",
  "Git",
  "GitHub",
  "Prisma",
  "SQL",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
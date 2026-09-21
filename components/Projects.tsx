const projects = [
  {
    title: "Wasantha Eco Husk Solutions",
    description:
      "An online coconut husk product management and ordering system.",
    technologies: "Next.js, Prisma, Database",
  },

  {
    title: "Highway Project Monitoring Dashboard",
    description:
      "A project monitoring system with role-based access and progress tracking.",
    technologies: "Next.js, Prisma, Playwright",
  },

  {
    title: "Task Management System",
    description:
      "A simple application for creating and managing tasks.",
    technologies: "Next.js, Prisma",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6"
          >
            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-3">
              {project.description}
            </p>

            <p className="mt-4 text-sm">
              {project.technologies}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
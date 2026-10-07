import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

const education = [
  {
    qualification: "Bachelor of Information Technology (BIT)",
    institute: "University of Moratuwa",
    period: "Final Year",
    description:
      "Currently completing the Bachelor of Information Technology degree programme with a focus on software development, web technologies, databases, and software engineering.",
  },

  {
    qualification: "Add Your Qualification Here",
    institute: "ESoft Metro Campus",
    period: "Add Year / Period",
    description:
      "Add a short description about your qualification, subjects, or academic experience here.",
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">

      {/* Heading */}

      <div className="education-header">
        <span>MY EDUCATION</span>

        <h2>Education & Qualifications</h2>

        <p>
          My academic background and qualifications in information
          technology and software development.
        </p>
      </div>


      {/* Education Cards */}

      <div className="education-container">

        {education.map((item, index) => (
          <article
            className="education-card"
            key={`${item.institute}-${item.qualification}`}
          >

            {/* Left Number */}

            <div className="education-number">
              {String(index + 1).padStart(2, "0")}
            </div>


            {/* Icon */}

            <div className="education-icon">
              <FaGraduationCap />
            </div>


            {/* Content */}

            <div className="education-content">

              <h3>{item.qualification}</h3>

              <div className="education-meta">

                <span>
                  <FaUniversity />
                  {item.institute}
                </span>

                <span>
                  <FaCalendarAlt />
                  {item.period}
                </span>

              </div>

              <p>
                {item.description}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
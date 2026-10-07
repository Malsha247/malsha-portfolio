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
    qualification: "Diploma in IT & English",
    institute: "ESoft Metro Campus",
    period: "2020 - 2021",
    description:
      "Completed a diploma in Information Technology and English, gaining foundational knowledge in both technical and communication skills.",
  },
  {
    qualification: "Diploma in Human Resource Management",
    institute: "IMBS Campus",
    period: "Present - 2026",
    description:
      "Completed a diploma in Human Resource Management, gaining foundational knowledge in personnel management, labor relations, and organizational behavior.",
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
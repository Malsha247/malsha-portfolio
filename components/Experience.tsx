import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUniversity,
} from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="education-header">
        <span>MY EXPERIENCE</span>
        <h2>Work Experience</h2>
        <p>My practical experience in technical drafting and engineering.</p>
      </div>

      <div className="education-container">
        <article className="education-card experience-card">
          <div className="education-icon" aria-hidden="true">
            <FaBriefcase />
          </div>

          <div className="education-content">
            <h3>Draughtsman Intern</h3>

            <div className="education-meta">
              <span>
                <FaUniversity />
                Irrigation Department
              </span>
              <span>
                <FaMapMarkerAlt />
                Monaragala
              </span>
              <span>
                <FaCalendarAlt />
                Jan 2021 - Jan 2022
              </span>
            </div>

            <p>Completed a one-year internship as a Draughtsman.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

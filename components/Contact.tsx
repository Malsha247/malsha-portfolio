import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <span>GET IN TOUCH</span>

          <h2>Contact Me</h2>

          <p>
            Iam open to software development, QA, internship, and
            collaboration opportunities. Feel free to connect with me.
          </p>
        </div>

        <div className="contact-card">

          <div className="contact-card-left">
            <span className="contact-small-text">
              LET&apos;S WORK TOGETHER
            </span>

            <h3>
              Have a project or opportunity in mind?
            </h3>

            <p>
              You can reach me through email, LinkedIn, or GitHub.
              I&apos;ll be happy to connect and discuss your idea.
            </p>

            <a
              href="mailto:malsha.prebhasara2001@gmail.com"
              className="contact-main-button"
            >
              <FaPaperPlane />

              Send me an Email
            </a>
          </div>

          <div className="contact-links">

            <a
              href="mailto:malsha.prebhasara2001@gmail.com"
              className="contact-link-card"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <p>malsha.prebhasara2001@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/Malsha Prabhasara"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>

              <div>
                <span>LinkedIn</span>
                <p>Connect with me</p>
              </div>
            </a>

            <a
              href="https://github.com/Malsha247"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
            >
              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>
                <p>View my repositories</p>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
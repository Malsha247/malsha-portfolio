import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Malsha Prabhasara
            </a>

            <p>
              Software Developer & QA Engineer focused on building
              reliable and modern applications.
            </p>
          </div>


          {/* Navigation */}

          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>


          {/* Social */}

          <div className="footer-social-section">
            <h3>Connect</h3>

            <div className="footer-socials">

              <a
                href="https://github.com/Malsha247"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/Malsha Prabhasara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:malsha.prabhasara2001@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            © {currentYear} Malsha. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
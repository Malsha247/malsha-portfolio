import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-visual" aria-label="About Malsha">
        <div className="about-orbit-ring" aria-hidden="true" />
        <div className="about-profile">
          <Image
            src="/about.png"
            alt="Malsha Prabhasara"
            width={360}
            height={450}
          />
        </div>
        <div className="about-stat about-stat-projects">
          <strong>05+</strong>
          <span>Projects built</span>
        </div>
        <div className="about-stat about-stat-focus">
          <strong>02</strong>
          <span>Core focus areas</span>
        </div>
        <div className="about-stat about-stat-tech">
          <strong>10+</strong>
          <span>Tools & technologies</span>
        </div>
      </div>

      <div className="about-content">
        <span className="section-eyebrow">Let me introduce myself</span>
        <h2>About <span>Me</span></h2>
        <p>
          I&apos;m Malsha Prabhasara, a Bachelor of Information Technology student
          at the University of Moratuwa. I enjoy turning ideas into useful,
          clear, and easy-to-use digital products.
        </p>
        <p>
          My interests include web development, frontend design, backend
          systems, and software quality assurance. I like learning new tools,
          solving problems, and checking that applications work as expected.
        </p>

        <div className="about-contact-line">
          <strong>Contact</strong>
          <a href="mailto:malsha.prebhasara2001@gmail.com">
            malsha.prebhasara2001@gmail.com
          </a>
        </div>

        <div className="about-actions">
          <a href="#contact">More about me <FaArrowRight aria-hidden="true" /></a>
          <a href="/cv.pdf" download>Download CV <FaDownload aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Ambient animated background */}
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
      </div>

      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            <span>Hello, I&apos;m</span>
          </div>

          <h1>Malsha</h1>

          <h2>
            <span>Software Engineer</span>

            <span className="hero-role-separator">|</span>

            <span className="hero-role-accent">
              QA Engineer
            </span>
          </h2>

          <p className="hero-description">
            I build modern web applications and enjoy software
            quality assurance, automation testing, frontend
            development, and creating reliable user experiences.
          </p>


          <div className="hero-buttons">
            <a href="#projects">
              View Projects
              <span aria-hidden="true">→</span>
            </a>

            <a href="/CV.pdf" download>
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <div
            className="hero-orbit-ring hero-orbit-ring-one"
            aria-hidden="true"
          />

          <div
            className="hero-orbit-ring hero-orbit-ring-two"
            aria-hidden="true"
          />



          <div className="hero-image">
            <Image
              src="/profile.png"
              alt="Malsha Prabhasara - Software Engineer and QA Engineer"
              width={350}
              height={350}
              priority
            />
          </div>

          <div className="hero-availability">
            <span className="hero-availability-dot" />

            <span>Open to opportunities</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span>Scroll</span>

        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

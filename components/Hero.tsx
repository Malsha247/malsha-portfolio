import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient" aria-hidden="true">
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
        <span className="hero-particle" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            <span>Hello, I&apos;m Malsha</span>
          </div>

          <h1>
            Software <span className="hero-role-accent">Engineer.</span>
          </h1>

          <h2>
            <span>QA Engineer</span>
            <span className="hero-role-separator">·</span>
            <span>Web Developer</span>
          </h2>

          <p className="hero-description">
            I&apos;m Malsha Prabhasara, a BIT student who builds modern web
            applications and tests software to create reliable, user-friendly
            digital experiences.
          </p>

          <div className="hero-tech-strip" aria-label="Main skills">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Selenium</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects">
              View Projects <span aria-hidden="true">→</span>
            </a>
            <a href="/Malsha%20Resume.pdf" download="Malsha-Resume.pdf">
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-orbit-ring hero-orbit-ring-one"
            aria-hidden="true"
          />
          <div
            className="hero-orbit-ring hero-orbit-ring-two"
            aria-hidden="true"
          />

          <div className="hero-floating-chip hero-chip-one">Next.js</div>
          <div className="hero-floating-chip hero-chip-two">Playwright</div>
          <div className="hero-floating-chip hero-chip-three">QA + Dev</div>

          <div className="hero-image">
            <Image
              src="/profile (2).png"
              alt="Malsha Prabhasara"
              width={500}
              height={620}
              priority
              sizes="(max-width: 768px) 80vw, 380px"
              className="hero-profile-image"
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

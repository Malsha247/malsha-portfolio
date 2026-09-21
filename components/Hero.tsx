import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p>Hello, I am</p>

          <h1>Malsha</h1>

          <h2>Software Engineer | QA Engineer</h2>

          <p>
            I build modern web applications and enjoy software quality
            assurance, automation testing, and frontend development.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>
            <a href="/CV.pdf">Download CV</a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/profile.png"
            alt="Malsha Profile"
            width={350}
            height={350}
            priority
          />
        </div>
      </div>
    </section>
  );
}
export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <a href="#home" className="navbar-logo">
          Malsha Prabhasara
        </a>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="navbar-contact">
          Let s Talk
        </a>
      </nav>
    </header>
  );
}
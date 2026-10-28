"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          Malsha<span> </span>Prabhasara
        </a>

        {/* Desktop / Mobile Links */}
        <div
          className={`navbar-links ${
            menuOpen ? "navbar-links-open" : ""
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          {/* Mobile Contact Button */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="navbar-mobile-contact"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="navbar-contact"
        >
          Let&apos;s Talk
        </a>

        <ThemeToggle />

        {/* Hamburger Button */}
        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? "navbar-menu-active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>
    </header>
  );
}
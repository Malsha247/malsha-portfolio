"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;

    // Prevent scrolling while loader is visible
    document.body.style.overflow = "hidden";

    // Make sure animation class is not already there
    document.body.classList.remove("portfolio-ready");

    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    const closeTimer = window.setTimeout(() => {
      setLoading(false);

      // Restore scroll
      document.body.style.overflow = oldOverflow;

      // Start Hero / Home animation
      requestAnimationFrame(() => {
        document.body.classList.add("portfolio-ready");
      });
    }, 3100);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(closeTimer);

      document.body.style.overflow = oldOverflow;

      // Cleanup class
      document.body.classList.remove("portfolio-ready");
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`portfolio-loader ${
        fadeOut ? "portfolio-loader-hide" : ""
      }`}
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      {/* Background Glow */}
      <div className="loader-bg-glow loader-bg-one" />
      <div className="loader-bg-glow loader-bg-two" />

      <div className="portfolio-loader-content">

        {/* Main Circular Animation */}
        <div className="loader-animation">
          <div className="loader-ring ring-one" />
          <div className="loader-ring ring-two" />

          {/* Orbiting Dots */}
          <div className="loader-orbit">
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
          </div>

          {/* Center Logo */}
          <div
            className="loader-center"
            aria-hidden="true"
          >
            <span>&lt;</span>

            <strong>M</strong>

            <span>/&gt;</span>
          </div>
        </div>

        {/* Name */}
        <h2>
          Malsha Prabhasara
        </h2>

        {/* Role */}
        <p className="loader-role">
          Software Developer

          <span>•</span>

          QA Engineer
        </p>

        {/* Loading Status */}
        <div className="loader-status">
          <span className="loader-status-dot" />

          <span>
            Initializing Portfolio
          </span>

          <span
            className="loader-text-dots"
            aria-hidden="true"
          >
            <i>.</i>
            <i>.</i>
            <i>.</i>
          </span>
        </div>

        {/* Progress Line */}
        <div
          className="loader-line"
          aria-hidden="true"
        >
          <div className="loader-line-progress" />
        </div>

      </div>
    </div>
  );
}
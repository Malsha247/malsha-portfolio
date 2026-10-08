"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    const closeTimer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = oldOverflow;
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);

      document.body.style.overflow = oldOverflow;
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`portfolio-loader ${
        fadeOut ? "portfolio-loader-hide" : ""
      }`}
    >
      <div className="loader-bg-glow loader-bg-one" />
      <div className="loader-bg-glow loader-bg-two" />

      <div className="portfolio-loader-content">

        <div className="loader-animation">
          <div className="loader-ring ring-one" />
          <div className="loader-ring ring-two" />

          <div className="loader-orbit">
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
          </div>

          <div className="loader-center">
            <span>&lt;</span>
            <strong>M</strong>
            <span>/&gt;</span>
          </div>
        </div>

        <h2>Malsha Prabhasara</h2>

        <p className="loader-role">
          Software Developer
          <span>•</span>
          QA Engineer
        </p>

        <div className="loader-status">
          <span className="loader-status-dot" />

          <span>Initializing Portfolio</span>

          <span className="loader-text-dots">
            <i>.</i>
            <i>.</i>
            <i>.</i>
          </span>
        </div>

        <div className="loader-line">
          <div className="loader-line-progress" />
        </div>

      </div>
    </div>
  );
}
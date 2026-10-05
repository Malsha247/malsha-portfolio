"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    // Keep the intro visible for a little longer.
    const fadeTimer = window.setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Remove it after the fade-out animation finishes.
    const closeTimer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = previousOverflow;
    }, 3550);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(closeTimer);

      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div
      className={`intro-loader ${
        fadeOut ? "intro-loader-hide" : ""
      }`}
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="intro-loader-glow intro-glow-one" />
      <div className="intro-loader-glow intro-glow-two" />

      <div className="intro-loader-content">
        <div className="intro-code-icon" aria-hidden="true">
          <span>&lt;</span>
          <strong>M</strong>
          <span>/&gt;</span>
        </div>

        <h1>Malsha</h1>

        <p className="intro-role">
          Software Developer
          <span>•</span>
          QA Engineer
        </p>

        <div className="intro-progress" aria-hidden="true">
          <div className="intro-progress-bar" />
        </div>

        <p className="intro-loading-text">
          Loading Portfolio
          <span className="intro-dots" aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
}

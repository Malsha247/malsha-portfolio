import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Education from "@/components/Education";
import { siteUrl } from "./siteConfig";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Malsha Prabhasara",
      url: siteUrl,
      jobTitle: "Software Developer and QA Engineer",
      description:
        "A software developer and QA engineer building modern web applications and testing reliable digital experiences.",
      image: new URL("/profile%20(2).png", siteUrl).toString(),
      sameAs: [
        "https://github.com/Malsha247",
        "https://www.linkedin.com/in/malsha-prabhasara-0468a83ab",
      ],
      knowsAbout: [
        "Web development",
        "Software quality assurance",
        "Next.js",
        "React",
        "TypeScript",
        "Playwright",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Malsha Prabhasara | Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />

        <Footer />
      </main>
    </>
  );
}

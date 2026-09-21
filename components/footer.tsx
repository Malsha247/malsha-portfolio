export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Malsha</h2>

        <div className="flex justify-center gap-5 mb-4">
          <a href="#home" className="hover:underline">
            Home
          </a>

          <a href="#about" className="hover:underline">
            About
          </a>

          <a href="#projects" className="hover:underline">
            Projects
          </a>

          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {currentYear} Malsha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
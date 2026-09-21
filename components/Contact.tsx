export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8 text-center"
    >
      <h2 className="text-3xl font-bold">
        Contact Me
      </h2>

      <p className="mt-4">
        Interested in working together? Feel free to contact me.
      </p>

      <div className="flex justify-center gap-6 mt-6">
        <a href="mailto:your@email.com">
          Email
        </a>

        <a href="#">
          LinkedIn
        </a>

        <a href="#">
          GitHub
        </a>
      </div>
    </section>
  );
}
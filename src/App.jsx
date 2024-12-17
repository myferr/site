import { Github, Instagram, Mail, MapPin } from "lucide-react";

export default function App() {
  return (
    <main>
      <div className="min-h-screen bg-white text-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-2xl space-y-16">
          {/* Hero Section */}
          <section>
            <h1 className="text-3xl font-bold mb-4">
              Frontend Engineer & TypeScript Developer
            </h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="h-4 w-4" />
              <span>United States</span>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Experienced in creating beautiful and functional websites and
              applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/myferr"
                className="text-gray-600 hover:text-gray-800"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/notmyfer"
                className="text-gray-600 hover:text-gray-800"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:contactme.myfer@protonmail.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
            <div className="space-y-8">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-medium">
                    Lead Software Developer @ HeckerGang
                  </h3>
                  <span className="text-gray-500">1/20/2024 — 4/16/2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Coordinated a plan for development of the website with
                    HeckerGang's team.
                  </li>
                  <li>Developed a responsive website for HeckerGang.</li>
                  <li>
                    Deployed the website using the Cloudflare Pages service.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Golang",
                "Sass/SCSS",
                "Tailwind CSS",
                "Svelte",
                "Vue",
                "React.js",
                "Flask.py",
                "Python",
                "Bash",
                "Astro",
                "Node.js",
                "Astro",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-100 rounded-lg p-4 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

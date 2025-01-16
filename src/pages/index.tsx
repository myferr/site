import { useAsciiText, larry3D } from "react-ascii-text";
import { Github, Instagram, Mail } from "lucide-react";
import Nav from "../components/nav";

function App() {
  const asciiTextRef = useAsciiText({
    animationCharacters: "_-",
    animationCharacterSpacing: 1,
    animationDelay: 2000,
    animationDirection: "down",
    animationInterval: 100,
    animationLoop: true,
    animationSpeed: 50,
    font: larry3D,
    text: ["Myfer"],
  });

  const roles = [
    "developer",
    "designer",
    "freelancer",
    "creator",
    "inventor",
    "open-source enthusiast",
  ];

  return (
    <main className="h-screen bg-[#121212] text-white">
      <Nav />
      <div className="flex flex-col justify-center items-center">
        <div className="border-b border-white/5 border-dashed pb-10">
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-violet-800 to-indigo-600">
            {/* @ts-ignore */}
            <pre ref={asciiTextRef}></pre>
          </h1>
          <div className="flex gap-4 mt-20">
            <a
              href="https://github.com/myferr"
              className="p-2 bg-transparent rounded-lg hover:bg-white/10 duration-300 cursor-pointer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/gangsta_cat_fr"
              className="p-2 bg-transparent rounded-lg hover:bg-white/10 duration-300 cursor-pointer"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:contactme.myfer@protonmail.com"
              className="p-2 bg-transparent rounded-lg hover:bg-white/10 duration-300 cursor-pointer"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-2xl mb-6">
            hey! i'm a{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-800 to-indigo-600 text-transparent bg-clip-text">
              {roles[Math.floor(Math.random() * roles.length)]}
            </span>
          </p>
          <p className="max-w-[34rem]">
            I'm Dennis, a web developer, CLI developer, open-source enthusiast &
            creator, and a software developer. I love to create and share my
            projects on GitHub, with a range of languages and frameworks.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;

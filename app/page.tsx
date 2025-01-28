import Link from "next/link";

import Layout from "@/components";
import { Github, Mail, Twitter } from "lucide-react";
const skills1 = ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Ruby"];
const skills2 = ["React", "Next.js", "Vue", "Svelte", "Astro", "Tailwind CSS"];
const skills3 = ["Batchfile", "Swift", "Node.js", "Tauri", "MongoDB", "Vite"];
const skills4 = ["Golang", "Bash", "Flask", "Electron"];

const SkillRow: React.FC<{ skills: string[]; direction: "left" | "right" }> = ({
  skills,
  direction,
}) => {
  return (
    <div
      className={`flex whitespace-nowrap ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      }`}
    >
      {[...skills, ...skills].map((skill, index) => (
        <div key={index} className="mx-4 font-bold text-white">
          {skill}
        </div>
      ))}
    </div>
  );
};

export default function pageOne() {
  return (
    <Layout>
      <h1 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        I am Dennis.
      </h1>
      <p className="max-w-sm text-lg text-center sm:text-left">
        A 13 year old full stack developer with a passion for code and design.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        <div className="hidden sm:block h-[1px] bg-gray-300/15 self-center w-48"></div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/myferr/"
            className="text-neutral-400 duration-300 hover:text-white hover:bg-neutral-900 rounded-md p-2"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:contactme.myfer@protonmail.com"
            className="text-neutral-400 duration-300 hover:text-white hover:bg-neutral-900 rounded-md p-2"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/idocoding"
            className="text-neutral-400 duration-300 hover:text-white hover:bg-neutral-900 rounded-md p-2"
          >
            <Twitter className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="mt-8 overflow-x-hidden">
        <div className="relative overflow-hidden">
          <div className="max-w-sm mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="relative">
                <SkillRow skills={skills1} direction="left" />
              </div>
              <div className="relative">
                <SkillRow skills={skills2} direction="right" />
              </div>
              <div className="relative">
                <SkillRow skills={skills3} direction="left" />
              </div>
              <div className="relative">
                <SkillRow skills={skills4} direction="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

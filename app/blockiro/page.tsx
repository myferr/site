import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { socials } from "@/lib/data/socials";

export default function Home() {
  return (
    <main className="min-h-screen p-20 md:p-24 lg:p-28 text-md bg-neutral-950 text-neutral-200">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-start mb-10 ">
          <div>
            <Link className="text-2xl md:text-3xl font-serif italic" href={"/"}>
              Dennis.
            </Link>
            <p className="text-neutral-500 mt-1 pointer-events-none">
              Full-stack developer
            </p>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                className="hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </header>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif italic mb-2">About Blockiro</h2>
          <p className="flex gap-1 pointer-events-none">
            Blockiro{" "}
            <span className="italic font-serif"> curated by Blockiro LLC</span>,
            is based in <span></span>
            <span className="px-3 py-1 bg-neutral-900 rounded-md text-sm border hover:underline pointer-events-none font-serif italic">
              Canada
            </span>
            . It is a blocky and fun-focused multiplayer game.
          </p>
          <p className="mt-4 space-y-2">
            <span className="pointer-events-none">
              You can also find Blockiro on{" "}
            </span>
            <Link
              className="px-3 py-1 bg-neutral-900 rounded-md text-sm border hover:underline cursor-pointer duration-300 font-serif italic"
              href={"https://github.com/playblockiro"}
              target="_blank"
            >
              GitHub
              <FaExternalLinkAlt className="inline-block ml-3 size-3 text-neutral-400" />
            </Link>{" "}
            or{" "}
            <Link
              className="px-3 py-1 bg-neutral-900 rounded-md text-sm border hover:underline cursor-pointer duration-300 font-serif italic"
              href={"https://discord.gg/msW53ejxJF"}
              target="_blank"
            >
              Discord
              <FaExternalLinkAlt className="inline-block ml-3 size-3 text-neutral-400" />
            </Link>
            .{" "}
            <span className="text-sm text-neutral-600">
              (fun fact: i&apos;m a server booster)
            </span>
          </p>
        </section>
      </div>
      <footer className="mt-20 text-center text-neutral-500">
        <p>
          All opinions and content, on my socials and on this web page are my
          own and aren&apos;t statements made by Blockiro LLC.
        </p>
      </footer>
    </main>
  );
}

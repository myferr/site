import Link from "next/link";

// interface
interface Children {
  children: React.ReactNode;
}

/*
Components are to simplify the code and make it more readable.
All components will be stored below this comment, and will be exported using
`import { ComponentName } from "@/components";`
*/

export default function Layout({ children }: Children) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] justify-center items-center">
      <aside className="flex flex-col gap-10 text-left">
        <Link
          href="/"
          className="text-neutral-400 duration-300 hover:text-white hover:px-4"
        >
          <div className="flex items-center">
            <span className="flex-grow border-t border-neutral-400"></span>
            <span className="px-14">Home</span>
          </div>
        </Link>
        <Link
          href="/about"
          className="text-neutral-400 duration-300 hover:text-white hover:px-4"
        >
          <div className="flex items-center">
            <span className="flex-grow border-t border-neutral-400"></span>
            <span className="px-14">About</span>
          </div>
        </Link>
        <Link
          href="/contact"
          className="text-neutral-400 duration-300 hover:text-white hover:px-4"
        >
          <div className="flex items-center">
            <span className="flex-grow border-t border-neutral-400"></span>
            <span className="px-9">Contact Me</span>
          </div>
        </Link>
      </aside>
      <main className="flex flex-col items-center sm:items-start sm:ml-52">
        {children}
      </main>
    </div>
  );
}

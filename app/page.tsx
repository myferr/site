import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-4 pb-10 gap-8 sm:p-10">
        <div className="flex gap-1">
          <Link
            href={"https://github.com/myferr/"}
            className="text-blue-600 font-medium underline"
          >
            github
          </Link>
          <p>/</p>
          <Link
            href={"https://x.com/myferdoescoding/"}
            className="text-blue-600 font-medium underline"
          >
            twitter
          </Link>
          <p>/</p>
          <Link href={"/blog"} className="text-blue-600 font-medium underline">
            blog
          </Link>
        </div>
        <div className="mt-8 max-w-2xl">
          <div>
            home
            <br />
            hey, i&apos;m dennis. welcome to my personal site, deployed on{" "}
            <Link
              href={"https://vercel.com/"}
              className="text-blue-600 font-medium underline"
            >
              vercel
            </Link>{" "}
            and built with{" "}
            <Link
              href={"https://nextjs.org/"}
              className="text-blue-600 font-medium underline"
            >
              next.js
            </Link>
            {", "}
            <Link
              href={"https://tailwindcss.com/"}
              className="text-blue-600 font-medium underline"
            >
              tailwindcss
            </Link>
            {", & "}
            <Link
              href={"https://typescriptlang.org/"}
              className="text-blue-600 font-medium underline"
            >
              typescript
            </Link>
            {". "}i also run a{" "}
            <Link
              href={"https://github.com/myferr/"}
              className="text-blue-600 font-medium underline"
            >
              blog
            </Link>{" "}
            where i write about programming, web development, and other
            tech-related topics.
            <br />
            <br />
            <Link href={"mailto:contactme.myfer@protonmail.com"}>
              <button className="bg-gray-50 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100">
                send me an email
              </button>
            </Link>
            <br />
            <br />
            or contact me via my email at{" "}
            <span className="underline">contactme.myfer@protonmail.com</span>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            my skills and programming technologies:
            <br />
            <Link
              href={"https://astro.build/"}
              className="text-blue-600 font-medium underline"
            >
              astro
            </Link>
            ,{" "}
            <Link
              href={"https://www.gnu.org/software/bash/"}
              className="text-blue-600 font-medium underline"
            >
              bash
            </Link>
            ,{" "}
            <Link
              href={"https://en.wikipedia.org/wiki/Batch_file"}
              className="text-blue-600 font-medium underline"
            >
              batchfile
            </Link>
            ,{" "}
            <Link
              href={"https://www.w3.org/Style/CSS/Overview.en.html"}
              className="text-blue-600 font-medium underline"
            >
              css
            </Link>
            ,{" "}
            <Link
              href={"https://electronjs.org/"}
              className="text-blue-600 font-medium underline"
            >
              electron
            </Link>
            ,{" "}
            <Link
              href={"https://flask.palletsprojects.com/en/stable/"}
              className="text-blue-600 font-medium underline"
            >
              flask.py
            </Link>
            ,{" "}
            <Link
              href={"https://github.com/"}
              className="text-blue-600 font-medium underline"
            >
              github
            </Link>
            ,{" "}
            <Link
              href={"https://go.dev/"}
              className="text-blue-600 font-medium underline"
            >
              golang
            </Link>
            ,
            <br />
            <Link
              href={"https://html.com/"}
              className="text-blue-600 font-medium underline"
            >
              html
            </Link>
            ,{" "}
            <Link
              href={"https://javascript.com/"}
              className="text-blue-600 font-medium underline"
            >
              javascript
            </Link>
            ,{" "}
            <Link
              href={"https://mongodb.com/"}
              className="text-blue-600 font-medium underline"
            >
              mongodb
            </Link>
            ,{" "}
            <Link
              href={"https://nodejs.org/"}
              className="text-blue-600 font-medium underline"
            >
              nodejs
            </Link>
            ,{" "}
            <Link
              href={"https://npmjs.com/~myfer"}
              className="text-blue-600 font-medium underline"
            >
              npm
            </Link>
            ,{" "}
            <Link
              href={"https://microsoft.com/powershell"}
              className="text-blue-600 font-medium underline"
            >
              powershell
            </Link>
            ,{" "}
            <Link
              href={"https://python.org/"}
              className="text-blue-600 font-medium underline"
            >
              python
            </Link>
            ,{" "}
            <Link
              href={"https://react.dev/"}
              className="text-blue-600 font-medium underline"
            >
              react
            </Link>
            ,
            <br />
            <Link
              href={"https://swift.org/"}
              className="text-blue-600 font-medium underline"
            >
              swift
            </Link>
            ,{" "}
            <Link
              href={"https://tailwindcss.com/"}
              className="text-blue-600 font-medium underline"
            >
              tailwindcss
            </Link>
            ,{" "}
            <Link
              href={"https://typescriptlang.org/"}
              className="text-blue-600 font-medium underline"
            >
              typescript
            </Link>
            ,{" "}
            <Link
              href={"https://vitejs.dev/"}
              className="text-blue-600 font-medium underline"
            >
              vite
            </Link>
            ,{" "}
            <Link
              href={"https://vuejs.org/"}
              className="text-blue-600 font-medium underline"
            >
              vue
            </Link>
            ,{" "}
            <Link
              href={"https://sass-lang.com/"}
              className="text-blue-600 font-medium underline"
            >
              sass/scss
            </Link>
            ,{" "}
            <Link
              href={"https://svelte.dev/"}
              className="text-blue-600 font-medium underline"
            >
              svelte
            </Link>
            ,
            <br />
            <Link
              href={"https://pages.dev"}
              className="text-blue-600 font-medium underline"
            >
              cloudflare pages
            </Link>
            ,{" "}
            <Link
              href={"https://vercel.com/"}
              className="text-blue-600 font-medium underline"
            >
              vercel
            </Link>
            ,{" "}
            <Link
              href={"https://tauri.app/"}
              className="text-blue-600 font-medium underline"
            >
              tauri
            </Link>
            ,{" "}
            <Link
              href={"https://nextjs.org/"}
              className="text-blue-600 font-medium underline"
            >
              next.js
            </Link>
            ,{" "}
            <Link
              href={"https://mdxjs.com/"}
              className="text-blue-600 font-medium underline"
            >
              mdx
            </Link>
            <hr className="h-px my-8 bg-gray-200 border-0" />
            other links:
            <br />
            <Link
              href={"/about"}
              className="text-blue-600 font-medium underline"
            >
              about
            </Link>
            ,{" "}
            <Link
              href={"/projects"}
              className="text-blue-600 font-medium underline"
            >
              projects
            </Link>
            ,{" "}
            <Link
              href={"/blog"}
              className="text-blue-600 font-medium underline"
            >
              blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

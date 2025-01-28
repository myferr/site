import Link from "next/link";

import Layout from "@/components";
import { Github, Mail, Twitter } from "lucide-react";

export default function pageThree() {
  return (
    <Layout>
      <h1 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Contact Me
      </h1>
      <div className="max-w-sm text-lg text-center sm:text-left">
        You can contact me at
        <Link
          href="mailto:contactme.myfer@protonmail.com"
          className="text-neutral-400 underline underline-offset-4 flex gap-2 py-1 pb-2 px-4 duration-300 hover:bg-neutral-800 rounded-md"
        >
          <Mail className="relative top-1" />
          contactme.myfer@protonmail.com
        </Link>
        <Link
          href="https://github.com/myferr"
          className="text-neutral-400 underline underline-offset-4 flex gap-2 py-1 pb-2 px-4 duration-300 hover:bg-neutral-800 rounded-md"
        >
          <Github className="relative top-1" />
          @myferr
        </Link>
        <Link
          href="https://x.com/@idocoding"
          className="text-neutral-400 underline underline-offset-4 flex gap-2 py-1 pb-2 px-4 duration-300 hover:bg-neutral-800 rounded-md"
        >
          <Twitter className="relative top-1" />
          @idocoding
        </Link>
      </div>
    </Layout>
  );
}

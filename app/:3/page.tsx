"use client";

import { Button } from "@/components/ui/button";
import * as Fa from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex justify-between w-full max-w-md items-center">
        <div>
          <Link href={"/"} className="font-mono hover:underline">
            /home
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/vinyls"} className="font-mono hover:underline">
            /vinyls
          </Link>
          <Link href={"/:3"} className="font-mono hover:underline">
            /:3
          </Link>
        </div>
        <div>
          <Link href="https://github.com/myferr" target="_blank">
            <Button
              variant={"secondary"}
              className="rounded-xl hover:cursor-pointer"
              size={"icon"}
            >
              <Fa.FaGithub />
            </Button>
          </Link>
        </div>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl">:3</h1>
      </main>
    </div>
  );
}

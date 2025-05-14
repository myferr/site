"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as Fa from "react-icons/fa6";
import WiresCat from "@/public/wires.png";
import CatStare from "@/public/cat-stare.webp";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {
  const [image, setImage] = useState<string | StaticImport>(WiresCat);

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
        <h1 className="text-xl">Hey, I&apos;m Myfer.</h1>
        <div className="space-y-0.5 flex flex-col font-mono text-amber-100">
          <p>{"> buy mustard gas"}</p>
          <p>{"> look inside"}</p>
          <p>{"> no mustard"}</p>
          <Image
            src={image}
            alt="Cat"
            width={280}
            height={280}
            onMouseEnter={() => {
              setImage(CatStare);
            }}
            onMouseLeave={() => {
              setImage(WiresCat);
            }}
          />
        </div>
        <Separator />
        <div className="flex gap-2">
          <Link href="https://github.com/myferr" target="_blank">
            <Button variant={"secondary"} className="hover:cursor-pointer">
              <Fa.FaGithub />
              GitHub
            </Button>
          </Link>

          <Link
            href="https://discord.com/users/1157526846229991544"
            target="_blank"
          >
            <Button variant={"secondary"} className="hover:cursor-pointer">
              <Fa.FaDiscord />
              Discord
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

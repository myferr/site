import ColorfulPixelLogo from "./components/ColorfulPixelLogo";
import BlinkingCursor from "./components/BlinkingCursor";
import FloatingPixels from "./components/FloatingPixels";
import NavMenu from "./components/NavMenu";
import ThemeToggle from "./components/ThemeToggle";
import SoundEffect from "./components/SoundEffect";
import PixelatedBackground from "./components/PixelatedBackground";

import src from "./cat.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PixelatedBackground />
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-8 flex flex-col items-center">
          <Image src={src} alt="cat" width={200} height={200} />
          <h1 className="text-4xl font-bold text-center font-pixel mb-4 my-12">
            Dennis
          </h1>
          <p className="text-xl text-center font-mono flex items-center">
            Crafting beautiful websites with the latest technology.{" "}
            <BlinkingCursor />
          </p>
          <NavMenu />
        </header>
      </div>
      <FloatingPixels />
      <SoundEffect />
    </div>
  );
}

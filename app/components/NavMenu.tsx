import Link from "next/link";
import { Github, Mail } from "lucide-react";

const NavMenu = () => {
  return (
    <nav className="flex justify-center space-x-4 my-4">
      <Link
        href="https://github.com/myferr"
        className="flex flex-col items-center p-2 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
      >
        <Github className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">GitHub</span>
      </Link>
      <Link
        href="mailto:contactme.myferr@protonmail.com"
        className="flex flex-col items-center p-2 bg-gray-800 rounded pixelated-border hover:bg-gray-700 transition-colors"
      >
        <Mail className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">Email me</span>
      </Link>
    </nav>
  );
};

export default NavMenu;

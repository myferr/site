"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[3px] shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="geistMono text-2xl font-semibold text-primary hover:-rotate-3 transition-all duration-300"
            >
              Dennis.
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 gap-4">
              <li>
                <a
                  href="/about"
                  className="geistMono text-muted-foreground hover:text-primary"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/myferr?tab=repositories"
                  className="geistMono text-muted-foreground hover:text-primary"
                  target="_blank"
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="/posts"
                  className="geistMono text-muted-foreground hover:text-primary"
                >
                  posts
                </a>
              </li>
              <li>
                <a
                  href="mailto:contactme.myfer@protonmail.com"
                  className="geistMono text-muted-foreground hover:text-primary"
                >
                  contact me
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-muted-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

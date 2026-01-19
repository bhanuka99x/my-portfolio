"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import '../styles/header.css'

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "skills", path: "/skills" },
    { name: "experience", path: "/experience" },
    { name: "projects", path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center pt-8 z-50 px-4">
      <div className="flex items-center justify-between w-full max-w-7xl gap-8  px-6 py-3 rounded-full  transition-all duration-300">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-lg tracking-tight hover:scale-110 transition-transform duration-200">
            {"</> bhanuka99x"}
          </span>
        </Link>

        {/* Nav Links - Center */}
        <ul className="flex gap-1 md:gap-2  backdrop-blur-2xl px-[8px] py-4 font-bilmond tracking-wide border border-white/20 bg-white/10 rounded-full">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`
                  relative px-5 py-3.5 text-sm font-medium capitalize rounded-full
                  transition-all duration-300 ease-out
                  ${
                    pathname === item.path
                      ? "text-black bg-white "
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact - Right */}
        <div>
        <Link
          href="/contact"
          className="text-black  bg-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105"
        >
          Contact
        </Link>
        </div>
      </div>
    </nav>
  );
}

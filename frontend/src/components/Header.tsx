"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "@/src/styles/header.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "home", path: "#home", isSection: true },
    { name: "about", path: "#about", isSection: true },
    { name: "skills", path: "/skills", isSection: false },
    { name: "experience", path: "/experience", isSection: false },
    { name: "projects", path: "/projects", isSection: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        window.location.href = '/' + item.path;
        return;
      }
      
      const element = document.querySelector(item.path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center font-bilmond pt-4 md:pt-8 z-50 px-4">
      <div className="flex items-center justify-between w-full  gap-4 md:gap-8 px-4 md:px-20 py-3 rounded-full transition-all duration-300">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center z-50">
          <span className="text-white font-bold text-base md:text-lg tracking-tight hover:scale-110 transition-transform duration-200">
            {"</> bhanuka99x"}
          </span>
        </Link>

        {/* Desktop Nav Links - Hidden on mobile */}
        <motion.ul
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="hidden lg:flex gap-1 md:gap-2 backdrop-blur-2xl px-[8px] py-4 font-bilmond tracking-wide border border-white/20 bg-white/10 rounded-full"
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`
                  relative px-5 py-3 text-md font-medium capitalize rounded-full
                  transition-all duration-300 ease-out
                  ${
                    pathname === item.path
                      ? "text-black bg-white "
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Desktop Contact - Hidden on mobile */}
        <motion.div
          whileHover="hover"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="hidden lg:block"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2
                   text-black bg-white border border-white/20 backdrop-blur-md px-1.5 py-1.5 rounded-full
                   font-medium text-md"
          >
            <motion.div
              variants={{
                hover: {
                  rotate: -60,
                  x: 108,
                },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-black text-white p-2.5 rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>

            <motion.span
              className="mr-2 tracking-wide "
              variants={{ hover: { x: -40, opacity: [1, 0, 1] } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Contact Me
            </motion.span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 p-2 text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-4 right-4 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 z-40"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      block px-6 py-4 text-lg font-medium capitalize rounded-2xl
                      transition-all duration-300
                      ${
                        pathname === item.path
                          ? "text-black bg-white"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-4 text-lg font-medium rounded-2xl
                           text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
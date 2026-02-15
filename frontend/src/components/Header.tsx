"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import "@/styles/header.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  const navItems = [
    { name: "home", path: "#home", isSection: true },
    { name: "about", path: "#about", isSection: true },
    { name: "skills", path: "/skills", isSection: false },
    { name: "experience", path: "/experience", isSection: false },
    { name: "projects", path: "/projects", isSection: false },
    { name: "contact me", path: "#contact", isSection: true, isContactButton: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isSection) {
      e.preventDefault();
      setActiveSection(item.path);
      
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
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full flex justify-center font-bilmond pt-4 md:pt-8 z-50 px-4"
    >
      <div className="flex items-center justify-between w-full  gap-4 md:gap-8 px-4 md:px-20 py-3 rounded-full transition-all duration-300">
  
        {/* Desktop Nav Links - Hidden on mobile */}
        <motion.ul
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="hidden bg-[#94949477]  lg:flex gap-1 md:gap-2 backdrop-blur-2xl px-[8px] py-4 mx-auto font-bilmond tracking-wide border-2 border-white/20  rounded-full"
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
                    item.isContactButton
                      ? "text-white bg-gray-800  "
                      : (item.isSection ? activeSection === item.path : pathname === item.path)
                      ? "text-black bg-white hover:text-black hover:bg-white"
                      : "text-white/90 hover:text-black hover:bg-white"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Desktop Contact - Hidden on mobile */}
        {/* <motion.div
          whileHover="hover"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="hidden lg:block"
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2
                    bg-amber-400/20 border border-amber-100 backdrop-blur-md px-1.5 py-1.5 rounded-full
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
              className="bg-white/40 text-amber-400 p-2.5 rounded-full"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>

            <motion.span
              className="mr-2 tracking-wide text-amber-400 "
              variants={{ hover: { x: -40, opacity: [1, 0, 1] } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Contact Me
            </motion.span>
          </Link>
        </motion.div> */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50 p-2 text-white bg-white/10 border border-white/80 backdrop-blur-md rounded-xl focus:outline-none focus:ring-1 focus:ring-white  "
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
                        item.isContactButton
                          ? "text-amber-400 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 hover:from-amber-500/30 hover:to-orange-500/30"
                          : (item.isSection ? activeSection === item.path : pathname === item.path)
                          ? "text-black bg-white"
                          : "text-white/90 hover:text-white hover:bg-white/50"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
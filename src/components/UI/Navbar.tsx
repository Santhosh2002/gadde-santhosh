import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUp } from "lucide-react";
import { redirect } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  {
    name: "Portfolio",
    href: "#portfolio",
    subLinks: [
      { name: "Education", href: "#education" },
      { name: "Freelance", href: "#freelance" },
      { name: "Animations", href: "#animations" },
      { name: "Achievements", href: "#achievements" },
      { name: "Resume", href: "#resume" },
    ],
  },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);
  const toggleDropdown = (linkName: string) => {
    setOpenDropdown((prev) => (prev === linkName ? null : linkName));
  };
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    setTimeout(() => {
      if (targetId && targetId.startsWith("#")) {
        const el = document.querySelector(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-in-out md:w-[80%] w-[95%] mt-5 mx-auto rounded-2xl",
          isScrolled
            ? "glass-card-strong py-4 shadow-2xl "
            : "py-4 bg-transparent "
        )}
      >
        <div
          className={cn(
            "container mx-auto px-4 flex items-center justify-between"
          )}
        >
          <a href="#home" className="flex items-center">
            <span className="text-2xl font-bold text-gradient">
              SAI SANTHOSH
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleAnchorClick}
                  className="text-sm font-medium relative py-2 text-gray-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-portfolio-teal after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.name}
                </a>

                {/* Desktop Dropdown */}
                {link.subLinks && openDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 rounded-xl shadow-lg z-50 bg-portfolio-dark/80 backdrop-blur-lg border border-white/10">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        onClick={handleAnchorClick}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-portfolio-teal/20 hover:text-white transition-colors rounded"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:inline-block px-5 py-1.5 bg-transparent border border-teal-600 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              onClick={() => redirect("/services")}
            >
              Services
            </button>
            <button className="hidden md:inline-block px-5 py-1.5 bg-portfolio-teal text-black font-medium rounded-xl hover:bg-white transition-colors">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-16 left-4 right-4 mt-2 z-40 bg-portfolio-dark/80 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:hidden shadow-lg"
          ref={mobileMenuRef}
        >
          <nav className="flex flex-col items-start space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                <button
                  onClick={() => {
                    link.subLinks
                      ? setOpenMobileDropdown((prev) =>
                          prev === link.name ? null : link.name
                        )
                      : setIsMobileMenuOpen((prev) => !prev);
                  }}
                  className="text-lg font-medium text-gray-300 hover:text-portfolio-teal transition-colors w-full text-left"
                >
                  {link.name}
                </button>

                {/* SubLinks if available */}
                {link.subLinks && openMobileDropdown === link.name && (
                  <div className="mt-2 ml-4 space-y-4">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg font-medium text-gray-300 hover:text-portfolio-teal transition-colors w-full text-left"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-40 p-3 rounded-full bg-portfolio-teal/80 text-white shadow-lg transition-all duration-300",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Navbar;

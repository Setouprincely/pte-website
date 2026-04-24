import { Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show background after scrolling a bit
    setScrolled(currentScrollY > 20);

    // Hide header when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHidden(true);   // Scroll down → hide
    } else {
      setHidden(false);  // Scroll up → show
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md shadow-xl border-b border-white/10"
          : "bg-[#0a0f1e]"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6 text-[#0a0f1e]" />
          </div>
          <div className="font-display">
            <span className="text-2xl font-bold tracking-tight text-white">PTE</span>
            <span className="block -mt-1 text-[10px] font-medium tracking-[2px] text-amber-400/90 uppercase">Academic</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/80 transition-all hover:text-white hover:-translate-y-0.5"
              activeProps={{
                className: "text-white font-semibold relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-amber-400",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop WhatsApp */}
        <div className="hidden md:block">
          <WhatsAppButton 
            size="sm" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0a0f1e] md:hidden">
          <nav className="flex flex-col px-6 py-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-4 text-lg font-medium text-white/90 hover:text-white border-b border-white/10 transition-colors last:border-none"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-8">
              <WhatsAppButton 
                size="sm" 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3.5 rounded-2xl text-base"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
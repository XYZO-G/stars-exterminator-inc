import { useState, useEffect } from "react";
import { Menu, X, Phone, Star } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#howitworks" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <Star className="w-6 h-6 fill-amber text-amber" />
          <span className={cn(
            "text-xl font-extrabold tracking-tighter transition-colors text-white"
          )}>
            STARS EXTERMINATOR
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+13477977976"
            className="flex items-center gap-2 bg-amber hover:bg-amber-dark text-navy font-bold py-2.5 px-4 rounded-lg transition-all"
          >
            <Phone size={18} />
            <span>(347) 797-7976</span>
          </a>
          <a
            href="#contact"
            className="hidden lg:block border-2 border-white/30 hover:border-white text-white font-semibold py-2.5 px-5 rounded-lg transition-all"
          >
            Get Free Estimate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-navy z-40 lg:hidden flex flex-col transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-bold text-white border-b border-white/10 pb-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+13477977976"
              className="flex items-center justify-center gap-3 bg-amber text-navy font-black py-5 rounded-xl text-xl shadow-lg"
            >
              <Phone size={24} />
              <span>(347) 797-7976</span>
            </a>
            <a
              href="#contact"
              className="text-center text-white/70 font-medium py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Proyectos", href: "#proyectos" },
];

const waLink = "https://wa.me/5435178676009?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src="/logo-carrera.png"
            alt="Carrera Revestimiento"
            className="w-auto object-contain"
            style={{ height: "9rem", marginTop: "50px" }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Presupuesto CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Presupuesto
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest py-1"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold w-full text-center mt-2"
          >
            Presupuesto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

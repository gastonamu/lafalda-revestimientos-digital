import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { productos } from "@/lib/productos";
import PresupuestoModal from "@/components/PresupuestoModal";

const links = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Testimonios", href: "/#testimonios" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [productosMobileOpen, setProductosMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setProductosMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo-carrera.png"
            alt="Carrera Revestimiento"
            className="w-auto object-contain"
            style={{ height: "4.5rem" }}
          />
        </Link>

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

          {/* Productos dropdown */}
          {productos.length > 0 && (
            <div
              className="relative"
              onMouseEnter={() => setProductosOpen(true)}
              onMouseLeave={() => setProductosOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
                onClick={() => setProductosOpen((v) => !v)}
                aria-expanded={productosOpen}
              >
                Productos
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${productosOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>

              {productosOpen && (
                <div
                  className="absolute top-full right-0 pt-3"
                  style={{ minWidth: "260px" }}
                >
                  <div
                    className="border border-white/10 bg-black/95 backdrop-blur-md py-2"
                    style={{ borderRadius: "4px" }}
                  >
                    {productos.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/productos/${p.slug}`}
                        className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          letterSpacing: "0.08em",
                        }}
                        onClick={() => setProductosOpen(false)}
                      >
                        {p.nombre}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Presupuesto CTA */}
        <div className="hidden md:flex items-center">
          <PresupuestoModal
            trigger={
              <button type="button" className="btn-gold flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Presupuestar Gratis
              </button>
            }
          />
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
              onClick={closeMobile}
              className="block text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest py-1"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
            >
              {l.label}
            </a>
          ))}

          {/* Productos accordion mobile */}
          {productos.length > 0 && (
            <div>
              <button
                className="w-full flex items-center justify-between text-sm font-semibold text-white/70 hover:text-white transition-colors uppercase tracking-widest py-1"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.15em" }}
                onClick={() => setProductosMobileOpen((v) => !v)}
                aria-expanded={productosMobileOpen}
              >
                Productos
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${productosMobileOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </button>
              {productosMobileOpen && (
                <div className="pl-4 pt-3 space-y-3 border-l border-white/10 ml-1 mt-2">
                  {productos.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/productos/${p.slug}`}
                      onClick={closeMobile}
                      className="block text-sm text-white/60 hover:text-white transition-colors"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {p.nombre}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          <PresupuestoModal
            onOpenChange={(isOpen) => { if (isOpen) closeMobile(); }}
            trigger={
              <button type="button" className="btn-gold w-full text-center mt-2">
                Presupuestar Gratis
              </button>
            }
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

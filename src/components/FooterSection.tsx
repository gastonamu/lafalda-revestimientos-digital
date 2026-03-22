import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const FooterSection = () => {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(212,175,55,0.15)" }}
    >
      {/* Top bar with gold accent */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(to right, transparent, hsl(43,74%,49%), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <img
              src="/logo-carrera.jpeg"
              alt="Carrera Revestimiento"
              className="h-20 w-auto object-contain rounded-lg"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Fabricación, venta e instalación de sistemas antihumedad y revestimientos decorativos. Soluciones definitivas con garantía por escrito.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+5435178676009"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                351-7867609
              </a>
              <a
                href="tel:+543548417441"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                3548-417441
              </a>
              <a
                href="mailto:contacto@carrerarevestimiento.com"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                contacto@carrerarevestimiento.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-5">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Ubicación
            </h4>
            <a
              href="https://maps.google.com/?q=La+Falda,+Córdoba,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/50 hover:text-white transition-colors text-sm group"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
              Av. España 217, La Falda,<br />Córdoba, Argentina
            </a>
            <div
              className="text-white/30 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Local: Lun – Sáb 9:00 – 13:00 · WhatsApp hasta 20:00
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Carrera Revestimiento. La Falda, Córdoba.
          </p>
          <p className="text-white/15 text-xs">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

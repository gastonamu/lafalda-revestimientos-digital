import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import footer from "@/content/footer.json";

const SOCIAL_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  instagram: Instagram,
  facebook: Facebook,
};

const FooterSection = () => {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(212,175,55,0.15)" }}
    >
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(to right, transparent, hsl(43,74%,49%), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-5">
            <img
              src={footer.logo}
              alt={footer.logo_alt}
              className="h-24 w-auto object-contain rounded-lg"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {footer.descripcion}
            </p>
            <div className="flex items-center gap-3">
              {footer.redes.map((r) => {
                const Icon = SOCIAL_ICONS[r.tipo];
                if (!Icon) return null;
                return (
                  <a
                    key={r.tipo}
                    href={r.url}
                    aria-label={r.tipo}
                    className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-yellow-500/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Contacto
            </h4>
            <div className="space-y-3">
              {footer.telefonos.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                  {t.label}
                </a>
              ))}
              <a
                href={`mailto:${footer.email}`}
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
                {footer.email}
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Ubicación
            </h4>
            <a
              href={footer.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/50 hover:text-white transition-colors text-sm group"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-yellow-500 transition-colors" strokeWidth={1.5} />
              {footer.direccion_linea_1}<br />{footer.direccion_linea_2}
            </a>
            <div
              className="text-white/30 text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {footer.horario_resumen}
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-white/15 text-xs">
            {footer.derechos}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

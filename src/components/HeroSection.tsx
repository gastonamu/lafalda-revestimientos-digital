import { motion } from "framer-motion";
import { CheckSquare, Droplets, Shield } from "lucide-react";
import heroImg from "@/assets/hero-placa.jpg";

const waPresupuesto = "https://wa.me/5435178676009?text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico";
const waTrabajos = "#proyectos";

const badges = [
  { icon: CheckSquare, label: "Diagnóstico", sub: "Profesional" },
  { icon: Droplets, label: "Productos", sub: "Antihumedad" },
  { icon: Shield, label: "Garantía", sub: "por Escrito" },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col texture-dark overflow-hidden pt-20"
    >
      {/* Diagonal gold accent lines */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: "50%", width: "4px", transform: "rotate(8deg) translateX(120px)", background: "linear-gradient(to bottom, transparent, hsl(43,74%,49%) 30%, hsl(43,74%,49%) 70%, transparent)", opacity: 0.5 }}
      />
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: "50%", width: "2px", transform: "rotate(8deg) translateX(140px)", background: "linear-gradient(to bottom, transparent, hsl(43,74%,49%) 30%, hsl(43,74%,49%) 70%, transparent)", opacity: 0.25 }}
      />

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
      />

      {/* Main grid */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-8 items-center py-16">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 z-10"
        >
          <div className="space-y-2">
            <span className="section-eyebrow">Solución Definitiva</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mt-2">
              CONTRA LA{" "}
              <span style={{ color: "hsl(43,74%,49%)" }}>HUMEDAD</span>
            </h1>
          </div>

          <p className="text-white/70 text-lg leading-relaxed max-w-lg">
            Tratamientos antihumedad, impermeabilización y revestimientos
            duraderos con <span style={{ color: "hsl(43,74%,49%)" }}>garantía por escrito</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={waPresupuesto} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Solicitar Diagnóstico
            </a>
            <a href={waTrabajos} className="btn-outline">
              Ver Trabajos Realizados
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4 border-t border-white/10">
            <div>
              <p className="text-3xl font-black text-white">10+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>Años de experiencia</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-black text-white">500+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>Obras realizadas</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-black" style={{ color: "hsl(43,74%,49%)" }}>100%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5" style={{ fontFamily: "'Oswald', sans-serif" }}>Garantizados</p>
            </div>
          </div>
        </motion.div>

        {/* Right: image with diagonal clip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
          className="relative hidden lg:block z-10"
        >
          <div
            className="relative overflow-hidden"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <img
              src={heroImg}
              alt="Revestimiento antihumedad Carrera"
              className="w-full object-cover object-center"
              style={{ height: "520px", width: "100%" }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          {/* Gold corner accent */}
          <div
            className="absolute top-0 left-8 w-1 h-24"
            style={{ background: "linear-gradient(to bottom, hsl(43,74%,49%), transparent)" }}
          />
        </motion.div>
      </div>

      {/* Trust badges bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center justify-center gap-3 py-4 sm:py-0">
                <b.icon className="w-5 h-5 shrink-0" style={{ color: "hsl(43,74%,49%)" }} strokeWidth={2} />
                <div>
                  <span
                    className="text-white font-semibold text-sm uppercase tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {b.label}
                  </span>
                  <span
                    className="text-white/50 text-xs ml-1 uppercase tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {b.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

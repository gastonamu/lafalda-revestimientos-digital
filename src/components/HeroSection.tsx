import { motion } from "framer-motion";
import { CheckSquare, Droplets, Shield, type LucideIcon } from "lucide-react";
import hero from "@/content/hero.json";
import PresupuestoModal from "@/components/PresupuestoModal";

const ICONS: Record<string, LucideIcon> = { CheckSquare, Droplets, Shield };

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col texture-dark overflow-hidden pt-20"
    >
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: "50%", width: "4px", transform: "rotate(8deg) translateX(120px)", background: "linear-gradient(to bottom, transparent, hsl(43,74%,49%) 30%, hsl(43,74%,49%) 70%, transparent)", opacity: 0.5 }}
      />
      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{ left: "50%", width: "2px", transform: "rotate(8deg) translateX(140px)", background: "linear-gradient(to bottom, transparent, hsl(43,74%,49%) 30%, hsl(43,74%,49%) 70%, transparent)", opacity: 0.25 }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)" }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-8 items-center py-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 z-10"
        >
          <div className="space-y-2">
            <span className="section-eyebrow">{hero.eyebrow}</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] mt-2">
              {hero.title_pre}{" "}
              <span style={{ color: "hsl(43,74%,49%)" }}>{hero.title_highlight}</span>
            </h1>
          </div>

          <p className="text-white/70 text-lg leading-relaxed max-w-lg">
            {hero.subtitle_pre}
            <span style={{ color: "hsl(43,74%,49%)" }}>{hero.subtitle_highlight}</span>
            {hero.subtitle_post}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <PresupuestoModal
              trigger={
                <button type="button" className="btn-gold">
                  {hero.cta_primary_label}
                </button>
              }
            />
            <a href="#proyectos" className="btn-outline">
              {hero.cta_secondary_label}
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 border-t border-white/10">
            {hero.stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div>
                  <p
                    className="text-3xl font-black"
                    style={s.highlight ? { color: "hsl(43,74%,49%)" } : { color: "#fff" }}
                  >
                    {s.valor}
                  </p>
                  <p
                    className="text-xs text-white/50 uppercase tracking-widest mt-0.5"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {s.label}
                  </p>
                </div>
                {i < hero.stats.length - 1 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </div>
        </motion.div>

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
              src={hero.image}
              alt={hero.image_alt}
              className="w-full object-cover object-center"
              style={{ height: "520px", width: "100%" }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div
            className="absolute top-0 left-8 w-1 h-24"
            style={{ background: "linear-gradient(to bottom, hsl(43,74%,49%), transparent)" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {hero.badges.map((b) => {
              const Icon = ICONS[b.icon] ?? Shield;
              return (
                <div key={b.label} className="flex items-center justify-center gap-3 py-4 sm:py-0">
                  <Icon className="w-5 h-5 shrink-0" style={{ color: "hsl(43,74%,49%)" }} strokeWidth={2} />
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
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

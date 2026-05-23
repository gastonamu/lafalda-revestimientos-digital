import { motion } from "framer-motion";
import { Factory, ShieldCheck, Zap, Clock, type LucideIcon } from "lucide-react";
import diferenciales from "@/content/diferenciales.json";

const ICONS: Record<string, LucideIcon> = { Factory, ShieldCheck, Zap, Clock };

const SolucionesSection = () => {
  return (
    <section id="soluciones" className="py-24 texture-mid relative overflow-hidden">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(43,74%,49% / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 space-y-3"
        >
          <span className="section-eyebrow">{diferenciales.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl text-white">
            {diferenciales.title_pre} <span style={{ color: "hsl(43,74%,49%)" }}>{diferenciales.title_highlight}</span>
          </h2>
          <span className="gold-line block" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {diferenciales.items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex gap-6 p-8 border border-white/8 transition-all duration-300 hover:border-yellow-500/30"
                style={{ backgroundColor: "#141414", borderRadius: "4px" }}
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span
                    className="text-xs font-bold"
                    style={{ color: "hsl(43,74%,49%)", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                  >
                    {item.number}
                  </span>
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "hsl(43,74%,49%)" }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3
                    className="text-white font-black text-lg"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucionesSection;

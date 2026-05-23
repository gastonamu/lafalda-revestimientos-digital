import { motion } from "framer-motion";
import { Droplets, Home, Layers, Search, type LucideIcon } from "lucide-react";
import servicios from "@/content/servicios.json";

const ICONS: Record<string, LucideIcon> = { Droplets, Home, Layers, Search };

const ServiciosSection = () => {
  return (
    <section id="servicios" className="py-24 texture-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="section-eyebrow">{servicios.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl text-white">{servicios.title}</h2>
          <span className="gold-line mx-auto block" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.items.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Droplets;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-8 border border-white/8 transition-all duration-300 hover:border-yellow-500/40 cursor-default"
                style={{
                  backgroundColor: "#181818",
                  borderRadius: "4px",
                }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "hsl(43,74%,49% / 0.12)", border: "1px solid hsl(43,74%,49% / 0.3)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "hsl(43,74%,49%)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-white font-black text-lg mb-3 leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                <div
                  className="mt-6 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "hsl(43,74%,49%)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;

import { motion } from "framer-motion";
import { Droplets, Home, Layers, Search } from "lucide-react";

const servicios = [
  {
    icon: Droplets,
    title: "Tratamiento Antihumedad",
    desc: "Solución definitiva contra manchas, hongos y eflorescencias. Productos profesionales de larga duración.",
  },
  {
    icon: Home,
    title: "Impermeabilización",
    desc: "Protección total de techos, paredes y cimientos. Sellado de grietas y fisuras con materiales de alta resistencia.",
  },
  {
    icon: Layers,
    title: "Revestimientos Decorativos",
    desc: "Paneles y placas antihumedad con diseños modernos. Solución estética y funcional para interior y exterior.",
  },
  {
    icon: Search,
    title: "Diagnóstico Técnico",
    desc: "Evaluación gratuita del problema en tu propiedad. Identificamos el origen y te damos el tratamiento exacto.",
  },
];

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
          <span className="section-eyebrow">Lo que hacemos</span>
          <h2 className="text-3xl sm:text-4xl text-white">NUESTROS SERVICIOS</h2>
          <span className="gold-line mx-auto block" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
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
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "hsl(43,74%,49% / 0.12)", border: "1px solid hsl(43,74%,49% / 0.3)" }}
              >
                <s.icon
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
              {/* Gold bottom line on hover */}
              <div
                className="mt-6 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "hsl(43,74%,49%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;

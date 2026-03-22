import { motion } from "framer-motion";
import trabajo1 from "@/assets/trabajo-1.jpg";
import trabajo2 from "@/assets/trabajo-2.jpg";
import trabajo3 from "@/assets/trabajo-3.jpg";
import trabajo4 from "@/assets/trabajo-4.jpg";
import texturaTravertino from "@/assets/textura-travertino.jpg";
import texturaPiedra from "@/assets/textura-piedra.jpg";

const proyectos = [
  { img: trabajo1, lugar: "La Falda", desc: "Living con revestimiento piedra" },
  { img: trabajo2, lugar: "Villa Giardino", desc: "Fachada exterior completa" },
  { img: trabajo3, lugar: "Cosquín", desc: "Baño con paneles antihumedad" },
  { img: trabajo4, lugar: "La Falda", desc: "Local comercial revestido" },
  { img: texturaTravertino, lugar: "Cruz Chica", desc: "Escalera interior travertino" },
  { img: texturaPiedra, lugar: "La Falda", desc: "Jardín exterior piedra rústica" },
];

const ProyectosSection = () => {
  return (
    <section id="proyectos" className="py-24 texture-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="section-eyebrow">Trabajos realizados</span>
          <h2 className="text-3xl sm:text-4xl text-white">NUESTROS PROYECTOS</h2>
          <span className="gold-line mx-auto block" />
          <p className="text-white/50 mx-auto mt-4 text-sm max-w-md">
            Cada proyecto es una solución real. Trabajo garantizado en toda la región.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3"
          style={{ gridAutoRows: "220px" }}
        >
          {proyectos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{ borderRadius: "4px" }}
            >
              <img
                src={p.img}
                alt={`${p.desc} – Carrera Revestimientos`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Location badge */}
              <div className="absolute top-3 left-3">
                <span
                  className="inline-block text-white text-xs font-bold uppercase tracking-widest px-3 py-1"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    border: "1px solid rgba(212,175,55,0.4)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {p.lugar}
                </span>
              </div>

              {/* Description on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                >
                  {p.desc}
                </p>
                <div
                  className="mt-2 h-0.5 w-8"
                  style={{ backgroundColor: "hsl(43,74%,49%)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;

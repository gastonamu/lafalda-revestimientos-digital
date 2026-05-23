import { motion } from "framer-motion";
import problemas from "@/content/problemas.json";
import { waLink, waMensajes } from "@/lib/wa";

const ProblemasSection = () => {
  return (
    <section className="py-20 texture-mid">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-3"
        >
          <span className="section-eyebrow">{problemas.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl text-white">{problemas.title}</h2>
          <span className="gold-line mx-auto block" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {problemas.items.map((p, i) => (
            <motion.div
              key={p.title + p.sub}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: "4px" }}
            >
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={p.img}
                  alt={`${p.title} ${p.sub}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: "hsl(43,74%,49%)" }}
                />
              </div>
              <div
                className="p-3 text-center"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <p
                  className="text-white font-black text-sm leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                >
                  {p.title}
                  {p.sub && (
                    <>
                      <br />
                      <span style={{ color: "hsl(43,74%,49%)" }}>{p.sub}</span>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={waLink(waMensajes.diagnostico)} target="_blank" rel="noopener noreferrer" className="btn-gold">
            {problemas.cta_primary_label}
          </a>
          <a href="#proyectos" className="btn-outline">
            {problemas.cta_secondary_label}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemasSection;

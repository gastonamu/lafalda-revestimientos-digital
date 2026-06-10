import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import testimonios from "@/content/testimonios.json";

const TestimoniosSection = () => {
  return (
    <section id="testimonios" className="py-24 texture-dark relative overflow-hidden">
      <div
        className="absolute left-0 top-1/3 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
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
          <span className="section-eyebrow">{testimonios.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl text-white">
            {testimonios.title_pre} <span style={{ color: "hsl(43,74%,49%)" }}>{testimonios.title_highlight}</span>
          </h2>
          <span className="gold-line block" />
          {testimonios.subtitle && (
            <p className="text-white/50 text-base leading-relaxed max-w-2xl pt-2">
              {testimonios.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.items.map((item, i) => (
            <motion.div
              key={item.nombre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col gap-5 p-8 border border-white/8 transition-all duration-300 hover:border-yellow-500/30"
              style={{ backgroundColor: "#141414", borderRadius: "4px" }}
            >
              <Quote
                className="w-8 h-8 shrink-0"
                style={{ color: "hsl(43,74%,49%)", opacity: 0.5 }}
                strokeWidth={1.5}
              />

              <p className="text-white/60 text-sm leading-relaxed flex-1">
                “{item.texto}”
              </p>

              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4"
                    style={{ color: "hsl(43,74%,49%)", fill: "hsl(43,74%,49%)" }}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <div className="pt-2 border-t border-white/8">
                <p
                  className="text-white font-black text-base"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                >
                  {item.nombre}
                </p>
                <p className="text-white/40 text-xs mt-1">{item.lugar}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;

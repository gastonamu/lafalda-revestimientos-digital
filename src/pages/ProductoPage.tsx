import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Droplets,
  Layers,
  Home,
  Search,
  Factory,
  Zap,
  Clock,
  CheckSquare,
  Wrench,
  Flame,
  Snowflake,
  Volume2,
  Hammer,
  Ruler,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProducto } from "@/lib/productos";
import { waLink, waMensajes } from "@/lib/wa";

const ICONS: Record<string, LucideIcon> = {
  Shield,
  Droplets,
  Layers,
  Home,
  Search,
  Factory,
  Zap,
  Clock,
  CheckSquare,
  Wrench,
  Flame,
  Snowflake,
  Volume2,
  Hammer,
  Ruler,
};

const ProductoPage = () => {
  const { slug } = useParams();
  const producto = getProducto(slug);

  if (!producto) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 texture-dark overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 z-10"
          >
            <Link
              to="/#productos"
              className="inline-flex items-center gap-1 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <ChevronLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            <div className="space-y-3">
              <span className="section-eyebrow">{producto.eyebrow}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95]">
                {producto.titulo_pre}{" "}
                <span style={{ color: "hsl(43,74%,49%)" }}>
                  {producto.titulo_highlight}
                </span>
              </h1>
              <span className="gold-line block" />
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              {producto.subtitulo}
            </p>

            <a
              href={waLink(`Hola, quiero un presupuesto de ${producto.nombre}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              {producto.cta_label}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            <div
              className="relative overflow-hidden"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <img
                src={producto.imagen_hero}
                alt={producto.imagen_hero_alt}
                className="w-full object-cover"
                style={{ height: "480px" }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Descripción */}
      {producto.descripcion && (
        <section className="py-20 texture-mid">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3 mb-8"
            >
              <span className="section-eyebrow">Sobre el producto</span>
              <span className="gold-line block" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 text-lg leading-relaxed whitespace-pre-line"
            >
              {producto.descripcion}
            </motion.p>
          </div>
        </section>
      )}

      {/* Beneficios */}
      {producto.beneficios?.length > 0 && (
        <section className="py-20 texture-dark">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 space-y-3"
            >
              <span className="section-eyebrow">Beneficios</span>
              <h2 className="text-3xl sm:text-4xl text-white">
                ¿POR QUÉ ELEGIRLO?
              </h2>
              <span className="gold-line block" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {producto.beneficios.map((b, i) => {
                const Icon = ICONS[b.icon] ?? Shield;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="p-8 border border-white/8 transition-colors duration-300 hover:border-yellow-500/30"
                    style={{ backgroundColor: "#141414", borderRadius: "4px" }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: "rgba(212,175,55,0.08)",
                        border: "1px solid rgba(212,175,55,0.2)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "hsl(43,74%,49%)" }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className="text-white font-black text-lg mb-2"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Galería */}
      {producto.galeria?.length > 0 && (
        <section className="py-20 texture-mid">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 space-y-3"
            >
              <span className="section-eyebrow">Aplicaciones</span>
              <h2 className="text-3xl sm:text-4xl text-white">EN OBRA</h2>
              <span className="gold-line block" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3" style={{ gridAutoRows: "220px" }}>
              {producto.galeria.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative overflow-hidden"
                  style={{ borderRadius: "4px" }}
                >
                  <img
                    src={g.img}
                    alt={g.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Especificaciones */}
      {producto.especificaciones?.length > 0 && (
        <section className="py-20 texture-dark">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 space-y-3"
            >
              <span className="section-eyebrow">Ficha técnica</span>
              <h2 className="text-3xl sm:text-4xl text-white">
                ESPECIFICACIONES
              </h2>
              <span className="gold-line block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-white/8"
              style={{ backgroundColor: "#141414", borderRadius: "4px" }}
            >
              <dl className="divide-y divide-white/8">
                {producto.especificaciones.map((e) => (
                  <div
                    key={e.label}
                    className="grid grid-cols-2 gap-4 px-6 py-4"
                  >
                    <dt
                      className="text-white/50 text-sm uppercase tracking-widest"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {e.label}
                    </dt>
                    <dd className="text-white text-sm">{e.valor}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {producto.faq?.length > 0 && (
        <section className="py-20 texture-mid">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 space-y-3"
            >
              <span className="section-eyebrow">Preguntas frecuentes</span>
              <h2 className="text-3xl sm:text-4xl text-white">FAQ</h2>
              <span className="gold-line block" />
            </motion.div>

            <div className="space-y-4">
              {producto.faq.map((f, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group border border-white/8 p-6 cursor-pointer transition-colors hover:border-yellow-500/30"
                  style={{ backgroundColor: "#141414", borderRadius: "4px" }}
                >
                  <summary
                    className="text-white font-bold text-base list-none flex items-center justify-between"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
                  >
                    {f.pregunta}
                    <span
                      className="text-yellow-500 transition-transform group-open:rotate-45 text-2xl leading-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-white/60 text-sm leading-relaxed mt-4">
                    {f.respuesta}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-20 texture-dark">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl text-white">
            ¿LO QUERÉS EN <span style={{ color: "hsl(43,74%,49%)" }}>TU OBRA</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Pedinos presupuesto sin compromiso. Hacemos diagnóstico previo y te
            recomendamos la mejor solución para tu caso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink(`Hola, quiero un presupuesto de ${producto.nombre}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Pedir Presupuesto
            </a>
            <Link to="/#proyectos" className="btn-outline">
              Ver Trabajos Realizados
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ProductoPage;

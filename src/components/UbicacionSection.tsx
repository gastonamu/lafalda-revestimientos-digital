import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ubicacion from "@/content/ubicacion.json";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const UbicacionSection = () => {
  const position: [number, number] = [ubicacion.latitud, ubicacion.longitud];

  return (
    <section id="ubicacion" className="py-24 texture-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">{ubicacion.eyebrow}</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Archivo Black, sans-serif", color: "#fff" }}
          >
            {ubicacion.title_pre} <span style={{ color: "hsl(43,74%,49%)" }}>{ubicacion.title_highlight}</span>
          </h2>
          <div className="gold-line mx-auto mt-4" />
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
            {ubicacion.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-lg" style={{ height: 400 }}>
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={markerIcon}>
                <Popup>
                  <strong>{ubicacion.popup_titulo}</strong>
                  <br />
                  {ubicacion.popup_direccion}
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(24,24,24,0.8)" }}>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6" style={{ color: "hsl(43,74%,49%)" }} />
                <h3 className="text-white font-semibold text-lg">Dirección</h3>
              </div>
              <p className="text-gray-400">
                {ubicacion.direccion_linea_1}<br />
                {ubicacion.direccion_linea_2}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(24,24,24,0.8)" }}>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6" style={{ color: "hsl(43,74%,49%)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <h3 className="text-white font-semibold text-lg">Horarios</h3>
              </div>
              <p className="text-gray-400">
                <span className="text-white/70 font-medium">Local:</span> {ubicacion.horario_local}<br />
                <span className="text-white/70 font-medium">WhatsApp:</span> {ubicacion.horario_whatsapp}
              </p>
            </div>

            <a
              href={ubicacion.google_maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center py-3 rounded-xl font-semibold tracking-wide"
            >
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UbicacionSection;

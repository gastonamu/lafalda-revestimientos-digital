import global from "@/content/global.json";

export function waLink(mensaje: string): string {
  return `https://wa.me/${global.whatsapp_numero}?text=${encodeURIComponent(mensaje)}`;
}

export const waMensajes = {
  presupuesto: global.whatsapp_mensaje_presupuesto,
  diagnostico: global.whatsapp_mensaje_diagnostico,
  consulta: global.whatsapp_mensaje_consulta,
};

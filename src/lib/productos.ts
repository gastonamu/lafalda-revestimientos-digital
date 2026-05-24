// Carga dinámicamente todos los JSON en src/content/productos/ al hacer build.
// El cliente puede sumar/quitar productos desde Decap sin tocar este archivo —
// Vite escanea la carpeta y los incluye en el bundle automáticamente.

export type Beneficio = {
  icon: string;
  title: string;
  desc: string;
};

export type ItemGaleria = {
  img: string;
  alt: string;
};

export type Especificacion = {
  label: string;
  valor: string;
};

export type FAQ = {
  pregunta: string;
  respuesta: string;
};

export type Producto = {
  slug: string;
  nombre: string;
  orden: number;
  eyebrow: string;
  titulo_pre: string;
  titulo_highlight: string;
  subtitulo: string;
  imagen_hero: string;
  imagen_hero_alt: string;
  descripcion: string;
  cta_label: string;
  beneficios: Beneficio[];
  galeria: ItemGaleria[];
  especificaciones: Especificacion[];
  faq: FAQ[];
};

const modules = import.meta.glob<{ default: Producto }>(
  "../content/productos/*.json",
  { eager: true }
);

export const productos: Producto[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.orden - b.orden);

export const productosBySlug: Record<string, Producto> = Object.fromEntries(
  productos.map((p) => [p.slug, p])
);

export function getProducto(slug: string | undefined): Producto | undefined {
  if (!slug) return undefined;
  return productosBySlug[slug];
}

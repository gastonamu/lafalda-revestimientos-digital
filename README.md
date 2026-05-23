# Carrera Revestimientos

Sitio web institucional de **Carrera Revestimientos**, fábrica y empresa de placas decorativas antihumedad para techos y paredes, ubicada en La Falda (Valle de Punilla, Córdoba, Argentina).

Producción: https://www.carrerarevestimiento.com.ar

Es una SPA estática de una sola página (con secciones: hero, problemas, diferenciales, catálogo, galería, ubicación y footer) más una página `*` para 404.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn-ui
- react-router-dom (BrowserRouter)
- Leaflet / react-leaflet (mapa de ubicación)
- framer-motion, lucide-react, sonner

## Desarrollo local

Requiere Node 20+ y npm.

```sh
npm install
npm run dev      # dev server en http://localhost:8080
npm run build    # build de producción → dist/
npm run preview  # servir dist/ localmente
npm run lint
npm run test
```

## Estructura

- `src/pages/Index.tsx` — página principal, compone todas las secciones
- `src/components/*Section.tsx` — secciones del home (contenido hoy está hardcodeado en cada una)
- `src/components/ui/` — componentes shadcn-ui
- `public/` — assets estáticos (logo, favicon)

## Deploy en Coolify (VPS)

El sitio se sirve como **Static Site** en Coolify:

- **Build pack**: Static
- **Install command**: `npm ci`
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA fallback**: activar (todas las rutas deben caer en `index.html` para que react-router funcione al refrescar)
- **HTTPS**: Let's Encrypt automático tras apuntar el dominio a la IP de la VPS

## Gestión de contenido

Actualmente los textos, productos, imágenes y datos de contacto viven dentro de los componentes `*Section.tsx`. Cambiar contenido = editar el `.tsx` y redeploy.

Plan a futuro: integrar **Decap CMS** bajo `/admin` con los contenidos movidos a archivos JSON/MD en este mismo repo, autenticado con GitHub OAuth.

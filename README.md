# BiAse IT Solutions — Desarrollo de software profesional

Bienvenido a la codebase del sitio web de BiAse IT Solutions. Aquí encontrarás una versión moderna de la web corporativa creada con tecnologías actuales (React + TypeScript + Vite + Tailwind) pensada para presentar servicios, casos y contacto con clientes.

Este repositorio es apto tanto para mantener la presencia pública de la empresa como para servir de plantilla ligera a proyectos de clientes.

## ¿Qué hacemos?

- Desarrollo de productos web y mobile a la medida (SaaS, e-commerce, paneles administrativos).
- Integración de sistemas y APIs, automatización de flujos y sincronización entre plataformas.
- Personalización y mejora de experiencias de usuario (UX/UI), performance y accesibilidad.
- Consultoría tecnológica, roadmaps y acompañamiento en la transformación digital.
- Contratación y colocación de talento IT especializado (contratos por proyecto y por retención).

## Qué hay en este repositorio

- `src/` — Código fuente del sitio (componentes React, páginas y assets).
- `src/components/Services.tsx` — Componente principal con la sección de servicios (cards clicables que navegan a `/services#<id>`).
- `src/components/ServiceDetails.tsx` — Página de detalles de servicios (lee la hash en la URL y hace scroll al apartado correspondiente).
- `src/components/Navigation.tsx` y `src/components/Footer.tsx` — Navegación superior y pie de página. El logo y los enlaces usan navegación basada en hash para desplazamiento suave a secciones.
- `index.html`, `vite.config.ts`, `tailwind.config.ts` — Configuración del bundler y CSS.

## Tecnologías (resumen)

Principales tecnologías y bibliotecas incluidas en el proyecto:

- React 18 + TypeScript — Frontend moderno, tipado y escalable.
- Vite — Bundler y servidor de desarrollo ultrarrápido.
- Tailwind CSS (+ plugins) — Sistema de utilidades para estilos rápidos y consistentes.
- Radix UI — Componentes accesibles y base para los componentes UI del repo.
- react-router-dom — Enrutado SPA y manejo de hashes (scroll a secciones).
- @tanstack/react-query — Gestión de datos y caché (si se usa en partes del proyecto).
- lucide-react / react-icons — Iconografía.
- Recharts / three.js — Visualización y gráficos (opcional en la UI).
- react-hook-form + zod — Formularios y validaciones.

Dev tools:

- TypeScript, ESLint, Tailwind, PostCSS, Vite.

(_Consulta `package.json` para la lista completa de dependencias y versiones._)

## Requisitos (local)

- Node.js (recomendado v18 o superior) y npm. En Windows usa `cmd.exe` o PowerShell con permisos adecuados.

## Ejecutar el proyecto (Windows — cmd.exe)

1) Clonar el repositorio (si aún no lo has hecho):

```cmd
git clone https://github.com/BiAseITSolution/biase.git
cd "webpage Lovable"
```

2) Instalar dependencias:

```cmd
npm install
```

3) Iniciar el servidor de desarrollo:

```cmd
npm run dev
```

Abre la URL que te muestre Vite (normalmente `http://localhost:8080`) en tu navegador.

4) Build y preview (producción):

```cmd
npm run build
npm run preview
```

## Notas sobre navegación y servicios

- Los cards de la sección de servicios están configurados para navegar a la ruta `/services#<id>` (por ejemplo `/services#ecommerce`). La página `ServiceDetails` lee la parte `hash` de la URL y hace scroll al bloque correspondiente.
- Si necesitas modificar títulos o contenido de servicios, edita `src/components/Services.tsx` y `src/components/ServiceDetails.tsx`.
- Para cambiar el comportamiento del logo (ej. tamaño o redondeo), revisa `src/components/Navigation.tsx` y `src/components/Footer.tsx`.

## Estructura sugerida para despliegue

- Deploy estático (Netlify, Vercel, Cloudflare Pages): construir con `npm run build` y publicar la carpeta `dist` o la salida que genere Vite.
- Si necesitas configuración de servidor o redirecciones SPA (por ejemplo en Netlify), añade las reglas necesarias para reenviar todas las rutas a `index.html`.

## Contribuciones y estilo de trabajo

Este repositorio está preparado para desarrollo colaborativo.

- Abrir issues para bugs o propuestas de mejora.
- Crear pull requests desde ramas con nombres descriptivos (`feature/xyz`, `fix/xyz`).
- Seguir convenciones de formato y lint (hay scripts de ESLint incluidos).

## Contacto y clientes

Si quieres una cotización, una revisión técnica o un proyecto a medida, escríbenos a: contacto@biase.example (o usa el formulario en la web). También podemos hacer una llamada técnica para evaluar el alcance y tiempos.

## Licencia

Propiedad de BiAse IT Solutions C.A todos los derechos reservados



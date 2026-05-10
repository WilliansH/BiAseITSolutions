# Docker — BiAse IT Solutions

Guía para correr la página localmente con Docker. Hay **dos entornos** según lo que necesites hacer:

| Entorno | Archivo | Puerto | Cuándo usarlo |
|---|---|---|---|
| **Local** (hot reload) | `docker-compose.local.yml` | `5173` | Editar código y ver cambios al instante |
| **Staging** (build completo) | `docker-compose.staging.yml` | `3000` | Probar el build final antes de subir a Vercel |

---

## Requisitos previos

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo
- Node.js no es necesario tener instalado (Docker lo maneja)

---

## Configuración inicial (solo la primera vez)

1. Copia el archivo de variables de entorno:

```bash
# Para desarrollo local
cp .env.example .env.local

# Para staging
cp .env.example .env.staging
```

2. Abre cada archivo y reemplaza los valores de placeholder con tus claves reales de EmailJS:

```
VITE_EMAILJS_PUBLIC_KEY=tu_clave_real
VITE_EMAILJS_SERVICE_ID=tu_service_real
VITE_EMAILJS_TEMPLATE_ID=tu_template_real
```

> Las claves las encuentras en [emailjs.com](https://www.emailjs.com/) → tu cuenta → Account → API Keys.
>
> **Importante:** `.env.local` y `.env.staging` están en `.gitignore` — nunca llegarán al repositorio.

---

## Entorno 1: Desarrollo Local (hot reload)

Úsalo cuando estés editando código. Cada cambio que guardes en `src/` se refleja automáticamente en el navegador **sin reiniciar nada**.

### Encender

```bash
docker compose -f docker-compose.local.yml up
```

La primera vez tarda un par de minutos mientras descarga la imagen de Node y instala dependencias. Las veces siguientes es casi instantáneo.

### Acceder

Abre el navegador en: **http://localhost:5173**

### Apagar

```bash
# En la terminal donde está corriendo: Ctrl + C
# O desde otra terminal:
docker compose -f docker-compose.local.yml down
```

### Notas importantes

- Los cambios en `src/` se ven **de inmediato** (hot reload activo).
- Si agregas un paquete nuevo con `npm install`, debes reconstruir la imagen:
  ```bash
  docker compose -f docker-compose.local.yml up --build
  ```
- Si el hot reload no responde después de guardar un archivo, espera 2-3 segundos — el polling está configurado para Docker sobre macOS/Windows.

---

## Entorno 2: Staging (build de producción)

Úsalo para verificar que el build final se ve y funciona exactamente igual que en Vercel **antes de hacer un deploy**. No tiene hot reload — para ver cambios hay que reconstruir.

### Encender

```bash
docker compose -f docker-compose.staging.yml up --build
```

El `--build` es necesario cada vez que quieras ver cambios, porque este entorno compila la app completa.

### Acceder

Abre el navegador en: **http://localhost:3000**

### Apagar

```bash
docker compose -f docker-compose.staging.yml down
```

---

## Comandos útiles

```bash
# Ver qué contenedores están corriendo
docker ps

# Ver los logs de un contenedor
docker logs biase-dev-local   # local
docker logs biase-staging     # staging

# Borrar todos los contenedores y volúmenes del proyecto (reset completo)
docker compose -f docker-compose.local.yml down -v
docker compose -f docker-compose.staging.yml down -v
```

---

## Seguridad — qué va y qué no va al repositorio

| Archivo | ¿Al repo? | Por qué |
|---|---|---|
| `.env.example` | ✅ Sí | Solo tiene placeholders, no claves reales |
| `.env.local` | ❌ No | Tiene tus claves reales (EmailJS) |
| `.env.staging` | ❌ No | Tiene tus claves reales (EmailJS) |
| `Dockerfile` | ✅ Sí | No contiene secretos |
| `Dockerfile.dev` | ✅ Sí | No contiene secretos |
| `docker-compose.local.yml` | ✅ Sí | Las claves las lee de `.env.local` |
| `docker-compose.staging.yml` | ✅ Sí | Las claves las lee de `.env.staging` |
| `nginx.conf` | ✅ Sí | Configuración pública |

Las claves de producción en Vercel se configuran en el panel de Vercel → Settings → Environment Variables. Nunca en el código.

---

## Flujo de trabajo recomendado

```
Editar código  →  docker-compose.local.yml  →  Ver cambios en localhost:5173
                                                        ↓
                                              ¿Todo se ve bien?
                                                        ↓
                                       docker-compose.staging.yml  →  Verificar build en localhost:3000
                                                        ↓
                                              ¿El build está OK?
                                                        ↓
                                              git push  →  Vercel despliega automáticamente
```

# ============================================================
# Stage 1: BUILD
# Usa Node 20 Alpine para compilar la app React + Vite
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia solo los archivos de dependencias primero (cache layer)
COPY package*.json ./

# Instala dependencias
RUN npm ci

# Variables de entorno necesarias en tiempo de BUILD
# Vite las bake dentro del JS — nunca van al repo, se pasan
# desde docker-compose.staging.yml via args
ARG VITE_EMAILJS_PUBLIC_KEY
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ENV VITE_EMAILJS_PUBLIC_KEY=$VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=$VITE_EMAILJS_SERVICE_ID
ENV VITE_EMAILJS_TEMPLATE_ID=$VITE_EMAILJS_TEMPLATE_ID

# Copia el resto del código fuente
COPY . .

# Compila la app para producción
RUN npm run build

# ============================================================
# Stage 2: SERVE
# Usa nginx Alpine liviano para servir el build estático
# ============================================================
FROM nginx:stable-alpine AS runner

# Copia la config de nginx (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el build de Vite desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]

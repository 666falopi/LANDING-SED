# Publicación de SED

Sitio principal: https://santiagoestudio.com (sin www).

- Repositorio: 666falopi/LANDING-SED.
- Worker: landing-sed.
- Cloudflare Workers Builds está conectado a la rama main.
- Cada push a main ejecuta npm run build y npx wrangler deploy.
- Los archivos estáticos se publican desde dist según wrangler.jsonc.
- El dominio principal se administra en Domains del Worker en Cloudflare.
- GitHub Pages conserva su compilación con GITHUB_PAGES=true y la base /LANDING-SED.
- El desarrollo local usa ahora http://localhost:4321/.

Los formularios siguen sin envío ni carga de archivos; el contacto disponible es el enlace de correo.

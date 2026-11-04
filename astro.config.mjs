import { defineConfig } from 'astro/config';
const githubPages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({
  site: githubPages ? 'https://666falopi.github.io' : 'https://santiagoestudio.com',
  base: githubPages ? '/LANDING-SED' : '/',
  output: 'static',
});

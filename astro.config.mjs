// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // usa a versão serverless para Vercel

export default defineConfig({
  output: 'server', // necessário para Vercel funcionar correctamente
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8
  })
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/server';

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({
    // Desativa o web analytics para evitar o erro 404 do script
    webAnalytics: {
      enabled: false,
    },
    maxDuration: 8,
  }),
});

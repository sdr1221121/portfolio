// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // necessário para Vercel
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8
  }),
  integrations: [tailwind()]
});

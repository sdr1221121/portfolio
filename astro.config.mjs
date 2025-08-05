// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel({
    runtime: 'nodejs18.x',
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8
  })
});

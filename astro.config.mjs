import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      proxy: {
        '/api': 'http://localhost:3000', // Redirige las solicitudes que comiencen con /api al servidor backend
      }
    },
  },

  output: 'server',
  adapter: vercel(),
  integrations: [tailwind()]
});
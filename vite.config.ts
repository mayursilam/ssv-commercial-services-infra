import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          services: path.resolve(__dirname, 'services.html'),
          security: path.resolve(__dirname, 'security.html'),
          housekeeping: path.resolve(__dirname, 'housekeeping.html'),
          infrastructure: path.resolve(__dirname, 'infrastructure.html'),
          industries: path.resolve(__dirname, 'industries.html'),
          whySsv: path.resolve(__dirname, 'why-ssv.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          notFound: path.resolve(__dirname, '404.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

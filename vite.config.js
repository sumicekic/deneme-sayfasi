// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        // Single Page App (SPA)
        main: resolve(__dirname, 'index.html'),
        
        /* Aşağıdaki konfigürasyonlar, çoklu web sayfası için kullanılmalıdır! */
        // about: resolve(__dirname, 'src/html/about.html'),
        // contact: resolve(__dirname, 'src/html/contact.html'),
        // products: resolve(__dirname, 'src/html/products.html'),
        // services: resolve(__dirname, 'src/html/services.html'),
        // productDetails: resolve(__dirname, 'src/html/products-details.html'),
      }
    }
  }
});
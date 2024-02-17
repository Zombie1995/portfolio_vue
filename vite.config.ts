import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), tsconfigPaths()],
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true,
    },
  },
});

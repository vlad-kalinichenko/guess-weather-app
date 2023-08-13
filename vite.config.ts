import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: path.resolve(__dirname, './src/assets'),
      models: path.resolve(__dirname, './src/models'),
      store: path.resolve(__dirname, './src/store'),
      styles: `${path.resolve(__dirname, './src/styles')}`,
      components: `${path.resolve(__dirname, './src/components')}`,
      selectors: `${path.resolve(__dirname, './src/selectors')}`,
      hooks: `${path.resolve(__dirname, './src/hooks')}`,
      services: `${path.resolve(__dirname, './src/services')}`,
      pages: path.resolve(__dirname, './src/pages'),
      constants: path.resolve(__dirname, './src/constants')
    }
  },
  envDir: './'
});

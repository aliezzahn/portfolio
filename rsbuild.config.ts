import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: 'build',
    },
    assetPrefix: '/', // Define publicPath here
  },
  html: {
    favicon: './public/favicon.ico',
    template: './public/index.html',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
        type: 'css',
      },
    ],
  },
});

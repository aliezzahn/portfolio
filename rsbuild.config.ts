import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginMdx } from '@rsbuild/plugin-mdx';
import { pluginNodePolyfill } from '@rsbuild/plugin-node-polyfill';

export default defineConfig({
  plugins: [pluginReact(), pluginMdx(), pluginNodePolyfill()],
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
  source: {
    define: {
      'process.env': JSON.stringify(process.env),
    },
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

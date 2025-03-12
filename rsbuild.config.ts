import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: { distPath: { root: 'build' } },
  html: {
    title: 'aliezzahn',
    meta: {
      description: "aliezzahn's Portfolio",
    },
    appIcon: {
      name: 'aliezzahn',
      icons: [
        {
          src: 'https://digibrandco.com/_next/image?url=%2Fdigibrand_logo.jpg&w=1200&q=75',
          size: 192,
        },
      ],
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

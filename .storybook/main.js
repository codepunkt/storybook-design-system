module.exports = {
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.output.hashFunction = 'xxhash64';
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-a11y'],
};

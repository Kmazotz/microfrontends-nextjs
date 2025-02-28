const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,js,jsx}'),
    join(__dirname, '../../libs/ui/src/**/*!(*.stories|*.spec).{ts,tsx,html,js,jsx}'),
    join(__dirname, '../../apps/management/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,js,jsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

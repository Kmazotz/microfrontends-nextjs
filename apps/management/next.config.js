/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// @ts-expect-error
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    main: `main@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  transpilePackages: ["@ui"],
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    config.plugins.push(
        new NextFederationPlugin({
          name: 'management',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(options.isServer),
          extraOptions:{},
          exposes: {
            './welcome': './pages/welcome',
          },
          shared:{},
        })
    );

    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

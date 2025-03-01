/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// @ts-expect-error
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    main: `main-app@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
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
    config.output.uniqueName = 'management-app';
    config.plugins.push(
        new NextFederationPlugin({
          name: 'management-app',
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

const plugins = [ withNx ];

module.exports = composePlugins(...plugins)(nextConfig);

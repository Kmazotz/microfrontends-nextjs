/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// @ts-expect-error
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    management: `management-app@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: { svgr: false },
  transpilePackages: ["@ui"],
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    config.output.uniqueName = 'main-app';
    config.plugins.push(
        new NextFederationPlugin({
          name: 'main-app',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(options.isServer),
          extraOptions: { exposePages: true },
          exposes: {
            './toastStore': './stores/toast.store',
          },
          shared: ["zustand"],
        })
    );

    return config;
  }
};

const plugins = [ withNx ];

module.exports = composePlugins(...plugins)(nextConfig);

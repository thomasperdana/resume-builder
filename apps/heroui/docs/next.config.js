const withContentlayer = require("next-contentlayer2").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@heroui/react", "@heroui/theme"],
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  redirects: require("./next-redirect.js"),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opencollective-production.s3.us-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "heroui.com",
      },
      {
        protocol: "https",
        hostname: "heroui-assets.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        destination: "https://us-assets.i.posthog.com/static/:path*",
        source: "/ingest/static/:path*",
      },
      {
        destination: "https://us.i.posthog.com/:path*",
        source: "/ingest/:path*",
      },
      {
        destination: "https://us.i.posthog.com/decide",
        source: "/ingest/decide",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
      output: 'export',
   

  images: {
    domains: ["https://nexthubsolutions.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

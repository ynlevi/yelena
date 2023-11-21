/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.ftlv19-2.fna.fbcdn.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

module.exports = nextConfig;

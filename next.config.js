/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/save-data",
        destination:
          "https://script.google.com/macros/s/AKfycbyg4AXuSxyvRJk5_yBDFso6EMelWD5SUMnGWExaPswP0QL7N1hU_u4Kkjh3Qz9_d6MW/exec",
      },
    ];
  },
};

module.exports = nextConfig;

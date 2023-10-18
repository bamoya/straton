/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/save-data",
        destination:
          "https://script.google.com/macros/s/AKfycbxCkryxXjR1J8cohnGYE3ufdlj5At1IFcwSBqgZ9LiK_UYuBaUWH7QMg5I5TXUYuGte6A/exec",
      },
    ];
  },
};

module.exports = nextConfig;

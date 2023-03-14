/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  }, i18n: {
    locales: ["es-ES", "pt-BR", "en-US"],
    defaultLocale: "pt-BR"
  },
};

module.exports = nextConfig;

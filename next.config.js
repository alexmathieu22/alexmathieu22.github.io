/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({ assetPrefix: "./" });

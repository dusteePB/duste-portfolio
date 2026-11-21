/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  outputFileTracingRoot: process.cwd(),
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/indexgame.html', destination: '/indexgame' },
      { source: '/indexhistory.html', destination: '/indexhistory' },
      { source: '/indexmv.html', destination: '/indexmv' },
      { source: '/index_shows.html', destination: '/index_shows' },
    ];
  },
  outputFileTracingIncludes: {
    '/*': ['./content/**/*'],
  },
};

export default nextConfig;

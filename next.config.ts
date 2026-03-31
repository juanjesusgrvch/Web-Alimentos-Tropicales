import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://apis.google.com https://www.gstatic.com https://*.firebaseapp.com https://cdnjs.cloudflare.com;",
              "frame-src 'self' https://challenges.cloudflare.com https://*.firebaseapp.com;",
              "worker-src 'self' blob:;",
              "connect-src 'self' https://challenges.cloudflare.com https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://www.gstatic.com;",
            ].join(" "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
  "https://challenges.cloudflare.com",
  "https://www.gstatic.com",
  "https://cdnjs.cloudflare.com",
].join(" ");

const frameSrc = [
  "'self'",
  "https://challenges.cloudflare.com",
  "https://*.firebaseapp.com",
  "https://www.google.com",
].join(" ");

const connectSrc = [
  "'self'",
  "https://challenges.cloudflare.com",
  "https://*.googleapis.com",
  "https://identitytoolkit.googleapis.com",
  "https://securetoken.googleapis.com",
  "https://*.firebaseio.com",
  "wss://*.firebaseio.com",
  "https://firebasestorage.googleapis.com",
  "https://www.gstatic.com",
].join(" ");

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  `frame-src ${frameSrc}`,
  `connect-src ${connectSrc}`,
  "worker-src 'self' blob:",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https:",
  "font-src 'self' data: https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: csp,
          },
        ],
      },
    ];
  },
};

export default nextConfig;

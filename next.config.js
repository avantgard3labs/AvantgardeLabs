/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        async rewrites() {
            return [
                {
                    source: "/",
                    destination: "/dev",
                },
            ];
        },
    },
};

module.exports = nextConfig;

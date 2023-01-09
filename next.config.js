/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        // exportPathMap: () => {
        //     return {
        //         "/": { page: "/index" },
        //         "/dev": { page: "/index" },
        //     };
        // },
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

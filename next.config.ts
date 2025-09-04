import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        SANITY_TOKEN: process.env.SANITY_TOKEN,
    },
    images: {
        domains: ["optceilingevent.ru"],
    },
};

export default nextConfig;

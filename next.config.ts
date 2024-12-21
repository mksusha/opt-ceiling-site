import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

module.exports = {
    env: {
        SANITY_TOKEN: process.env.SANITY_TOKEN,
    },
};

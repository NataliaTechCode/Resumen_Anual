import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [react()]
});
import vuetify from "vite-plugin-vuetify";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: "123",

    // Keys within public, will be also exposed to the client-side
    public: {
      appUrl: process.env.APP_URL || "localhost:3000",
    }
  },

  // import styles
  css: ["@/assets/main.scss"],

  // enable takeover mode
  typescript: { shim: false },

  build: { transpile: ["vuetify"] },

  modules: [
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

  app: {
    head: {
      title: process.env.APP_TITLE,
      // titleTemplate: "%s | Vuetify 3 + Nuxt 3 Starter",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: process.env.APP_URL },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: process.env.APP_DESCRIPTION,
        },
        { property: "og:site_name", content: process.env.APP_TITLE },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: process.env.APP_URL,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: process.env.APP_STARTER_IMAGE,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: process.env.APP_TITLE,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: process.env.APP_DESCRIPTION,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: process.env.APP_STARTER_IMAGE,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: process.env.APP_URL,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: process.env.APP_TITLE,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: process.env.APP_DESCRIPTION,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: process.env.APP_STARTER_IMAGE,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: process.env.APP_SHORT_TITLE,
      author: "JalalLinuX",
      theme_color: "#4f46e5",
      description: process.env.APP_DESCRIPTION,
    },
    manifest: {
      name: process.env.APP_SHORT_TITLE,
      short_name: process.env.APP_SHORT_TITLE,
      theme_color: "#4f46e5",
      description: process.env.APP_DESCRIPTION,
    },
  },
});

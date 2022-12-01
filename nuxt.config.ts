import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix",
        parsePages: false,
        langDir: "locales/",
        lazy: true,
        pages: {
          index: {
            en: "/",
            pt: "/",
          },
          contact: {
            en: "/contact",
            pt: "/contato",
          },
          blog: {
            en: "/blog",
            pt: "/blog",
          },
          creations: {
            en: "/creations",
            pt: "/criacoes",
          },
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root",
          alwaysRedirect: true,
        },
        locales: [
          { iso: "en-US", code: "en", file: "en.json" },
          { iso: "pt-BR", code: "pt", file: "pt.json" },
        ],
        defaultLocale: "en",
      },
    ],
  ],
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  ssr: false,
  app: {
    head: {
      titleTemplate: "Gabriel Aguiar | %s",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",
          async: true,
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/img/favicon_32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          href: "/img/favicon_48x48.png",
          sizes: "48x48",
        },
        {
          rel: "icon",
          href: "/img/favicon_96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          href: "/img/favicon_144x144.png",
          sizes: "144x144",
        },
      ],
    },
  },
});

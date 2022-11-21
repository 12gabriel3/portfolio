export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/i18n",
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root",
        },
        strategy: "prefix_except_default",
        locales: [
          { iso: "en-US", code: "en", name: "English" },
          { iso: "pt-BR", code: "pt", name: "Português" },
        ],
        defaultLocale: "pt",
        vueI18n: {
          legacy: false,
          messages: {
            en: {
              // Header
              home: "Home",
              contact: "Contact",
              creations: "My Creations",
              blog: "Blog",

              // Index
              title:
                "The developer you are looking for.<br /> You will profit millions off of me.",
              about: "About me",
              aboutText: "I am a developer who loves to create things.",

              // Typing
              welcome: "Welcome to my website!",
              name: "I'm Gabriel Aguiar and I'm a developer.",
              ilike: "I like to code.",

              // Footer
              copyright: "© 2022 Gabriel Aguiar",
            },
            pt: {
              // Header
              home: "Início",
              contact: "Contato",
              creations: "Minhas Criações",
              blog: "Blog",

              // Index
              title:
                "O programador que você procura.<br /> Você vai lucrar milhões comigo.",
              about: "Sobre mim",
              aboutText: "Sou um programador que ama criar coisas.",

              // Typing
              welcome: "Bem-vindo ao meu site!",
              name: "Eu sou Gabriel Aguiar e sou um programador.",
              ilike: "Eu gosto de programar.",

              // Footer
              copyright: "© 2022 Gabriel Aguiar",
            },
          },
        },
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDjTTbujWv4I2SjQUHgtz-PQmbcc0JC5XM",
          authDomain: "personal-website-d2993.firebaseapp.com",
          projectId: "personal-website-d2993",
          storageBucket: "personal-website-d2993.appspot.com",
          messagingSenderId: "695252507351",
          appId: "1:695252507351:web:a7aa01e25cc81591b02e92",
          measurementId: "G-6CM9XPSLXD",
        },
      },
    ],
  ],
  app: {
    head: {
      title: "Gabriel Aguiar",
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
        },
      ],
    },
  },
});

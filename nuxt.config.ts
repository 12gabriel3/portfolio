export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root",
          alwaysRedirect: true,
        },
        locales: [
          { iso: "en-US", code: "en" },
          { iso: "pt-BR", code: "pt" },
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
              myName: "I'm Gabriel Aguiar and I'm a developer.",
              ilike: "I like to code.",

              // Contact
              emailTitle: "Your email",
              name: "Name",
              nameTitle: "Your name",
              yourMessage: "Your message",
              yourMessageTitle: "Type your message",
              yourInfo: "Your info",
              send: "Send",
              nameRequired: "Name is required",
              messageRequired: "Message is required",
              emailRequired: "Enter a valid email",

              // Footer
              copyright: "© 2022 Gabriel Aguiar",

              // Links
              linkJavascript: "https://en.wikipedia.org/wiki/JavaScript",
              linkHTML: "https://en.wikipedia.org/wiki/HTML",
              linkCSS: "https://en.wikipedia.org/wiki/CSS",
              linkC: "https://en.wikipedia.org/wiki/C_(programming_language)",
              linkCPlusPlus: "https://en.wikipedia.org/wiki/C%2B%2B",
              linkReact: "https://reactjs.org/",
              linkElectron: "https://www.electronjs.org/",
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
              myName: "Eu sou Gabriel Aguiar e sou um programador.",
              ilike: "Eu gosto de programar.",

              // Contact
              emailTitle: "Seu email",
              name: "Nome",
              nameTitle: "Seu nome",
              yourMessage: "Sua mensagem",
              yourMessageTitle: "Digite sua mensagem",
              yourInfo: "Suas informações",
              send: "Enviar",
              nameRequired: "Nome é obrigatório",
              messageRequired: "Mensagem é obrigatória",
              emailRequired: "Digite um email válido",

              // Footer
              copyright: "© 2022 Gabriel Aguiar",

              // Links
              linkJavascript: "https://pt.wikipedia.org/wiki/JavaScript",
              linkHTML: "https://pt.wikipedia.org/wiki/HTML",
              linkCSS: "https://pt.wikipedia.org/wiki/CSS",
              linkC: "https://pt.wikipedia.org/wiki/C_(linguagem_de_programa%C3%A7%C3%A3o)",
              linkCPlusPlus: "https://pt.wikipedia.org/wiki/C%2B%2B",
              linkReact: "https://pt-br.reactjs.org/",
              linkElectron: "https://www.electronjs.org/pt/",

            },
          },
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

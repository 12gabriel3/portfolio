export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "prefix",
        parsePages: false,
        pages: {
          index: {
            en: "/home",
            pt: "/inicio",
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
        },
        locales: [
          { iso: "en-US", code: "en" },
          { iso: "pt-BR", code: "pt" },
        ],
        defaultLocale: "en",
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
              getInTouch: "Get in touch",
              contactText: "Want to get in touch? Fill out the form below.",
              name: "Name",
              nameRequired: "Name is required",
              nameTooLong: "Name is too long",
              message: "Message",
              messageRequired: "Message is required",
              messageTooLong: "Message is too long",
              send: "Send",
              emailRequired: "Email is required",
              emailInvalid: "Enter a valid email",
              emailSent: "Email sent!",
              emailSentText:
                "Thank you for getting in touch! I will reply as soon as possible.",
              emailNotSent:
                "There was an internal error. Please try agin later.",

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
              getInTouch: "Entre em contato",
              contactText: "Quer entrar em contato? Preencha o formulário abaixo.",
              name: "Nome",
              nameRequired: "Nome é obrigatório",
              nameTooLong: "Nome é muito longo",
              message: "Mensagem",
              messageRequired: "Mensagem é obrigatória",
              messageTooLong: "Mensagem é muito longa",
              emailRequired: "Email é obrigatório",
              emailInvalid: "Digite um email válido",
              send: "Enviar",
              emailSent: "Email enviado com sucesso!",
              emailSentText:
                "Obrigado por entrar em contato! Vou responder seu email o mais rápido possível.",
              emailNotSent:
                "Houve um erro interno. Por favor, tente novamente mais tarde.",

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
      title: "Gabriel Aguiar",
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",
        },
      ],
    },
  },
});

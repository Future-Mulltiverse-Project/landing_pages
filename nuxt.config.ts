// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      APP_NAME: 'Future Mulitverse',
      APP_TITLE: 'Future Mulitverse',
      APP_DESCRIPTION: '',
      API_URL: 'https://futuremultiverse.com/',
      MINT_EVENT_START_IN: '2023-06-08T11:59:59.000Z',
      EXPO_LAUNCH_IN: '2023-07-08T11:59:59.000Z',
    },
  },
  app: {
    head: {
      title: process.env.APP_NAME,
      titleTemplate: (titleChunk) => {
        const name = process.env.NUXT_PUBLIC_APP_NAME as string;
        return titleChunk ? `${titleChunk} - ${name}` : name;
      },
      meta: [
        {
          name: 'application-name',
          content:
            process.env.NUXT_PUBLIC_APP_NAME ||
            process.env.NUXT_PUBLIC_APP_TITLE,
        },
        {
          name: 'description',
          content:
            process.env.NUXT_PUBLIC_APP_DESCRIPTION ||
            process.env.NUXT_PUBLIC_APP_TITLE,
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png?v=1',
        },
        // {
        //   rel: 'icon',
        //   type: 'image/svg+xml',
        //   href: '/icon.svg?v=1',
        // },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png?v=1',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png?v=1',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest?v=1',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg?v=1',
          color: '#F5FF80',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon-16x16.png?v=1',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&display=swap" rel="stylesheet',
        },
      ],
      script: [
          {
              type: 'text/javascript',
              src: '~/assets/js/scripts.bundle.css',
          },
          {
              type: 'text/javascript',
              src: '~/assets/js/global/plugin.bundle.js',
          }
      ],
    },
  },
  //css: ['~/assets/styles/app.scss'],
  css: ['~/assets/css/main.css','~/assets/css/metronic_styling.css'],
  modules: ['~/modules/purgecss','@nuxt/ui', '@nuxtjs/tailwindcss'],
  experimental: {
    inlineSSRStyles: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/vars.scss";',
        },
      },
      modules: {
        generateScopedName:
          process.env.NODE_ENV === 'production'
            ? '_app_[hash:base64:5]'
            : '[path][name]__[local]-[hash:base64:5]',
      },
    },
  },
  typescript: {
    strict: true,
  },
  srcDir: 'src/',
  // build: {
  //   transpile: [],
  // },
  // imports: {
  //   autoImport: false,
  //   global: false,
  //   // dirs: ['],
  // },
  telemetry: false,
});
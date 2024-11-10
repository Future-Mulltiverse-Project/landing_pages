// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from 'tailwindcss'; // Import tailwindcss
import autoprefixer from 'autoprefixer'; 
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //plugins: [ '@/assets/js/global/plugins.bundle.js', {src: '~/assets/js/global/plugins.bundle.js', mode:'client'}, ],
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
        {
          rel: 'stylesheet',
          href: '~/assets/css/main.css',
        },
        {
          rel: 'stylesheet',
          href: '~/assets/css/tailwind.css',
        },
      ],
      script: [
          {
              //type: 'text/javascript',
              src: 'https://cdn.tailwindcss.com'
              //defer: true 
          }
      ],
    },
  },
  //css: ['~/assets/styles/app.scss'],
  css: ['~/assets/css/main.css'],
  modules: [ '@nuxt/ui', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  //modules: ['~/modules/purgecss', '@nuxt/ui', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  experimental: {
    inlineSSRStyles: false,
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          // Pass the plugins as functions
          tailwindcss(), 
          autoprefixer(),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/vars.scss";',
        },
      },
      modules: {
        generateScopedName:
          process.env.NODE_ENV === 'development'
            ? '_app_[hash:base64:5]'
            : '[path][name]__[local]-[hash:base64:5]',
      },
    },
  },
  typescript: {
    strict: true,
  },
  //srcDir: 'src/',
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
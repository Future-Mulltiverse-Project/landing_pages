import { defineNuxtModule } from '@nuxt/kit';
import consola from 'consola';

const logger = consola.withTag('app:purgecss');

type Options = {
  enabled?: boolean;
};

export default defineNuxtModule<Options>({
  meta: {
    name: 'app-purgecss',
  },
  defaults: (nuxt) => {
    const enabled = !nuxt.options.dev;
    return { enabled };
  },
  setup({ enabled }, nuxt) {
    if (!enabled) {
      const msg = `Purgecss is not enabled!${
        nuxt.options.dev ? ' Likely because you are in dev mode' : ''
      }`;
      logger.info(msg);
      return;
    }

    const cssnano = nuxt.options.postcss.plugins.cssnano;

    delete nuxt.options.postcss.plugins.cssnano;

    nuxt.options.postcss.plugins['@fullhuman/postcss-purgecss'] = {
      defaultExtractor: (content: string) => {
        const contentWithoutStyleBlocks = content.replace(
          /<style[^]+?<\/style>/gi,
          '',
        ); // Remove inline vue styles
        return (
          contentWithoutStyleBlocks.match(/[\w\-\\[\]/:%!()#,.+&*]+(?<!:)/g) ||
          []
        ); // Default extractor
      },
      content: ['.output/public/**/*.js'],
      // fontFace: true,
      keyframes: true,
      // variables: true,
      safelist: [
        'body',
        'html',
        'nuxt-progress',
        '__nuxt',
        /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
        /^nuxt-link(|-exact)-active$/, // Nuxt link classes
        /^(?!cursor-move).+-move$/, // Move transitions
        // /.*data-v-.*/, // Keep scoped styles
        // New Vue3 selectors
        /:slotted/,
        /:deep/,
        /:global/,

        ':disabled',
        ':-moz-focusring',
        ':-moz-ui-invalid',
        // packages
        /^swiper/,
        // cms
        /^(h1|h2|h3|h4|h5|h6|a|p|ul|ol|li|i|em|b|strong|u)$/,
      ],
    };

    nuxt.options.postcss.plugins.cssnano = cssnano;
  },
});

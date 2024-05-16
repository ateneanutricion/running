// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  sourcemap: { server: false },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-og-image',
  ],
  site: {
    name: 'ATENEA 5K',
    url: 'https://5k.ateneanutricion.com',
  },
  ogImage: {
    runtimeCacheStorage: false,
    compatibility: {
      runtime: {
        'css-inline': false,
        'chromium': false,
        'resvg': false,
        'sharp': false,
      },
    },
  },
  css: ['@unocss/reset/tailwind.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'theme-color', content: 'rgb(24 24 27)' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      ],
    },
  },
})

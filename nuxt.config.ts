// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
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
    compatibility: {
      runtime: {
        'css-inline': false,
        'chromium': false,
        'resvg': false,
        'satori': false,
        'sharp': false,
      },
      prerender: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/__og-image__/image/ticket/Yetlanetzi Portillo-5-130/og.png',
        '/__og-image__/image/ticket/Amaury Tobias-5-131/og.png',
        '/__og-image__/image/ticket/Ehitel Torres-5-521/og.png',
      ],
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

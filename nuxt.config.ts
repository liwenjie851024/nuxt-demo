// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  ssr: true,
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'dayjs-nuxt',
    'nuxt-lodash',
    '@primevue/nuxt-module'
  ],

  imports: {
    dirs: [
      'composables/*/index.ts'
    ]
  },

  i18n: {
    bundle: {
      optimizeTranslationDirective: false
    }
  },
  
  css: [
    '@/assets/scss/global.scss'
  ],

  runtimeConfig: {
    isServer: true,
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }
  },

  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    }
  }
  
})
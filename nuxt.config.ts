
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel-edge',
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.scss'],
})
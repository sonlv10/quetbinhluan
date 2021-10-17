/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quetbinhluan-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', name: 'description', content: 'Một phần mềm miễn phí giúp tiết kiệm thời gian và nhân lực đáng kể trong thời đại số hiện nay.' },
      { name: 'title', content: 'Quét bình luận | Công cụ miễn phí hỗ trợ bán hàng online' },
      { name: 'keywords', content: 'quét facebook, miễn phí, quét bình luận, quét comment, quét bài viết, auto facebook, scan bài viết, scan post, quét live stream, quét số điện thoại' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  target: 'static',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  telemetry: false,

  dev: process.env.NODE_ENV !== 'production',

  router: {
    mode: 'hash',
  },
}

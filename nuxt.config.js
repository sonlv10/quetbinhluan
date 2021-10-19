export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quét bình luận | Công cụ miễn phí hỗ trợ bán hàng online',
    htmlAttrs: {
      lang: 'vi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'FAF'},
      { name: 'robots', content: 'index, follow'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', name: 'description', content: 'Một phần mềm miễn phí giúp tiết kiệm thời gian và nhân lực đáng kể trong thời đại số hiện nay.' },
      { name: 'title', content: 'Quét bình luận | Công cụ miễn phí hỗ trợ bán hàng online' },
      { name: 'keywords', content: 'quét facebook, miễn phí, quét bình luận, quét comment, quét bài viết, auto facebook, scan bài viết, scan post, quét live stream, quét số điện thoại' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:description', name: 'description', content: 'Một phần mềm miễn phí giúp tiết kiệm thời gian và nhân lực đáng kể trong thời đại số hiện nay.' },
      { property: 'og:title', content: 'Quét bình luận | Công cụ miễn phí hỗ trợ bán hàng online' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://quetbinhluan.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
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
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

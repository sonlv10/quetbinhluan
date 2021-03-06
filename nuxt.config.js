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
      { name: 'keywords', content: 'phần mềm quét bình luận miễn phí, tool quét bình luận miễn phí, quét facebook, quét bình luận miễn phí, miễn phí, quét bình luận, quét bình luận facebook, quét comment, quét bài viết, nuôi nick, tăng lượng truy cập web, seo web google' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:description', name: 'description', content: 'Một phần mềm miễn phí giúp tiết kiệm thời gian và nhân lực đáng kể trong thời đại số hiện nay.' },
      { property: 'og:title', content: 'Quét bình luận | Công cụ miễn phí hỗ trợ bán hàng online' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://quetbinhluan.com' },
      {
        hid: "og:image",
        property: "og:image",
        content: "/fb-thumb.png",
      },
      { property: 'og:image:width', content: '720' },
      { property: 'og:image:height', content: '480' },
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
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }
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
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

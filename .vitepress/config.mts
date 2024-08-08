import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "修真",
  description: "A VitePress Site",
  srcDir: 'src',
  base: '/site/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '基建',items: [
        { text: '静态站点', link: '/Infrastructure/github' },
      ]},
      { text: '规范',items: [
        { text: 'js', link: '/specification/js' },
        { text: 'css', link: '/specification/css' },
      ]},
      { text: '知识总结',items: [
        { text: 'js', link: '/knowledge/js' },
        { text: 'css', link: '/knowledge/css' },
        { text: 'vue', link: '/knowledge/vue' },
        { text: '管理', link: '/knowledge/manage' },
        { text: '网络', link: '/knowledge/http' },
        { text: 'vue2-vue3', link: '/knowledge/vue2-vue3' },
        { text: 'vue2迁移vue3', link: '/knowledge/vue2tovue3' },
      ]}

    ],
    sidebar: {
      '/Infrastructure/': [
        {
          text: '基建',
          items: [
            { text: '静态站点', link: '/Infrastructure/github' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

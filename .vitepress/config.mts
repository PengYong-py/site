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

import { defineConfig } from 'vitepress'
// test
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/UniversalSTIGBrowser/',
  // base: '/',
  title: "Universal STIG Browser",
  description: "Native DISA STIG Viewer for macOS, iPadOS, and visionOS",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/boberito/UniversalSTIGBrowser' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/boberito/' }, 
      { icon: 'buymeacoffee', link: 'https://buymeacoffee.com/boberito' }
    ]
  },
  head: [
    ['meta', { name: 'description', content: 'Universal STIG Browser – View, filter, and export DISA STIGs on macOS, iPadOS, and visionOS.' }],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ]
})
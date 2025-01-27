import type { Plugin, App } from '@vuepress/core'
import { mdPluginVueVuePreview } from './md-plugin-vue-preview'

export const vuePreviewPlugin = (): Plugin => ({
  name: '@vuepress-reco/vuepress-plugin-vue-preview',

  extendsMarkdown(md) {
    md.use(mdPluginVueVuePreview)
  }
})

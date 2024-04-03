import { defineConfig, presetIcons, presetUno } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        sponsors: FileSystemIconLoader('./assets/icons'),
      },
    }),
  ],
  autocomplete: {
    templates: ['i-sponsors:(natura|envidia-store)'],
  },
})

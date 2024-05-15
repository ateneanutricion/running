import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno({ attributifyPseudo: true }),
    presetIcons({
      collections: {
        sponsors: FileSystemIconLoader('./app/assets/icons'),
      },
    }),
  ],
  autocomplete: {
    templates: ['i-sponsors:(natura|envidia-store)'],
  },
})

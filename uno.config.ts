import { defineConfig, presetIcons, presetUno, presetWebFonts } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        sponsors: FileSystemIconLoader('./assets/icons'),
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        serif: 'Megrim',
      },
    }),
  ],
  autocomplete: {
    templates: ['i-sponsors:(natura|envidia-store)'],
  },
})

import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    UnoCss({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons()
      ]
    })
  ]
};

export default config;

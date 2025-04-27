import { createRemToPxResolver } from '@unocss/preset-wind4/utils'
import { presetVarlet } from '@varlet/preset-unocss'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const BASE_FONT_SIZE = 4

export default defineConfig({
  presets: [
    presetWind4({
      utilityResolver: createRemToPxResolver(BASE_FONT_SIZE),
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetVarlet(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

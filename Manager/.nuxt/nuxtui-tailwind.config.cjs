
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor, generateSafelist } = require("/home/jordantimberlake/Documents/Projects/Manager/Manager/node_modules/.pnpm/@nuxt+ui@2.18.3_jwt-decode@3.1.2_magicast@0.3.4_rollup@4.20.0_vite@5.3.5_@types+node@22.1.0_terser@5.31.3__vue@3.4.35/node_modules/@nuxt/ui/dist/runtime/utils/colors")

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss')
        ],
        content: {
          files: [
            "/home/jordantimberlake/Documents/Projects/Manager/Manager/node_modules/.pnpm/@nuxt+ui@2.18.3_jwt-decode@3.1.2_magicast@0.3.4_rollup@4.20.0_vite@5.3.5_@types+node@22.1.0_terser@5.31.3__vue@3.4.35/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/home/jordantimberlake/Documents/Projects/Manager/Manager/node_modules/.pnpm/@nuxt+ui@2.18.3_jwt-decode@3.1.2_magicast@0.3.4_rollup@4.20.0_vite@5.3.5_@types+node@22.1.0_terser@5.31.3__vue@3.4.35/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"]),
      }
    
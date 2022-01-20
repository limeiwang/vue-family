import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import { presetAttributify, presetUno } from 'unocss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Icons({
            defaultClass: 'inline',
            defaultStyle: 'vertical-align: sub;',
        }),
        Unocss({
            presets: [
                UnocssIcons({
                    extraProperties: {
                        display: 'inline-block',
                        height: '1.2em',
                        width: '1.2em',
                        'vertical-align': 'text-bottom',
                    },
                }),
                presetAttributify(),
                presetUno(),
            ],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), IconsResolver({
                componentPrefix: 'i',
            })],
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})

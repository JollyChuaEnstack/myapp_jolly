// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    css: [
        'vuetify/styles',
        '@/assets/scss/app.scss'
    ], // vuetify ships precompiled css, no need to import sass
    vite: {
        // @ts-ignore
        // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: [
        // @ts-ignore
        // this adds the vuetify vite plugin
        // also produces type errors in the current beta release
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ],
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuex'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
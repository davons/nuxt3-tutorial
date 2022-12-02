// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'My App-demo',
          meta: [
            { name: 'description', content: 'Tutorial nuxt3' }
          ],
        }
    },
    runtimeConfig: {
        public: {
          baseUrl: 'https://garchi.co.uk/api/v1',
          appSecret: '29|kKf7rCTa982HoelZkgBM8GiSI7UR6LZtyJ2Lul2w'
        },
    }
})

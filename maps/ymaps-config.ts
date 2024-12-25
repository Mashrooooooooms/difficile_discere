import { createYmaps } from 'vue-yandex-maps'

const ymapsConfig = createYmaps({
    apikey: 'b191bac1-0dea-4ead-b9b3-2d0db90e6e29',
    lang:  'ru_RU',
    initializeOn: 'onPluginInit',
    version: '3.0'
})
import './assets/main.css'

import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps';
import App from './components/App.vue';

const app = createApp(App);

try {
  app.use(createYmaps({
    apikey: 'b191bac1-0dea-4ead-b9b3-2d0db90e6e29',
    lang: 'ru_RU',
    version: '3.0'
  }));
} catch (error) {
  console.error('Ошибка при инициализации Яндекс Карт:', error);
}

app.mount('#app');

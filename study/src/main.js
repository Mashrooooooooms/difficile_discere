import './assets/main.css'; // Импорт основного файла стилей

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global-styles.css'

createApp(App)
  .use(router)
  .mount('#app');

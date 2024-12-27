import './assets/main.css';
import './assets/global-styles.css';

import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

// Создаем хранилище Vuex
const store = createStore({
  state() {
    return {
      news: []
    }
  },
  mutations: {
    ADD_NEWS(state, newsItem) {
      state.news.unshift(newsItem)
    }
  },
  actions: {
    addNews({ commit }, newsItem) {
      commit('ADD_NEWS', newsItem)
    }
  },
  getters: {
    getAllNews: state => state.news
  }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

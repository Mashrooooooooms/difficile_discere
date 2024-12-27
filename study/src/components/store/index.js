import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: []
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
})

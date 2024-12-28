<template>
  <div class="search-modal">
    <div class="search-content">
      <button class="close-button" @click="$emit('close')">&times;</button>
      <input
        type="text"
        v-model="searchQuery"
        @input="onSearch"
        placeholder="Введите слово для поиска..."
        autofocus
      />
      <ul v-if="filteredResults.length">
        <li v-for="(result, index) in filteredResults" :key="index">
          <a v-if="result.link" :href="result.link" target="_blank">{{ result.text }}</a>
          <span v-else>{{ result.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      items: [
        { text: 'Ремонт техники', link: 'http://localhost:5173/request' },
        { text: 'Карта поставщиков', link: 'http://localhost:5173/about' },
        { text: 'Конкретная новость', link: null },
        { text: 'Регистрация', link: null },
        { text: 'Пятый элемент. Хороший фильм.', link: null }
      ],
      filteredResults: []
    };
  },
  methods: {
    onSearch() {
      if (this.searchQuery.length > 0) {
        const query = this.searchQuery.toLowerCase();
        this.filteredResults = this.items.filter(item =>
          item.text.toLowerCase().includes(query)
        );
      } else {
        this.filteredResults = [];
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте стили для поискового модального окна, если необходимо */
</style>

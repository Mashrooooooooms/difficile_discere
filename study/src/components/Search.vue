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
          {{ result }}
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
        '#Один. Ремонт техники. Ссылка.',
        '#Два. Карта поставщиков. Ссылка',
        '#Три. Конкретная новость. Ссылка',
        '#Четыре. Регистрация. Ссылка',
        'Пятый элемент. Хороший фильм.'
      ],
      filteredResults: []
    };
  },
  methods: {
    onSearch() {
      if (this.searchQuery.length > 0) {
        const query = this.searchQuery.toLowerCase();
        this.filteredResults = this.items.filter(item =>
          item.toLowerCase().includes(query)
        );
      } else {
        this.filteredResults = [];
      }
    },
  },
};
</script>


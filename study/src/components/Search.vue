<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="onSearch"
      placeholder="Введите слово для поиска..."
    />
    <ul v-if="filteredResults.length">
      <li v-for="(result, index) in filteredResults" :key="index">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', // Хранит значение поискового запроса
      items: [ // Пример данных для поиска
        '#Один. Ремонт техники. Ссылка.',
        '#Два. Карта поставщиков. Ссылка',
        '#Три. Конкретная новость. Ссылка',
        '#Четыре. Регистрация. Ссылка',
        'Пятый элемент. Хороший фильм.'
      ],
      filteredResults: [] // Список отфильтрованных результатов
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

<style scoped>
input {
  padding: 10px;
  width: 100%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px;
}
</style>

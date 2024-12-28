<template>
  <div>
    <nav class="navbar">
      <div class="links">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">Карта поставщиков</router-link>
        <button class="search-button" @click="openSearch">Поиск</button> <!-- Кнопка поиска -->
      </div>
    </nav>

    <h1>Заявки на ремонт</h1>

    <form @submit.prevent="submitRequest" class="request-form">
      <div class="form-group">
        <label for="name">Ваше имя:</label>
        <input type="text" id="name" v-model="request.name" required />
      </div>
      <div class="form-group">
        <label for="description">Описание проблемы:</label>
        <textarea id="description" v-model="request.description" required></textarea>
      </div>
      <button type="submit">Отправить заявку</button>
    </form>

    <div v-if="submitted" class="success-message">
      Заявка успешно отправлена!
    </div>

    <!-- Компонент поиска -->
    <Search v-if="isSearchVisible" @close="isSearchVisible = false" />
  </div>
</template>

<script setup>
// Импортируем компонент Search
import { ref } from 'vue';
import Search from '@/components/Search.vue';

// Определяем реактивные переменные
const request = ref({
  name: '',
  description: ''
});
const submitted = ref(false);
const isSearchVisible = ref(false); // Переменная для управления видимостью поиска

// Определяем методы
function submitRequest() {
  console.log('Заявка отправлена:', request.value);
  request.value.name = '';
  request.value.description = '';
  submitted.value = true;

  setTimeout(() => {
    submitted.value = false;
  }, 3000);
}

function openSearch() {
  isSearchVisible.value = true; // Открытие компонента поиска
}
</script>

<style scoped>
/* Добавьте стили для компонента по необходимости */
</style>

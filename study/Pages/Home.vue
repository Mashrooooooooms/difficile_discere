<template>
  <div>
    <!-- Навигационная панель -->
    <nav class="navbar">
      <ul>
        <router-link to="/about">Карта поставщиков</router-link>
        <router-link to="/request">Техобслуживание</router-link>
        <button class="regbut" @click="showModal = true">Регистрация</button>
        <button class="search-button" @click="openSearch">Поиск</button>
      </ul>
    </nav>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Регистрация</h2>
        <form @submit.prevent="handleSubmit">
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" v-model="username" required />

          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required />

          <button type="submit">Зарегистрироваться</button>
          <button type="button" @click="showModal = false">Закрыть</button>
        </form>
      </div>
    </div>

    <!-- Компонент поиска -->
    <Search v-if="isSearchVisible" @close="isSearchVisible = false" />

    <!-- Заголовок и основной контент -->
    <header>
      <section class="hero">
        <h1>Онлайн-магазин прачечного оборудования</h1>
        <p>Ваш надежный партнер в мире поставок</p>
      </section>
    </header>

    <div class="content">
      <h2>Главная страница</h2>

      <!-- Добавляем компонент ChatBot -->
      <ChatBot />
      
    </div>

    <div class="mineContainer">
      <h2>Новости</h2>
      <div v-for="news in newsItems" :key="news.id" class="newsItem">
        <h3>{{ news.title }}</h3>
        <p>{{ news.description }}</p>
        <small>{{ news.date }}</small>
      </div>
    </div>

    <footer>
      <h1>Контакты</h1>
    </footer>
  </div>
</template>

<script setup>
// Импортируем компоненты
import { ref } from 'vue';
import Search from '@/components/Search.vue';
import ChatBot from '@/components/ChatBot.vue'; // Импортируем компонент ChatBot

// Определяем реактивные переменные
const showModal = ref(false);
const username = ref('');
const password = ref('');
const isSearchVisible = ref(false);
const newsItems = ref([
  { id: 1, title: 'Новость 1', description: 'Описание новости 1', date: '2024-12-27' },
  { id: 2, title: 'Новость 2', description: 'Описание новости 2', date: '2024-12-26' },
  { id: 3, title: 'Новость 3', description: 'Описание новости 3', date: '2024-12-25' },
]);

// Определяем методы
function handleSubmit() {
  console.log('Регистрация:', username.value, password.value);
  showModal.value = false;
  username.value = '';
  password.value = '';
}

function openSearch() {
  isSearchVisible.value = true;
}
</script>

<style scoped>
.navbar {
  /* Стили для навигационной панели */
}

.modal-overlay {
  /* Стили для фона модального окна */
}

.modal {
  /* Стили для модального окна */
}

.hero {
  /* Стили для героя */
}

.content {
  /* Стили для основного контента */
}

.mineContainer {
  /* Стили для контейнера новостей */
}

.newsItem {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.newsItem h3 {
  margin-top: 0;
}

.newsItem small {
  color: #666;
}

footer {
  /* Стили для футера */
}

/* Добавьте дополнительные стили по необходимости */
</style>

<template>
  <div>
    <!-- Навигационная панель -->
    <nav class="navbar">
      <ul>
        <router-link to="/about">Карта поставщиков</router-link>
        <router-link to="/request">Техобслуживание</router-link>
        <button class="regbut" @click="showModal = true">Регистрация</button>
        <button class="search-button" @click="openSearch">Поиск</button> <!-- Кнопка поиска -->
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
    </div>

    <div class="mineContainer">
      <h2>Новости</h2>
      <div class="newsItem">
        <h3>Новость 1</h3>
        <p>Краткое описание новости 1.</p>
      </div>
      <div class="newsItem">
        <h3>Новость 2</h3>
        <p>Краткое описание новости 2.</p>
      </div>
      <div class="newsItem">
        <h3>Новость 3</h3>
        <p>Краткое описание новости 3.</p>
      </div>
    </div>

    <footer>
      <h1>Контакты</h1>
    </footer>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
  name: 'Home',
  components: {
    Search // Регистрация компонента
  },
  data() {
    return {
      showModal: false,
      username: '',
      password: '',
      isSearchVisible: false // Переменная для управления видимостью поиска
    };
  },
  methods: {
    handleSubmit() {
      // Тут вписывать отправку
      console.log('Регистрация:', this.username, this.password);
      
      // Закрытие модального окна после регистрации
      this.showModal = false;
      
      // Очистка полей
      this.username = '';
      this.password = '';
    },
    openSearch() {
      this.isSearchVisible = true; // Открытие компонента поиска
    }
  }
}
</script>
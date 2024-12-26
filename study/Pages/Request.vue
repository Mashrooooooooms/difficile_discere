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
  
  <script>
  // Не забудьте импортировать компонент Search
  import Search from '@/components/Search.vue';
  
  export default {
    name: 'Request',
    components: {
      Search // Регистрация компонента
    },
    data() {
      return {
        request: {
          name: '',
          description: ''
        },
        submitted: false,
        isSearchVisible: false // Переменная для управления видимостью поиска
      };
    },
    methods: {
      submitRequest() {
        console.log('Заявка отправлена:', this.request);
        this.request.name = '';
        this.request.description = '';
        this.submitted = true;
  
        setTimeout(() => {
          this.submitted = false;
        }, 3000);
      },
      openSearch() {
        this.isSearchVisible = true; // Открытие компонента поиска
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  
  .navbar li {
    margin-right: 15px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin: 0 10px;
  }
  
  .search-button { /* Стили для кнопки поиска */
    background-color: #333; /* Цвет фона такой же, как у навигационной панели */
    color: white; /* Цвет текста */
    border: none; /* Убираем рамку */
    padding: 10px 15px; /* Внутренние отступы */
    cursor: pointer; /* Указатель при наведении */
    font-weight: bold; /* Жирный шрифт для текста */
    border-radius: 5px; /* Закругленные углы */
    transition: background-color 0.3s; /* Плавный переход для фона */
  }
  
  .search-button:hover { /* Эффект при наведении на кнопку поиска */
    background-color: #555; /* Темнее при наведении */
  }
  
  h1 {
    margin-top: 70px;
  }
  
  .request-form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
  }
  
  .form-group input,
  .form-group textarea {
    width: calc(100% - 40px);
    padding: 10px;
  }
  
  button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    margin-top: 20px;
    color: green;
  }
  </style>
  
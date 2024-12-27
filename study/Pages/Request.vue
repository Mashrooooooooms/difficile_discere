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
  
  
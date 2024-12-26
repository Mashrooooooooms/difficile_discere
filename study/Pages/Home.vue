<template>
  <div>
    <!-- Навигационная панель -->
    <nav class="navbar">
      <ul>
        <router-link to="/about">Карта поставщиков</router-link>
        <router-link to="/request">Техобслуживание</router-link>
        <button class="regbut" @click="showModal = true">Регистрация</button>
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
export default {
  name: 'Home',
  data() {
    return {
      showModal: false,
      username: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Логика регистрации (например, отправка данных на сервер)
      console.log('Регистрация:', this.username, this.password);
      
      // Закрытие модального окна после регистрации
      this.showModal = false;
      
      // Очистка полей
      this.username = '';
      this.password = '';
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

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  margin: 10px;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-top: 0;
}

.modal label {
  display: block;
}

.modal input {
  width: calc(100% - 20px);
  padding: 10px;
}

.modal button {
  margin-top: 10px;
}
 .hero {
   position: sticky;
   left: 0;
   right: 0;
   width: 100%;
   padding:48px; 
   background-color:#f5f5f5; 
} 

/* Стили для контейнера новостей */
.mineContainer {
   width:100%; 
   margin-top:80px; /* Отступ сверху для учета фиксированной навигации */
   padding:20px; 
   background-color:#f9f9f9; 
   border-radius:8px; 
   box-shadow:0px,2px,10px rgba(0,0,0,0.1); 
}

.newsItem {
   border:1px solid #ccc; 
   border-radius:5px; 
   padding:15px; 
   margin-bottom:15px; 
   background-color:#fff; 
   transition:.3s; 
}

.newsItem:hover {
   box-shadow:0px,4px,20px rgba(0,0,0,.2); 
}

h2 {
   text-align:center; 
}

h3 {
   color:#333; 
}

p {
   color:#666; 
}
.modal-overlay {
  position: fixed; /* Фиксированное позиционирование */
  top: 0; /* Привязка к верхней части окна */
  left: 0; /* Привязка к левому краю окна */
  right: 0; /* Привязка к правому краю окна */
  bottom: 0; /* Привязка к нижней части окна */
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  display: flex; /* Используем Flexbox для центрирования содержимого */
  align-items: center; /* Центрируем по вертикали */
  justify-content: center; /* Центрируем по горизонтали */
  z-index: 1000; /* Обеспечиваем, что модальное окно будет поверх других элементов */
}

/* Стили для самого модального окна */
.modal {
  background-color: white; /* Цвет фона модального окна */
  padding: 20px; /* Внутренние отступы */
  border-radius: 8px; /* Закругленные углы */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Тень для создания эффекта глубины */
  max-width: 400px; /* Максимальная ширина модального окна */
  width: 100%; /* Ширина на всю доступную ширину с учетом max-width */
}

/* Заголовок модального окна */
.modal h2 {
  margin-top: 0; /* Убираем верхний отступ заголовка */
}

/* Стили для кнопок внутри модального окна */
.modal button {
  margin-top: 10px; /* Отступ между кнопками */
}
.regbut {
  background-color: #333; /* Цвет фона такой же, как у навигационной панели */
  color: white; /* Цвет текста */
  border: none; /* Убираем рамку */
  padding: 10px 15px; /* Внутренние отступы */
  cursor: pointer; /* Указатель при наведении */
  font-weight: bold; /* Жирный шрифт для текста */
  border-radius: 5px; /* Закругленные углы */
  transition: background-color 0.3s; /* Плавный переход для фона */
}

.regbut:hover {
  background-color: #555; /* Темнее при наведении */
}

</style>

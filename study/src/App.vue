<template>
  <div id="app">
    <router-view />
    <ChatBot /> <!-- Добавляем компонент ChatBot здесь -->
  </div>
</template>

<script>
import ChatBot from './components/ChatBot.vue'; // Импортируем компонент ChatBot

export default {
  name: 'App',
  components: {
    ChatBot, // Регистрация компонента
  },
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column; /* Вертикальное расположение элементов */
    align-items: center; /* Центрирование по горизонтали */
    justify-content: center; /* Центрирование по вертикали */
    min-height: 100vh; /* Минимальная высота на весь экран */
    width: 100%;
}
</style>

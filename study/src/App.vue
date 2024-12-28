<template>
  <div id="app">
    <router-view />
    <ChatBot /> <!-- Компонет бота -->
  </div>
</template>

<script>
import ChatBot from './components/ChatBot.vue';

export default {
  name: 'App',
  components: {
    ChatBot, // Регистрация бота
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

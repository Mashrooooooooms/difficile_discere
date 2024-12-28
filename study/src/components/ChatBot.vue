<template>
    <div class="chatbot">
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          {{ msg }}
        </div>
      </div>
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Введите сообщение..." />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Определяем реактивные переменные
  const messages = ref([]);
  const userInput = ref('');
  
  // Функция для отправки сообщения
  function sendMessage() {
    if (userInput.value.trim() === '') return;
  
    // Добавляем сообщение пользователя
    messages.value.push(`Вы: ${userInput.value}`);
    
    // Обрабатываем и отвечаем на сообщение
    getBotResponse(userInput.value);
    
    // Очищаем поле ввода
    userInput.value = '';
  }
  
  // Функция для получения ответа бота
  function getBotResponse(input) {
    let response;
  
    // Простейшая логика ответов
    if (input.toLowerCase().includes('привет')) {
      response = 'Привет! Как я могу помочь?';
    } else if (input.toLowerCase().includes('как дела')) {
      response = 'У меня всё хорошо, спасибо!';
    } else {
      response = 'Извините, я не понимаю.';
    }
  
    // Добавляем ответ бота
    messages.value.push(`Бот: ${response}`);
  }
  </script>
  
  <style scoped>
  .chatbot {
    border: 1px solid #ccc;
    padding: 10px;
    width: 300px;
  }
  .messages {
    max-height: 200px;
    overflow-y: auto;
  }
  .message {
    margin-bottom: 5px;
  }
  </style>
  
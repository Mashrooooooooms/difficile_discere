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
  
  <script>
  export default {
    data() {
      return {
        messages: [],
        userInput: '',
      };
    },
    methods: {
      sendMessage() {
        if (this.userInput.trim() === '') return;
  
        // Добавляем сообщение пользователя
        this.messages.push(`Вы: ${this.userInput}`);
        
        // Обрабатываем и отвечаем на сообщение
        this.getBotResponse(this.userInput);
        
        // Очищаем поле ввода
        this.userInput = '';
      },
      getBotResponse(input) {
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
        this.messages.push(`Бот: ${response}`);
      },
    },
  };
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
  
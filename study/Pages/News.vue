<template>
    <div class="news-editor">
      <h2>Создание новой новости</h2>
      <form @submit.prevent="submitNews">
        <div class="form-group">
          <label for="title">Заголовок:</label>
          <input type="text" id="title" v-model="newsItem.title" required>
        </div>
        <div class="form-group">
          <label for="content">Содержание:</label>
          <textarea id="content" v-model="newsItem.content" rows="10" required></textarea>
        </div>
        <div class="form-group">
          <label for="author">Автор:</label>
          <input type="text" id="author" v-model="newsItem.author" required>
        </div>
        <div class="form-group">
          <label for="category">Категория:</label>
          <select id="category" v-model="newsItem.category">
            <option value="economics">Экономика</option>
            <option value="technology">Технологии</option>
          </select>
        </div>
        <button type="submit">Опубликовать новость</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'News',
    data() {
      return {
        newsItem: {
          title: '',
          content: '',
          author: '',
          category: 'economics',
          date: new Date().toISOString()
        }
      }
    },
    methods: {
      ...mapActions(['addNews']),
      submitNews() {
        const newsWithId = {
          ...this.newsItem,
          id: Date.now()
        }
        this.addNews(newsWithId)
        console.log('Новость добавлена:', newsWithId)
        this.clearForm()
      },
      clearForm() {
        this.newsItem = {
          title: '',
          content: '',
          author: '',
          category: 'economics',
          date: new Date().toISOString()
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .news-editor {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  
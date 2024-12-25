<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/about">Карта поставщиков</router-link></li>
        <li><router-link to="/request">Техобслуживание</router-link></li>
        <li><router-link to="/reg">Регистрация</router-link></li>
      </ul>
    </nav>

    <section class="hero">
      <h1>Онлайн-магазин прачечного оборудования</h1>
      <p>Ваш надежный партнер в мире поставок</p>
    </section>

    <div class="content">
      <h2>Главная страница</h2>
    </div>

    <section class="news">
      <h2>Новости</h2>
      <div class="news-item">
        <h3>Новость 1</h3>
        <p>Краткое описание новости 1.</p>
      </div>
      <div class="news-item">
        <h3>Новость 2</h3>
        <p>Краткое описание новости 2.</p>
      </div>
      <div class="news-item">
        <h3>Новость 3</h3>
        <p>Краткое описание новости 3.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.navbar {
    background-color: #333;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: auto;
    z-index: 1000;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar li {
    margin-right: 15px;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.navbar a:hover {
    text-decoration: underline;
}

.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f5f5f5;
}

.hero-content {
    max-width: 600px;
}

.hero-content h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: 1.2em;
    margin-bottom: 20px;
}

.news {
    margin-top: 100px;
    padding: 20px;
}

.news h2 {
    font-size: 2em;
}

.news-item {
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 15px;
}
</style>

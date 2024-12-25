<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/about">Карта поставщиков</router-link></li>
      </ul>
    </nav>

    <section class="hero">
      <h1>Онлайн-магазин прачечного оборудования</h1>
      <p>Ваш надежный партнер в мире поставок</p>
    </section>

    <div class="content">
      <h2>Главная страница</h2>
      <p>Подзаголовок</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  display: inline;
  margin-right: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.hero {
  background-image: url('https://avatars.mds.yandex.net/i?id=32176ebb69397a0c7efdf26cf9a3d213_l-5869158-images-thumbs&n=13');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  width: 100%; /* Обеспечивает полную ширину */
}

.content {
  padding: 20px; /* Добавляем отступы для контента */
}

h1, h2 {
  color: white; /* Сохраняем заголовки белыми для видимости */
}
</style>

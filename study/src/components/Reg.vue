<!-- Регистрация через локалку ссылка в чате -->
<template>
  <nav class="navbar">
        <div class="links">
          <router-link to="/">Главная</router-link>
          <router-link to="/request">Техобслуживание</router-link>
          <router-link to="/about">Карта поставщиков</router-link>
        </div>
      </nav>
  <section class="hero">
      <h1>Регистрация</h1>
      <p></p>
  </section>
  <div class="reg">
    <p>Введите почту</p>
    <input class="email"  v-model="text" placeholder="Введите почту">
    <p>Введите пароль</p>
    <input class="password" v-model="text" placeholder="Введите пароль">
  </div>
</template>
  
<script>
export default {
  name: 'Reg',
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
.links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.hero {
position: relative;
left: 0;
right: 0;
top: 0;
}
.reg {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
  
<template>
  <div id="app">
 <nav>
  <router-link to="/"> Главная</router-link>
  <router-link to="/about">Карта поставщиков</router-link>
 </nav>
 <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 15px;
}
</style>

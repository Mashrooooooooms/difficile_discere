<template>
  <div id="app">

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
    display: flex;
    flex-direction: column; /* Вертикальное расположение элементов */
    align-items: center; /* Центрирование по горизонтали */
    justify-content: center; /* Центрирование по вертикали */
    min-height: 100vh; /* Минимальная высота на весь экран */
    width: 100%;
}

</style>
<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal registration-modal">
      <button class="close-button" @click="$emit('close')">&times;</button>
      <h2>Регистрация</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Введите почту</label>
          <input id="email" class="email" v-model="email" type="email" placeholder="Введите почту" required>
        </div>
        <div class="form-group">
          <label for="password">Введите пароль</label>
          <input id="password" class="password" v-model="password" type="password" placeholder="Введите пароль" required>
        </div>
        <button type="submit" class="submit-button">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationModal',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Здесь будет логика регистрации
      console.log('Регистрация:', this.email, this.password);
      // После успешной регистрации:
      this.$emit('close');
    }
  }
}
</script>

<template>
    <div>
        <nav class="navbar">
            <ul>
                <li><router-link to="/">Главная</router-link></li>
                <li><router-link to="/about">Карта поставщиков</router-link></li>
                <li><router-link to="/reg">Регистрация</router-link></li>
            </ul>
        </nav>

        <h1>Заявки на ремонт</h1>

        <form @submit.prevent="submitRequest" class="request-form">
            <div class="form-group">
                <label for="name">Ваше имя:</label>
                <input type="text" id="name" v-model="request.name" required />
            </div>
            <div class="form-group">
                <label for="description">Описание проблемы:</label>
                <textarea id="description" v-model="request.description" required></textarea>
            </div>
            <button type="submit">Отправить заявку</button>
        </form>

        <div v-if="submitted" class="success-message">
            Заявка успешно отправлена!
        </div>
    </div>
</template>

<script>
export default {
    name: 'Request',
    data() {
        return {
            request: {
                name: '',
                description: ''
            },
            submitted: false
        };
    },
    methods: {
        submitRequest() {
            console.log('Заявка отправлена:', this.request);
            this.request.name = '';
            this.request.description = '';
            this.submitted = true;

            setTimeout(() => {
                this.submitted = false;
            }, 3000);
        }
    }
}
</script>

<style>
.navbar {
    background-color: #333;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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

h1 {
    margin-top: 70px;
}

.request-form {
    margin-top: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
}

.form-group input,
.form-group textarea {
    width: calc(100% - 20px);
    padding: 10px;
}

button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}

.success-message {
    margin-top: 20px;
    color: green;
}
</style>

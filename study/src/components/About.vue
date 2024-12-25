<template>
    <div id="app">
        <div class="content">
            <h1>Карта поставщиков</h1>
            <p>Карта на js, потому что документацию Яндекса по Vue писали пленные китайы</p>
            <nav class="navbar">
                <div class="links">
                    <router-link to="/">Главная</router-link>
                    <router-link to="/suppliers">Карта поставщиков</router-link>
                </div>
            </nav>
            <div id="map" style="width: 100%; height: 720px;"></div>

            <!-- Модальное окно -->
            <div v-if="isModalVisible" class="modal">
                <div class="modal-content">
                    <span class="close" @click="closeModal">&times;</span>
                    <h2>Добавить метку</h2>
                    <input v-model="placemarkName" placeholder="Название метки" />
                    <textarea v-model="placemarkDescription" placeholder="Описание метки"></textarea>
                    <button @click="addPlacemarkToMap">Поставить метку</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'About',
    data() {
        return {
            isModalVisible: false,
            placemarkName: '',
            placemarkDescription: '',
            currentCoords: null,
        };
    },
    mounted() {
        if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;
            script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';

            document.body.appendChild(script);
            script.onload = () => {
                this.initializeMap();
            };
        } else {
            this.initializeMap();
        }
    },
    methods: {
        initializeMap() {
            ymaps.ready(() => {
                const map = new ymaps.Map("map", {
                    center: [55.20204227164733, 34.303557086157916],
                    zoom: 12,
                });

                const placemarks = [
                    { coords: [55.550198951533474, 34.997083701296560], name: "Поставщик 1", description: "г.Гагарин, ТЦ 'Гагаринский'" },
                    { coords: [54.78978492262485, 32.06460220573455], name: "Поставщик 2", description: "Смоленск, место с красивыми видами" },
                    { coords: [55.706063892073786, 37.51089695640629], name: "Поставщик 3", description: "Москва, рядом можно поесть" }
                ];

                placemarks.forEach(placemark => {
                    const point = new ymaps.Placemark(placemark.coords, {
                        balloonContentHeader: placemark.name,
                        balloonContentBody: placemark.description,
                    });
                    map.geoObjects.add(point);
                });

                // Добавляем обработчик клика на карту
                map.events.add('click', (e) => {
                    this.currentCoords = e.get('coords'); // Получаем координаты клика
                    this.isModalVisible = true; // Открываем модальное окно
                });
                
                this.mapInstance = map; // Сохраняем ссылку на экземпляр карты
            });
        },
        addPlacemarkToMap() {
            if (this.currentCoords && this.placemarkName && this.placemarkDescription) {
                const newPlacemark = new ymaps.Placemark(this.currentCoords, {
                    balloonContentHeader: this.placemarkName,
                    balloonContentBody: this.placemarkDescription,
                });
                this.mapInstance.geoObjects.add(newPlacemark); // Добавляем новую метку на карту
                this.closeModal(); // Закрываем модальное окно и очищаем поля
            }
        },
        closeModal() {
            this.isModalVisible = false;
            this.placemarkName = '';
            this.placemarkDescription = '';
        }
    }
}
</script>


<style scoped>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    color: green;
}

p {
    text-align: center;
}

.navbar {
    background-color: #4CAF50;
    width: 100%;
}

.links {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.links a {
    color: white;
    text-decoration: none;
    margin-right: 15px;
}

.links a:hover {
    text-decoration: underline; 
}

#map {
    width: 100%; 
    height: 720px;
}

/* Стили для модального окна */
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border-radius: 5px; /* Добавлено закругление углов */
    width: 400px; /* Ширина модального окна */
}

/* Стили для заголовка и полей ввода */
h2 {
    margin-bottom: 10px; /* Отступ снизу для заголовка */
}

input, textarea {
    width: calc(100% - 20px); /* Ширина с учетом отступов */
    padding: 10px; /* Отступ внутри полей */
    margin-bottom: 10px; /* Отступ снизу для полей */
}

/* Стили для кнопок */
.modal-buttons {
    display: flex;
    justify-content: flex-end; /* Выравнивание кнопки вправо */
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
}
.close:hover,
.close:focus {
    color: black;
}
</style>


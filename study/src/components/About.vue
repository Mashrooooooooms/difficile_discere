<template>
    <div id="app">
        <nav class="navbar">
            <div class="links">
                <router-link to="/">Главная</router-link>
                <router-link to="/request">Заявка на ремонт</router-link>
                <router-link to="/reg">Регистрация</router-link>
            </div>
        </nav>
        <div class="content">
            <section class="hero">
                <div class="hero-content">
                    <h1>Карта поставщиков</h1>
                    <p>Карта на js, потому что документацию Яндекса по Vue писали пленные китайцы</p>
                </div>
            </section>
            <div id="map" style="width: 100%; height: 680px;"></div>
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

                map.events.add('click', (e) => {
                    this.currentCoords = e.get('coords');
                    this.isModalVisible = true;
                });
                
                this.mapInstance = map;
            });
        },
        addPlacemarkToMap() {
            if (this.currentCoords && this.placemarkName && this.placemarkDescription) {
                const newPlacemark = new ymaps.Placemark(this.currentCoords, {
                    balloonContentHeader: this.placemarkName,
                    balloonContentBody: this.placemarkDescription,
                });
                this.mapInstance.geoObjects.add(newPlacemark);
                this.closeModal();
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
.navbar {
    position: absolute;
    top: 20px;
    left: 20px;
}

.links {
    list-style-type: none;
    padding: 0;
}

.links a {
    margin-right: 15px;
    text-decoration: none;
    color: white;
}

.links a:hover {
    text-decoration: underline;
}

.content {
    margin-top: 60px;
}
</style>

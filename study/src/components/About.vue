<template>
    <div id="app">
        <nav class="navbar">
            <div class="links">
                <router-link to="/">Главная</router-link>
                <router-link to="/about">Карта поставщиков</router-link>
            </div>
        </nav>
        <div class="content">
            <section class="hero">
                <div class="hero-content">
                    <h1>Карта поставщиков</h1>
                    <p>Карта на js, потому что документацию Яндекса по Vue писали пленные китайцы</p>
                </div>
            </section>
            <div id="map"></div>

            <!-- Модальное окно -->
            <modal v-if="isModalVisible" @close="closeModal">
                <template #header>
                    <h2>Добавить метку</h2>
                </template>
                <template #body>
                    <input v-model="placemarkName" placeholder="Название метки" />
                    <textarea v-model="placemarkDescription" placeholder="Описание метки"></textarea>
                </template>
                <template #footer>
                    <button @click="addPlacemarkToMap">Поставить метку</button>
                </template>
            </modal>
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
            mapInstance: null,
        };
    },
    mounted() {
        this.loadYandexMaps();
    },
    methods: {
        loadYandexMaps() {
            if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
                script.async = true;
                script.onload = this.initializeMap;
                document.body.appendChild(script);
            } else {
                this.initializeMap();
            }
        },
        initializeMap() {
            ymaps.ready(() => {
                this.mapInstance = new ymaps.Map("map", {
                    center: [55.20204227164733, 34.303557086157916],
                    zoom: 12,
                });

                this.addInitialPlacemarks();
                this.mapInstance.events.add('click', (e) => {
                    this.currentCoords = e.get('coords');
                    this.isModalVisible = true;
                });
            });
        },
        addInitialPlacemarks() {
            const placemarks = [
                { coords: [55.550198951533474, 34.997083701296560], name: "Поставщик 1", description: "г.Гагарин, ТЦ 'Гагаринский'" },
                { coords: [54.78978492262485, 32.06460220573455], name: "Поставщик 2", description: "Смоленск, место с красивыми видами" },
                { coords: [55.706063892073786, 37.51089695640629], name: "Поставщик 3", description: "Москва, рядом можно поесть" }
            ];

            placemarks.forEach(({ coords, name, description }) => {
                const point = new ymaps.Placemark(coords, {
                    balloonContentHeader: name,
                    balloonContentBody: description,
                });
                this.mapInstance.geoObjects.add(point);
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
html, body { height: 100%; margin: 0; padding: 0; }
#app { display: flex; flex-direction: column; height: 100%; }
.navbar { background-color: #333; width: 100%; }
.links { display: flex; justify-content: center; padding: 10px; }
.links a { color: white; text-decoration: none; margin-right: 15px; }
.links a:hover { text-decoration: underline; }
.content { flex-grow: 1; display: flex; flex-direction: column; align-items: center; }
.hero { background-image: url('https://avatars.mds.yandex.net/i?id=32176ebb69397a0c7efdf26cf9a3d213_l-5869158-images-thumbs&n=13'); width: 100%; height: 300px; background-size: cover; display:flex; align-items:center; justify-content:center; }
.hero-content { color:white; text-align:center; }
#map { width:100%; height:720px; }

/* Modal styles */
.modal { position:fixed; z-index:1; left:0; top:0; width:100%; height:100%; overflow:auto; background-color:rbg(0,0,0); background-color:rbg(0,0,0,0.4); }
.modal-content { background-color:#fefefe; margin:auto; padding:20px; border-radius:5px; width:400px;}
.close { color:#aaa;}
.close:hover, .close:focus { color:black;}
</style>

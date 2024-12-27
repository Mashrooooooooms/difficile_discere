<template>
    <div id="app">
      <nav class="navbar">
        <div class="links">
          <router-link to="/">Главная</router-link>
          <router-link to="/request">Техобслуживание</router-link>
          <button class="search-button" @click="openSearch">Поиск</button> <!-- Кнопка поиска -->
        </div>
      </nav>
      <div class="content">
        <div id="map" style="
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;">
        </div>
      </div>
  
      <!-- Компонент поиска -->
      <Search v-if="isSearchVisible" @close="isSearchVisible = false" />
    </div>
  </template>
  
  <script>
  import Search from '@/components/Search.vue';
  
  export default {
    name: 'Map',
    components: {
      Search // Регистрация компонента
    },
    data() {
      return {
        mapInstance: null,
        isSearchVisible: false // Переменная для управления видимостью поиска
      };
    },
    mounted() {
      if (!document.querySelector('script[src*="api-maps.yandex.ru"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
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
            zoom: 7,
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
  
          this.mapInstance = map;
        });
      },
      openSearch() {
        this.isSearchVisible = true; // Открытие компонента поиска
      }
    }
  }
  </script>
  
  
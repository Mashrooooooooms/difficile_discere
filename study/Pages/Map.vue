<template>
  <div id="app">
    <nav class="navbar">
      <div class="links">
        <router-link to="/">Главная</router-link>
        <router-link to="/request">Техобслуживание</router-link>
        <button class="search-button" @click="openSearch">Поиск</button> <!-- Кнопка поиска -->
        <button class="search-nearest-button" @click="findNearestSuppliers">Поиск ближайших поставщиков</button> <!-- Новая кнопка -->
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
      isSearchVisible: false, // Переменная для управления видимостью поиска
      placemarks: [
        { coords: [55.550198951533474, 34.997083701296560], name: "Поставщик 1", description: "г.Гагарин, ТЦ 'Гагаринский'" },
        { coords: [54.78978492262485, 32.06460220573455], name: "Поставщик 2", description: "Смоленск, место с красивыми видами" },
        { coords: [55.706063892073786, 37.51089695640629], name: "Поставщик 3", description: "Москва, рядом можно поесть" }
      ]
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

        this.addPlacemarks(map);
        
        this.mapInstance = map;
      });
    },
    addPlacemarks(map) {
      this.placemarks.forEach(placemark => {
        const point = new ymaps.Placemark(placemark.coords, {
          balloonContentHeader: placemark.name,
          balloonContentBody: placemark.description,
        });
        map.geoObjects.add(point);
      });
    },
    getUserLocation() {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            resolve([position.coords.latitude, position.coords.longitude]);
          }, reject);
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    },
    findNearestPlacemark(userCoords) {
      let nearestPlacemark = null;
      let minDistance = Infinity;

      this.placemarks.forEach(placemark => {
        const distance = this.calculateDistance(userCoords, placemark.coords);
        if (distance < minDistance) {
          minDistance = distance;
          nearestPlacemark = placemark;
        }
      });

      return nearestPlacemark;
    },
    calculateDistance(coords1, coords2) {
      const R = 6371; // Радиус Земли в километрах
      const dLat = this.degreesToRadians(coords2[0] - coords1[0]);
      const dLon = this.degreesToRadians(coords2[1] - coords1[1]);
      
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degreesToRadians(coords1[0])) * Math.cos(this.degreesToRadians(coords2[0])) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      
      return R * c; // Расстояние в километрах
    },
    degreesToRadians(degrees) {
      return degrees * (Math.PI / 180);
    },
    
    findNearestSuppliers() {
      this.getUserLocation().then(userCoords => {
        const nearestPlacemark = this.findNearestPlacemark(userCoords);
        
        if (nearestPlacemark) {
          this.mapInstance.setCenter(nearestPlacemark.coords); // Центрируем карту на ближайшем поставщике
          this.mapInstance.setZoom(12); // Устанавливаем зум на 18

          // Добавляем метку на карту
          const point = new ymaps.Placemark(nearestPlacemark.coords, {
            balloonContentHeader: nearestPlacemark.name,
            balloonContentBody: nearestPlacemark.description,
          });
          this.mapInstance.geoObjects.add(point);
          
          // Можно также показать балун с информацией о ближайшем поставщике
          point.balloon.open();
        }
      }).catch(error => {
        console.error("Ошибка получения местоположения:", error);
      });
    },

    openSearch() {
      this.isSearchVisible = true; // Открытие компонента поиска
    }
  }
}
</script>

<style scoped>
/* Добавьте стили для компонента карты по необходимости */
.search-nearest-button {
  margin-left: 10px; /* Отступ между кнопками */
}
</style>

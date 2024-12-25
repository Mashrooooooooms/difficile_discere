<template>
    <yandex-map v-model="map" :settings="settings" style="width: 100%; height: 500px;">
      <yandex-map-default-scheme-layer />
    </yandex-map>
  </template>
  
  <script setup lang="ts">
  import { shallowRef, markRaw } from 'vue';
  import type { YMap } from '@yandex/ymaps3-types';
  
  const map = markRaw(shallowRef<null | YMap>(null));
  
  const settings = {
    location: {
      center: [55.755819, 37.617644],
      zoom: 14,
    },
  };
  </script>
  
<template>
  <div class="home">
    <div id="mapBox"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { createCesiumInstance } from './home';
onMounted(() => {
  createCesiumInstance('mapBox');
});
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #0a0a0a;
}
</style>

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
  background-color: #fff;
  #mapBox {
    width: 100%;
    height: 100%;
  }
}
</style>

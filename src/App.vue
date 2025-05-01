<template>
  <div class="app">
    <NavBar/>
    <RouterView id="router-view"/>
  </div>
</template>

<style>

@font-face {
  font-family: 'Quicksand';
  src: url('./assets/quicksand.ttf');
}

@font-face {
  font-family: 'Open Sans';
  src: url('./assets/open-sans.ttf');
}


body {
  margin: 0;
}

.app {
  height: 100vh;
  display: grid;
  grid-template-columns: 15% 85% !important;
  font-family: 'Open Sans';
}

#router-view {
  padding: 25px;
}
</style>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
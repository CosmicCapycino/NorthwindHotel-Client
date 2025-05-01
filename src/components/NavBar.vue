<template>
  <div id="navBar">
    <div id="logo-container">
      <img src="../assets/logo.png" class="logo">
    </div>
    <div id="link-container">
      <RouterLink to="/rooms" class="nav-link">Rooms</RouterLink>
      <RouterLink to="/bookings" class="nav-link">Bookings</RouterLink>
      <RouterLink to="/cleanings" class="nav-link">Cleanings</RouterLink>
    </div>
  </div>
</template>

<style scoped>
#logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}

.logo {
  width: 250px;
  height: 250px;
}

#navBar {
  background: #373e57;
  padding: 0 20px;
}

#link-container {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
  height: auto;
  font-size: 1.2rem;
}

.nav-link:hover {
  color: #bcbcbc;
  transition: 0.2s;
}
</style>
<script setup lang="ts">
</script>
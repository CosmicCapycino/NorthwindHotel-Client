<template>
  <div id="login-container">
    <v-card id="login-card" elevation="12">
      <v-card-text id="login-card-text">
        <img src="@/assets/logo-black.png"/>
          <div id="login-form">
            <v-text-field v-model="username" placeholder="Username"></v-text-field>
            <v-text-field v-model="password" type="password" placeholder="Password"></v-text-field>
            <v-btn @click="login">Login</v-btn>
          </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      await this.$apiService.auth.login(this.username, this.password)
    }
  }
}
</script>

<style scoped>
#login-container {
  background-image: url("~@/assets/login-bg.jpg");
  background-size: cover;
  height: 100vh;
}

#login-card {
  width: 25%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  animation: fade-in 1s;
}

#login-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#login-card-text img {
  width: 50%;
  height: 50%;
}

#login-form {
  width: 100%;
  padding: 20px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    top: 60%;
  }
  100% {
    opacity: 1;
    top: 50%;
  }
}
</style>
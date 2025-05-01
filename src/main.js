import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import apiService from "@/services/apiService";

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

fetch(process.env.BASE_URL + 'config.json').then((response) => response.json()).then((config) => {
    app.use(router);
    // Everything below here setups up the container regardless of if auth is enabled
    app.use(apiService, true, config.apiServer);
    app.use(vuetify);
    app.mount('#app');
});
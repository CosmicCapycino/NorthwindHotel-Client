import axios from "axios";
import bookingRoutes from "./routes/bookingRoutes";

const axiosInstance = axios.create();
const bookings = new bookingRoutes(axiosInstance);

function configureService(apiConfig) {
    axiosInstance.defaults.baseURL = (apiConfig.ssl ? 'https' : 'http') + "://" + apiConfig.host + (apiConfig.port !== null ? `:${apiConfig.port}` : null);
}

function install(app, useAuth = false, config) {
    app.config.globalProperties.$apiService = this;
    if(app.config.globalProperties.$apiService === this) {
        console.log("API service installed!")
    }
    if(useAuth) {
        console.log("Enabling auth...");
        //const userStore = useUserStore();
        //userStore.setToken(app.config.globalProperties.$cookies.get("token"));
        //axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userStore.token}`;
    }

    configureService(config)
}

const apiService = {
    install,
    bookings
}

export default apiService;
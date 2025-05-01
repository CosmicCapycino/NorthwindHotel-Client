import axios from "axios";
import bookingRoutes from "./routes/bookingRoutes";
import authRoutes from "@/services/apiService/routes/authRoutes";

const axiosInstance = axios.create();
const bookings = new bookingRoutes(axiosInstance);
const auth = new authRoutes(axiosInstance);

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
    auth,
    bookings
}

export default apiService;
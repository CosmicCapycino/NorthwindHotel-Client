import { createWebHistory, createRouter } from 'vue-router'
import BookingsView from "@/views/BookingsView.vue";
import CleaningsView from "@/views/CleaningsView.vue";
import RoomsView from "@/views/RoomsView.vue";
import DashboardView from "@/views/DashboardView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: DashboardView
    },
    {
        path: "/bookings",
        name: "Bookings",
        component: BookingsView
    },
    {
        path: "/cleanings",
        name: "Cleanings",
        component: CleaningsView
    },
    {
        path: "/rooms",
        name: "Rooms",
        component: RoomsView
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    console.log(to);
})

export default router;
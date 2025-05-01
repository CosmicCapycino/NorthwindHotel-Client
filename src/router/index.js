import { createMemoryHistory, createRouter } from 'vue-router'
import BookingsView from "@/views/BookingsView.vue";
import CleaningsView from "@/views/CleaningsView.vue";
import RoomsView from "@/views/RoomsView.vue";
import DashboardView from "@/views/DashboardView.vue";

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
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;
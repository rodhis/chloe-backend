import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "../views/About/AboutView.vue";
import RoomsView from "../views/Rooms/RoomsView.vue";
import BookView from "../views/Book/BookView.vue";
import ContactView from "../views/Contact/ContactView.vue";
import SignView from "../views/Sign/SignView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/sobre",
        name: "sobre",
        component: AboutView,
    },
    {
        path: "/acomodacoes",
        name: "acomodacoes",
        component: RoomsView,
    },
    {
        path: "/reservar",
        name: "reservar",
        component: BookView,
    },
    {
        path: "/contato",
        name: "contato",
        component: ContactView,
    },
    {
        path: "/sign",
        name: "sign",
        component: SignView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

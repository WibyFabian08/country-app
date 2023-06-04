import { createRouter, createWebHistory } from "vue-router";
import {Home, Detail} from "../pages";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/detail/:name",
            name: "detail",
            component: Detail
        }
    ]
})

export default router;
import { createRouter,createWebHistory  } from "vue-router";
import LoginApp from "@/components/LoginApp.vue";
import RegisterApp from "@/components/RegisterApp.vue";

const routes = [
    {
        name:"HomePage",
        path: "/",
        component: () => import("@/components/HomeApp.vue"),

    },
    {   
        name:"LoginPage",
        path: '/login',
        component:LoginApp
    },
    {
        name:"RegisterPage",
        path: '/register',
        component:RegisterApp
    }
]

const router = createRouter({
    history: createWebHistory (),
    routes
})
export default router
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import LeaderboardPage from "../views/LeaderboardPage.vue";
import ContactPage from "../views/ContactPage.vue";
import LoginPage from "../views/LoginPage.vue"
import { useUserStore } from "../stores/user";

const routes: RouteRecordRaw[] = [
    { path: "/", name: "Landing", component: LandingPage },
    //{ path: "/about", name: "About", component: AboutPage },
    { path: "/leaderboard", name: "Leaderboard", component: LeaderboardPage, meta: { requiresAuth: true } },
    { path: "/contact", name: "Contact", component: ContactPage, meta: { requiresAuth: true } },
    { path: "/login", name: "Login", component: LoginPage},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
        return { name: "Login" };
    }
});

export default router

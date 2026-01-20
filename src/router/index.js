import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {APP_ROUTES} from "../../utils/config.js";

const routes = [
    {path: APP_ROUTES.MEAL_DASHBOARD, name: 'home', component: HomeView},
    {path: APP_ROUTES.MEAL_CATEGORY, name: 'category', component: () => import('@/views/CategoryView.vue')},
    {path: APP_ROUTES.AREA_MEAL, name: 'area', component: () => import('@/views/AreaView.vue')},
    {path: APP_ROUTES.MEAL_DETAILS, name: 'meal-details', component: () => import('@/views/MealDetailsView.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
